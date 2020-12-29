import React from "react";
import { BestSellersData } from "../../amazon";
import "./style.css";

function BestSellers() {
  return (
    <div className="widget" style={{ overflowX: "hidden" }}>
      <div
        className="widget__main-div bg-white"
        data-aos="slide-left"
        data-aos-duration="1200"
      >
        <h4>{BestSellersData.title}</h4>
        <br />
        <div className="widget__products-container">
          {BestSellersData.products.map((item) => {
            return (
              <div>
                <img src={item.imageUrl} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
