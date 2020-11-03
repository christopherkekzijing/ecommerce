import React from "react";
import "../css/Product.css";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating, amount }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">{"🌟".repeat(rating)}</div>
      </div>
      <img src={image} alt={title} />
      <Link to={`/products/${id}`}>
        <button>View Product</button>
      </Link>
    </div>
  );
}

export default Product;
