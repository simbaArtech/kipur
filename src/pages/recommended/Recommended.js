import React, { useState } from "react";

import articlepic from "../../assets/pictures/cardImage.jpg";
import Carousel from "../../components/carousel/Carousel";
import {
  SemiTitle,
  ArticleDetailsContainer,
  ArticleTextContainer,
  ArticleContainer,
  ArticlePic,
  ArticleTitle,
  ArticleDetail,
} from "../../components/general";
import Article from "../article/Article";
import SecBanner from "./banner/SecBanner";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import consts from "../../pages/consts";
import Footer from "../../components/footer/Footer";

export default function Recommended() {
  const aritcles = consts.aritcles;
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const aritcle = [aritcles[1], aritcles[5], aritcles[7]];

  return (
    <>
      <Carousel />
      <SemiTitle>כתבות מומלצות</SemiTitle>
      {aritcle.map((article) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ArticleContainer
              onClick={() => {
                navigate(`/article/${article.id}/aritcles`);
              }}
            >
              {article.pic ? (
                <ArticlePic src={article.pic} />
              ) : (
                <ArticlePic src={articlepic} />
              )}
              <ArticleTextContainer>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDetailsContainer>
                  <ArticleDetail>
                    {article.type}
                    <img
                      src={require("../../assets/pictures/clock.svg")}
                      style={{ height: "14px", marginLeft: "5px" }}
                    />
                  </ArticleDetail>
                </ArticleDetailsContainer>
              </ArticleTextContainer>
            </ArticleContainer>
          </div>
        );
      })}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ArticleContainer
          style={{ alignItems: "center" }}
          onClick={() => setShowPopUp(true)}
        >
          <ArticlePic src={require("../../assets/pictures/kelim.png")} />
          <ArticleTextContainer>
            <ArticleTitle>כלים חינוכיים של אמ"ן</ArticleTitle>
          </ArticleTextContainer>
        </ArticleContainer>
      </div>
      {!showCard ? <Navbar selected="recommended" /> : null}
      {showPopUp && <SecBanner setShowPopUp={setShowPopUp} />}
      <Footer />
    </>
  );
}
