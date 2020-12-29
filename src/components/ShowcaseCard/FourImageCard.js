import React from "react";
import "./style.css";

function FourImageCard({
  title,
  image1,
  label1,
  image2,
  label2,
  image3,
  label3,
  image4,
  label4,
}) {
  const propsArray = [
    { label: label1, image: image1 },
    { label: label2, image: image2 },
    { label: label3, image: image3 },
    { label: label4, image: image4 },
  ];
  return (
    <div className="IC" data-aos="fade-up" data-aos-duration="1200">
      <p className="IC__title">{title}</p>
      <div className="IC__grid">
        {propsArray.map((item) => {
          return (
            <div>
              <img src={item.image} alt="" className="img-fluid" />
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>
      <p className="IC__link">See more</p>
    </div>
  );
}

export default FourImageCard;
