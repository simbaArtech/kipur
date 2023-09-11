import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import BadResolution from "../../components/badResolution/BadResolution";
import FirstTimeBanner from "../../components/firstBanner/FirstBanner";
import Recommended from "../recommended/Recommended";

export default function Home() {
  return (
    <>
      <FirstTimeBanner />
      {window.innerWidth > 500 && <BadResolution />}
      <Recommended />
      <Navbar selected="recommended" />
      <Footer/>
    </>
  );
}
