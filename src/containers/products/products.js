/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import "./style.css";

function Products({ history }) {
  document.body.style.backgroundColor = "#f4f4f4";
  return (
    <>
      <Header />
      <div className="products-container my-5">
        <ProductCard
          id={895142}
          name="LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)"
          image="https://m.media-amazon.com/images/I/71S9dis6PRL._AC_UY218_.jpg"
          ratings={4}
          price={34999}
          history={history}
        />
        <ProductCard
          id={127912}
          name="Fujifilm Instax Mini 9 Instant Camera (Cobalt Blue)"
          image="https://m.media-amazon.com/images/I/51IDiloiKLL._AC_UY218_.jpg"
          ratings={3}
          price={2899}
          history={history}
        />
        <ProductCard
          id={696754}
          name="HP 14 Ultra Thin & Light 14-inch Laptop (10th Gen i3-1005G1/8GB/256GB SSD/Win 10 Home/MS Office/1.47 Kg/Jet Black)"
          image="https://images-eu.ssl-images-amazon.com/images/I/41imcbOhVbL._AC_US160_FMwebp_QL70_.jpg"
          ratings={4}
          price={35990}
          history={history}
        />
        <ProductCard
          id={456729}
          name="Redmi Note 9 Pro Max (Aurora Blue, 6GB RAM, 64GB Storage)- 64MP Quad Camera & Latest 8nm Snapdragon 720G & Alexa Hands-Free | Upto 12 Months No Cost EMI"
          image="https://m.media-amazon.com/images/I/81DvimWN5xL._AC_UY218_.jpg"
          ratings={4}
          price={15998}
          history={history}
        />
        <ProductCard
          id={801147}
          name="rts USB Hub 2.0 480Mbps USB Combo Card Reader All in One Multi USB Splitter for MS, M2, SD/MMC, TF Portable for PC Laptop Smart Tv Game and ETS"
          image="https://m.media-amazon.com/images/I/61xOAZbtseL._AC_UY218_.jpg"
          ratings={4}
          price={379}
          history={history}
        />
        <ProductCard
          id={699054}
          name="Sekuai 4GB USB Audio Recorder Pendrive 4 GB Voice Recorder (0 inch Display)"
          image="https://m.media-amazon.com/images/I/51K++Sk4PyL._AC_UY218_.jpg"
          ratings={5}
          price={1043}
          history={history}
        />
      </div>
    </>
  );
}

export default Products;
