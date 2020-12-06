import React from "react";
import "./style.css";
import TodaysDealsCard from "./Card";

function TodaysDeals() {
  return (
    <div className="todays-deals-wrapper">
      <div className="todays-deals-products-wrapper bg-white p-3">
        <h5>Today's Deals</h5>
        <br />
        <div className="todays-deals-card-wrapper">
          <TodaysDealsCard image="https://m.media-amazon.com/images/I/41ImsZy3u5L.__AC_SY200_.jpg" />
          <TodaysDealsCard image="https://m.media-amazon.com/images/I/31sXUza30LL.__AC_SY200_.jpg" />
          <TodaysDealsCard image="https://m.media-amazon.com/images/I/41piMUqDDLL.__AC_SY200_.jpg" />
          <TodaysDealsCard image="https://m.media-amazon.com/images/I/41p0PLiCyeL.__AC_SY200_.jpg" />
          <TodaysDealsCard image="https://m.media-amazon.com/images/I/31HWlcGvjiL.__AC_SY200_.jpg" />
        </div>
      </div>
    </div>
  );
}

export default TodaysDeals;
