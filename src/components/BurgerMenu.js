import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link, useHistory } from "react-router-dom";
import { StateContext } from "../StateProvider";
import { auth } from "../firebase";
import PersonIcon from "@material-ui/icons/Person";
import "../css/burgerMenu.css";

function BurgerMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const { user } = useContext(StateContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    if (user) {
      auth.signOut();
    }
    history.push("/");
  };

  return (
    <div className="burgerMenu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <PersonIcon className="burgerMenu_userIcon" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="burgerMenu_dropdown"
      >
        <MenuItem onClick={handleClose}>
          <div className="burgerMenu_user">
            <span className="burgerMenu_option1-2">
              {user ? "Hello " + user.email : "Hello Guest!"}
            </span>
            <Link to={!user && "/login"}>
              <div onClick={handleSignOut}>
                <span className="burgerMenu_option1-1">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="burgerMenu_option">
            <Link to={user && "/orders"}>
              <span className="burgerMenu_option1-1">Returns & Orders</span>
            </Link>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default BurgerMenu;
