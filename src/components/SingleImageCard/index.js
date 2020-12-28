import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SingleImageCard({ title, imageUrl, view }) {
  return (
    <div className="SIC" data-aos="fade-up" data-aos-duration="1200">
      <span className="SIC__title">{title}</span>
      <img alt="" src={imageUrl} className="img-fluid SIC__image" />
      {view ? (
        <Link to="/products">
          <p className="FIC__seeMore">View all</p>
        </Link>
      ) : (
        <p className="FIC__seeMore">See more</p>
      )}
    </div>
  );
}

export default SingleImageCard;
