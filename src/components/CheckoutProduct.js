import React, { forwardRef, useContext } from "react";
import "../css/CheckoutProduct.css";
import { StateContext } from "../StateProvider";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, hiddenButton, amount }, ref) => {
    const { dispatch, notify } = useContext(StateContext);

    const removeBasket = () => {
      notify("Item Removed", "You've removed an item!", "danger");
      dispatch({
        type: "REMOVE_BASKET",
        payload: id,
      });
    };

    const increase = () => {
      notify("Item Added", `You've added an item!`, "success");

      dispatch({
        type: "INCREASE",
        payload: id,
      });
    };

    const decrease = () => {
      notify("Item Removed", "You've removed an item!", "warning");

      dispatch({
        type: "DECREASE",
        payload: id,
      });
    };

    return (
      <div ref={ref} className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} alt={title} />
        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">{title}</p>
          <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <p>{"🌟".repeat(rating)}</p>
          {!hiddenButton && (
            <button onClick={removeBasket}>Remove from basket</button>
          )}
          {!hiddenButton && (
            <div className="checkout_toggle">
              <AddIcon onClick={increase} />
              <p>{amount}</p>
              <RemoveIcon onClick={decrease} />
            </div>
          )}
        </div>
      </div>
    );
  },
);

export default CheckoutProduct;
