import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function SingleImageCard({ title, imageUrl, view }) {
  return (
    <div className="IC" data-aos="fade-up" data-aos-duration="1200">
      <span className="IC__title">{title}</span>
      <Image alt="" src={imageUrl} className="img-fluid SIC__image" />
      {view ? (
        <Link to="/products">
          <p className="IC__link">View all</p>
        </Link>
      ) : (
        <p className="IC__link">See more</p>
      )}
    </div>
  );
}

export default SingleImageCard;
