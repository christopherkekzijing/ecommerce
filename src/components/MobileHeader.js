import React, { useContext } from "react";
import "../css/Header.css";
import "../css/MobileHeader.css";
import BurgerMenu from "./BurgerMenu";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { StateContext } from "../StateProvider";

function MobileHeader() {
  const { user, amount, searchTerm, dispatch } = useContext(StateContext);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = window.location.pathname;
    const location = url.split("/");

    if (location[1] !== "search") {
      history.push("/search");
    }
  };

  const handleChange = (e) => {
    dispatch({
      type: "ADD_SEARCH",
      payload: e.target.value,
    });
    console.log(searchTerm);
  };

  console.log(user);

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <form onSubmit={handleSubmit} className="header_search_form">
        <div className="header_search">
          <input
            className="header_searchInput"
            type="text"
            name="search"
            value={searchTerm}
            onChange={handleChange}
          />
          <button className="header_searchIcon">
            <SearchIcon className="header_searchIcon-i" />
          </button>
        </div>
      </form>

      <div className="header_nav">
        <Link to="/checkout">
          <div className="mobileHeader_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_option1-2 mobileHeader_basketCount">
              {amount}
            </span>
          </div>
        </Link>
        <div className="mobileHeader_userIcon">
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
