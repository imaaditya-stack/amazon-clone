import React from "react";
import Showcase from "../../components/Showcase/primary";
import Header from "../../components/Header";
import TodaysDeals from "../../components/Widgets/TodaysDeals";
import SecondaryShowcase from "../../components/Showcase/secondary";
import BestSellers from "../../components/Widgets/BestSellers";
import "./style.css";

export default function Home() {
  document.body.style.backgroundColor = "#f4f4f4";

  return (
    <>
      <Header />
      <div className="main__app-wrapper">
        <Showcase />
        <TodaysDeals />
        <SecondaryShowcase />
        <BestSellers />
      </div>
    </>
  );
}
