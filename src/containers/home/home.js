import React from "react";
import MainNavbar from "../../components/navbar";
import Showcase from "../../components/showcase";
import TodaysDeals from "../../components/today's-deals";
import UptoSixtyPercentOff from "../../components/upto-60%-off";
import UptoSeventyPercentOff from "../../components/upto-60%-off/seventy-percent-off";
import HomeFurnishing from "../../components/home-furnishings";

export default function home() {
  document.body.style.backgroundColor = "#f4f4f4";
  return (
    <>
      <MainNavbar />
      <Showcase />
      <TodaysDeals />
      <UptoSixtyPercentOff />
      <HomeFurnishing />
      <UptoSeventyPercentOff />
    </>
  );
}
