import React from "react";
import "./style.css";

function UptoSixtyPercentOff() {
  return (
    <div className="off-wrapper">
      <div className="products-wrapper bg-white">
        <h5>Up to 60% off | Bestselling home & kitchen products</h5>
        <div className="product-list-wrapper text-center">
          <img
            src="https://m.media-amazon.com/images/I/41i2fdMBYSL._AC_SY200_.jpg"
            alt=""
            className="img-fluid"
          />
          <img
            src="https://m.media-amazon.com/images/I/41iZz4dXr0L._AC_SY200_.jpg"
            alt=""
            className="img-fluid"
          />
          <img
            src="https://m.media-amazon.com/images/I/413KblCfjoL._AC_SY200_.jpg"
            alt=""
            className="img-fluid"
          />
          <img
            src="https://m.media-amazon.com/images/I/41r9i8saBtL._AC_SY200_.jpg"
            alt=""
            className="img-fluid"
          />
          <img
            src="https://m.media-amazon.com/images/I/41r3zjgA5gL._AC_SY200_.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default UptoSixtyPercentOff;
