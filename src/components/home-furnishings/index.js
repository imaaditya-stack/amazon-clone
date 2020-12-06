import React from "react";
import "./style.css";
import SingleImageCard from "../showcase/SingleImageCard";
import FourImageCard from "../showcase/FourImageCard";

function HomeFurnishing() {
  return (
    <>
      <div className="home-furnishing-wrapper text-center">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
          className="img-fluid mb-5"
        />
      </div>
      <div className="home-furnishing-products">
        <SingleImageCard
          title="Masks, sanitizers & more"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/GW/PSS_260x260._SY304_CB429046195_.jpg"
        />
        <SingleImageCard
          title="Up to 45% off | Air conditioners"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/GWdesktopcards/Desktop-category-card-adapt_379x304._SY304_CB448536033_.jpg"
        />
        <FourImageCard
          title="Pick from these types of masks"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/WRS__Masksstore_PCQC/1X2._SY116_CB429488904_.jpg"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/WRS__Masksstore_PCQC/1X2._SY116_CB429488904_.jpg"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/WRS__Masksstore_PCQC/1X3._SY116_CB429488904_.jpg"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/WRS__Masksstore_PCQC/1X4._SY116_CB429488904_.jpg"
        />
        <SingleImageCard
          title="Fire TV Stick Lite"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroNov/MSO_Nov/Sheldon1X2._SY304_CB416935227_.jpg"
        />
      </div>
    </>
  );
}

export default HomeFurnishing;
