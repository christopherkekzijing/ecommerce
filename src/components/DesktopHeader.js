import React, { useContext } from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { StateContext } from "../StateProvider";
import PersonIcon from "@material-ui/icons/Person";

function ResHeader() {
  const { user, amount, searchTerm, dispatch } = useContext(StateContext);
  const history = useHistory();

  const handleSignOut = () => {
    if (user) {
      auth.signOut();
    }
    history.push("/");
  };

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
        <div className="header_option">
          <span className="header_option1-1">
            {user ? user.email : "Hello Guest!"}
          </span>
          <Link to={!user && "/login"}>
            <div onClick={handleSignOut}>
              <span className="header_option1-2">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
        </div>
        <Link to={user && "/orders"}>
          <div className="header_option">
            <span className="header_option1-1">Returns &</span>
            <span className="header_option1-2">Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option1-1">Your</span>
          <span className="header_option1-2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_option1-2 header_basketCount">
              {amount}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ResHeader;
