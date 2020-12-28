import React from "react";
import "./style.css";
import SingleImageCard from "../SingleImageCard";
import FourImageCard from "../FourImageCard";

function Showcase() {
  return (
    <div className="showcase">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
        alt=""
        className="img-fluid showcase__banner"
        data-aos="fade"
        data-aos-duration="1500"
      />
      <div className="showcase__brandsContainer">
        <SingleImageCard
          title="View All Products"
          view
          imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/gateway/Gateway_Unboxed_1209837_379x304._SY304_CB424157491_.jpg"
        />
        <FourImageCard
          title="Amazon Brands & more"
          label1="Bestsellers"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg"
          label2="Top rated"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/Mixer_B07RYL7NSH_Asins_186x116._SY116_CB409842842_.jpg"
          label3="Great offers"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg"
          label4="Accessories"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"
        />
        <FourImageCard
          title="Home essentials | Amazon Brands & more"
          label1="Bedsheets, curtains & more"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg"
          label2="Top rated"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/Mixer_B07RYL7NSH_Asins_186x116._SY116_CB409842842_.jpg"
          label3="Great offers"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg"
          label4="Accessories"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"
        />
        <SingleImageCard
          title="Chocolates, sweets & more"
          imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
        />
        <FourImageCard
          title="Top picks for your home"
          label1="ACs"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg"
          label2="Washing machines"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_372x232_2._SY116_CB414480869_.jpg"
          label3="Televisions"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_4._SY116_CB414480869_.jpg"
          label4="Refrigerators"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_3._SY116_CB414480869_.jpg"
        />
        <SingleImageCard
          title="Bestselling electronics of 2020 | Year end special"
          imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Bestselling/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB412300631_.jpg"
        />
        <SingleImageCard
          title="For a productive home office"
          imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/GW/Dashboard/WFH_GW_DC_379x304._SY304_CB417122473_.jpg"
        />
        <FourImageCard
          title="EOSS | Style for Mens | Up to 70% off"
          label1="Clothing"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/1._SY116_CB413570652_.jpg"
          label2="Footwear"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/2._SY116_CB413570652_.jpg"
          label3="Watches"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/3._SY116_CB413570652_.jpg"
          label4="Bags & Luggage"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/5._SY116_CB413570652_.jpg"
        />
      </div>
    </div>
  );
}

export default Showcase;
