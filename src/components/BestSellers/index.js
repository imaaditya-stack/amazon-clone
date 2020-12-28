import React from "react";
import "./style.css";

function BestSellers() {
  return (
    <div className="td" style={{ overflowX: "hidden" }}>
      <div
        className="td-main-div bg-white"
        data-aos="slide-left"
        data-aos-duration="1200"
      >
        <h4>Best Sellers in Sports, Fitness & Outdoors</h4>
        <br />
        <div className="td-products">
          <div>
            <img
              src="https://m.media-amazon.com/images/I/41TXCe7NGML._AC_SY200_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/415EBh-tfVL._AC_SY200_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/41w+SzuP4VL._AC_SY200_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/418h5rn6bPL._AC_SY200_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/51kyYWvUMqL._AC_SY200_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/51ZRrjXy2zL._AC_SY200_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
