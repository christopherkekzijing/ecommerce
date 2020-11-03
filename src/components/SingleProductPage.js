import React, { useContext, useState } from "react";
import "../css/SingleProductPage.css";
import { data } from "../data.js";
import { StateContext } from "../StateProvider";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function SingleProductPage() {
  const { dispatch, notify } = useContext(StateContext);
  const [amount, setAmount] = useState(1);

  let productId = window.location.pathname;
  let getProductId = productId.split("products/");
  const dataSorted = data.filter((item) => item.id === getProductId[1]);

  const increase = () => {
    setAmount(amount + 1);
  };

  const decrease = () => {
    if (amount >= 2) {
      setAmount(amount - 1);
    }
  };

  const addToBasket = () => {
    notify("Item Added", `You've added ${amount} item!`, "success");

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: dataSorted[0].id,
        title: dataSorted[0].title,
        price: dataSorted[0].price,
        rating: dataSorted[0].rating,
        image: dataSorted[0].image,
        amount: amount,
      },
    });
    console.log(dataSorted[0].amount);
  };

  return (
    <div className="singleProduct">
      <div className="singleProduct_left">
        <img src={dataSorted[0].image} alt={dataSorted[0].title} />
      </div>
      <div className="singleProduct_right">
        <div className="singleProduct_right_product_rating">
          {"🌟".repeat(dataSorted[0].rating)}
        </div>
        <p className="singleProduct_product_title">{dataSorted[0].title}</p>
        <p className="singleProduct_product_title_product_price">
          <small>$</small>
          <strong>{dataSorted[0].price}</strong>
        </p>
        <div className="singleProduct_addtocart">
          <button onClick={addToBasket}>Add to Basket</button>
          <div className="singleProduct_right_checkout_toggle">
            <AddIcon onClick={increase} />
            <p>{amount}</p>
            <RemoveIcon onClick={decrease} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
