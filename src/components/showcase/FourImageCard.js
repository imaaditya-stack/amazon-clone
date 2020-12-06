/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function FourImageCard({ title, image1, image2, image3, image4 }) {
  return (
    <div className="brand-card">
      <h5 className="font-weight-bold">{title}</h5>
      <div className="image-grid">
        <img src={image1} alt="" className="img-fluid" />
        <img src={image2} alt="" className="img-fluid" />
        <img src={image3} alt="" className="img-fluid" />
        <img src={image4} alt="" className="img-fluid" />
      </div>
      <div className="my-3">
        <span>See more</span>
      </div>
    </div>
  );
}

export default FourImageCard;
