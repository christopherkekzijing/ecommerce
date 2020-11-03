import React, { useContext } from "react";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import "../css/Checkout.css";
import FlipMove from "react-flip-move";
import { StateContext } from "../StateProvider";

function Checkout() {
  const { user, basket } = useContext(StateContext);
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3 className="checkout_email">Hello {user?.email}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          <FlipMove>
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
                amount={item.amount}
              />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
