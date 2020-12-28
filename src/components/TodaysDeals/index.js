import React from "react";
import "./style.css";

function TodaysDeals() {
  return (
    <div className="td" style={{ overflowX: "hidden" }}>
      <div
        className="td-main-div bg-white"
        data-aos="slide-right"
        data-aos-duration="1200"
      >
        <h4>Todays Deals</h4>
        <br />
        <div className="td-products">
          <div>
            <img
              src="https://m.media-amazon.com/images/I/41truuy1aSL.__AC_SY200_.jpg"
              alt=""
            />
            <p>₹ 198.00 - ₹ 698.00</p>
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/51HfbNSrA6L.__AC_SY200_.jpg"
              alt=""
            />
            <p>₹15,998.00</p>
          </div>

          <div>
            <img
              src="https://m.media-amazon.com/images/I/31VlsPDOLxL.__AC_SY200_.jpg"
              alt=""
            />
            <p>₹23,990.00</p>
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/31BHSn2wW7L.__AC_SY200_.jpg"
              alt=""
            />
            <p>₹99.00 - ₹ 9,990.00</p>
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/31eAeTNWtOL.__AC_SY200_.jpg"
              alt=""
            />
            <p>₹ 43,999.00</p>
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/31+8FlMufPL.__AC_SY200_.jpg"
              alt=""
            />
            <p>₹ 2,866.00 - ₹ 10,399.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodaysDeals;
