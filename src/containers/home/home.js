import React from "react";
import Showcase from "../../components/Showcase";
import Header from "../../components/Header";
import TodaysDeals from "../../components/TodaysDeals";
import BrandContainer from "../../components/BrandContainer";
import BestSellers from "../../components/BestSellers";
export default function Home() {
  document.body.style.backgroundColor = "#f4f4f4";

  return (
    <>
      <Header />
      <Showcase />
      <TodaysDeals />
      <BrandContainer />
      <BestSellers />
    </>
  );
}
