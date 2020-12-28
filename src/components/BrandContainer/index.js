import React from "react";
import SingleImageCard from "../SingleImageCard";
import FourImageCard from "../FourImageCard";
import "./style.css";

function BrandContainer() {
  return (
    <>
      <div className="brands-main-div">
        <div className="showcase__brandsContainer">
          <SingleImageCard
            title="Fire TV Stick Lite"
            imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroNov/MSO_Nov/Sheldon1X2._SY304_CB416935227_.jpg"
          />
          <FourImageCard
            title="kitchen & Home Appliances"
            label1="Geysers"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198911XCM_Manual_1198911_991932_IN_Kitchen_PC_Dashboard_cards__2_1573726444_jpg_LOWER_QL85_._SY116_CB446704968_.jpg"
            label2="Water purifiers"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198911XCM_Manual_1198911_991932_IN_Kitchen_PC_Dashboard_cards__1573726444_jpg_LOWER_QL85_._SY116_CB446704971_.jpg"
            label3="Mixer grinders"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198911XCM_Manual_1198911_991932_IN_Kitchen_PC_Dashboard_cards__3_1573726444_jpg_LOWER_QL85_._SY116_CB446704968_.jpg"
            label4="Air purifiers"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198911XCM_Manual_1198911_991932_IN_Kitchen_PC_Dashboard_cards_372x232_4_1573726444_jpg_LOWER_QL85_._SY116_CB446704960_.jpg"
          />
          <FourImageCard
            title="Escape reality | Play videogames"
            label1="Consoles"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/vgsw2020/DesktopGateway_QuadCard_186X116_1_VG._SY116_CB415091221_.jpg"
            label2="Top games"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/vgsw2020/DesktopGateway_QuadCard_186X116_3VG._SY116_CB415091221_.jpg"
            label3="Save more with combos"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/vgsw2020/DesktopGateway_QuadCard_186X116_4VG._SY116_CB415091221_.jpg"
            label4="Accessories"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/vgsw2020/DesktopGateway_QuadCard_186X116_2_VG._SY116_CB415091221_.jpg"
          />
          <SingleImageCard
            title="For efficient home working"
            imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default BrandContainer;
