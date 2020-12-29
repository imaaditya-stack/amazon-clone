import React from "react";
import SingleImageCard from "../ShowcaseCard/SingleImageCard";
import FourImageCard from "../ShowcaseCard/FourImageCard";
import { secondaryShowcase } from "../../amazon";
import "./style.css";

function SecondaryShowcase() {
  return (
    <>
      <div className="secondary__showcase">
        <div className="showcase__cards">
          {secondaryShowcase.map((item) => {
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
    </>
  );
}

export default SecondaryShowcase;
