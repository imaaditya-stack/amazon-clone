/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

function SingleImageCard({ title, image }) {
  return (
    <div className="brand-card">
      <h5 className="font-weight-bold">{title}</h5>
      <img src={image} alt="" className="img-fluid" />
      <br />
      <div className="mt-3">
        <span>See more</span>
      </div>
    </div>
  );
}

export default SingleImageCard;
