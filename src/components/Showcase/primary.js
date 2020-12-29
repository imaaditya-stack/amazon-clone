import React from "react";
import "./style.css";
import SingleImageCard from "../ShowcaseCard/SingleImageCard";
import FourImageCard from "../ShowcaseCard/FourImageCard";
import { showcaseBanner, primaryShowcase } from "../../amazon";
import { Banner } from "./Banner";

function Showcase() {
  return (
    <div className="primary__showcase">
      <Banner imageUrl={showcaseBanner} />
      <div className="showcase__cards">
        <SingleImageCard
          title="View All Products"
          view
          imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/gateway/Gateway_Unboxed_1209837_379x304._SY304_CB424157491_.jpg"
        />
        {primaryShowcase.map((item) => {
          return item.type === "FourImageCard" ? (
            <FourImageCard
              title={item.title}
              image1={item.image1}
              label1={item.label1}
              image2={item.image2}
              label2={item.label2}
              image3={item.image3}
              label3={item.label3}
              image4={item.image4}
              label4={item.label4}
            />
          ) : (
            <SingleImageCard title={item.title} imageUrl={item.imageUrl} />
          );
        })}
      </div>
    </div>
  );
}

export default Showcase;
