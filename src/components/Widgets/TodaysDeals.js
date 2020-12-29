import React from "react";
import { Image } from "react-bootstrap";
import { TodaysDealsData } from "../../amazon";
import "./style.css";

function TodaysDeals() {
  return (
    <div className="widget" style={{ overflowX: "hidden" }}>
      <div
        className="widget__main-div bg-white"
        data-aos="slide-right"
        data-aos-duration="1200"
      >
        <h4>{TodaysDealsData.title}</h4>
        <br />
        <div className="widget__products-container">
          {TodaysDealsData.deals.map((item) => {
            return (
              <div>
                <Image src={item.imageUrl} alt="" />
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TodaysDeals;
