import { SatelliteSharp } from "@material-ui/icons";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import { store } from "react-notifications-component";

export const StateContext = createContext();

export const initialState = {
  basket: localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket"))
    : [],
  amount: 0,
  total: 0,
  user: null,
  searchTerm: "",
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
    // console.log(state.basket);
  }, [state]);

  useEffect(() => {
    dispatch({
      type: "GET_TOTALS",
    });
  }, [state.basket]);

  //action

  // const getBasketTotal = (basket) =>
  //   state.basket?.reduce((amount, item) => amount + item.price, 0);
  const updateSearchTerm = (words) => (state.searchTerm = words);

  const notify = (title, message, type) => {
    store.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeInDown"],
      animationOut: ["animate__animated", "animate__fadeOutUp"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  };

  const value = {
    basket: state.basket,
    user: state.user,
    amount: state.amount,
    total: state.total,
    notify,
    dispatch,
    updateSearchTerm,
    searchTerm: state.searchTerm,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

// export const useStateValue = () => useContext(StateContext);
