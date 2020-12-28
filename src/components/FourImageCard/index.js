import React from "react";
import "./style.css";

function FourImageCard({
  title,
  image1,
  label1,
  label2,
  label3,
  label4,
  image2,
  image3,
  image4,
}) {
  return (
    <div className="FIC" data-aos="fade-up" data-aos-duration="1200">
      <p className="FIC__title">{title}</p>
      <div className="img-grid">
        <div className="FIC__imageGrid">
          <div>
            <img src={image1} alt="" className="img-fluid" />
            <p>{label1}</p>
          </div>
          <div>
            <img src={image2} alt="" className="img-fluid" />
            <p>{label2}</p>
          </div>
          <div>
            <img src={image3} alt="" className="img-fluid" />
            <p>{label3}</p>
          </div>
          <div>
            <img src={image4} alt="" className="img-fluid" />
            <p>{label4}</p>
          </div>
        </div>
      </div>
      <p className="FIC__seeMore">See more</p>
    </div>
  );
}

export default FourImageCard;
