import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components//footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import BadResolution from "../../components/badResolution/BadResolution";
import FirstTimeBanner from "../../components/firstBanner/FirstBanner";
import { useNavigate } from "react-router";
import items from "../../consts/const";
import { usePage } from "../../context/PageContext";
export default function Home() {
  const [page, setPage] = usePage();
  const navigate = useNavigate();

  return (
    <>
      <FirstTimeBanner />
      {window.innerWidth > 500 && <BadResolution />}
      <Header />
      <div style={{ background: "#32332F" }}>
        {page ? (
          <>
            {navigate(`/${page}`)}
            <Footer />
          </>
        ) : null}
        {/* {page == "recommended" ? (
          <>
            <Recommended />
            <Footer />
          </>
        ) : page == "people" ? (
          <>
            <People />
            <Footer />
          </>
        ) : page == "images" ? (
          <>
            <ImagesAndEvents />
            <Footer />
          </>
        ) : page == "timeline" ? (
          <TimeLine />
        ) : (
          page == "game" && (
            <>
              <Crossword />
              <Footer />
            </>
          ) */}
        {/* )} */}
      </div>
      <Navbar items={items} page={page} setPage={setPage} />
    </>
  );
}
