import React from "react";
import "./style.css";
import SingleImageCard from "./SingleImageCard";
import FourImageCard from "./FourImageCard";

function Showcase() {
  return (
    <div className="showcase-wrapper">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPantry/December/SVD/GWICICIHero/PnatrySet3/SVD_Pantry_Desktop_hero_1500x600_ICICI_2._CB414528928_.jpg"
        alt=""
        className="img-fluid showcase-img"
      />
      <div className="showcase-brands-wrapper">
        <SingleImageCard
          title="For a productive home office"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/GW/Dashboard/WFH_GW_DC_379x304._SY304_CB417122473_.jpg"
        />
        <SingleImageCard
          title="Chocolates, sweets & more"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <FourImageCard
          title="Amazon Brands & more"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/Mixer_B07RYL7NSH_Asins_186x116._SY116_CB409842842_.jpg"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"
        />
        <FourImageCard
          title="Women's western wear | Up to 60% off"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/PstJUP-GW/Eng/Womens_Western_Wear/PC/Clothing._SY116_CB417236712_.jpg"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/PstJUP-GW/Eng/Womens_Western_Wear/PC/Footwear._SY116_CB417236712_.jpg"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/PstJUP-GW/Eng/Womens_Western_Wear/PC/handbags._SY116_CB417236712_.jpg"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/PstJUP-GW/Eng/Womens_Western_Wear/PC/fashion-jewellery._SY116_CB417236712_.jpg"
        />
        <SingleImageCard
          title="Fashion clearance store | 50% - 70% off"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/WRS_PC_June16/WRC_CC/Flexible_Desktop__Cat_Card_2X._SY304_CB429564537_.jpg"
        />
        <SingleImageCard
          title="Luxury ayurveda products"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/Luxury-Category-card-1x._SY304_CB448731790_.jpg"
        />
        <FourImageCard
          title="Beauty products"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Beauty/Beauty_BAY-186x116_QC-Makeup._SY116_CB431333301_.jpg"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/November/BeautyBAY-186x116QC-Haircare._SY116_CB448752655_.jpg"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/November/BeautyBAY-186x116QC-Makeup._SY116_CB448752655_.jpg"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Beauty/Beauty_BAY-186x116_QC--Makeup._SY116_CB431333301_.jpg"
        />
        <SingleImageCard
          title="Up to 50% off | Chimneys"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Chimney_GW_CC_379x304._SY304_CB427965740_.jpg"
        />
      </div>
    </div>
  );
}

export default Showcase;
