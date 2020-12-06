import React from "react";
import "./style.css";

function TodaysDealsCard({ prize, image }) {
  return (
    <div className="todays-deals-card">
      <img src={image} alt="" />
      <br />
      <br />
      <span className="todays-deals-prize">₹ 13,490.00 - ₹ 32,499.00</span>
    </div>
  );
}

export default TodaysDealsCard;
