import React, { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { StateContext } from "./StateProvider";
import ReactNotification from "react-notifications-component";
import SingleProductPage from "./components/SingleProductPage";

const promise = loadStripe(
  "pk_test_51Hgh6rGs2aQeOL98kIjrnE1n58gztoztMFNZK15dObZ5SNiDTUvJOlzD2MGNkfjRdOe2mBzUvztX5QFBscNXvNva00U2m96Jix",
);

function App() {
  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/search">
            <Header />
            <Search />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/payment">
            <Header />
            <ReactNotification />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <ReactNotification />
            <Checkout />
          </Route>
          <Route exact path="/products/:productId">
            <Header />
            <ReactNotification />
            <SingleProductPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
