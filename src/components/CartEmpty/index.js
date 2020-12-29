import React from "react";
import { Image } from "react-bootstrap";
import "./style.css";

function EmptyCart() {
  return (
    <div className="empty__basket-container">
      <Image
        src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
        alt=""
        className="img-fluid empty__basket-image"
      />
      <p>Your Amazon Basket is empty</p>
    </div>
  );
}

export default EmptyCart;
