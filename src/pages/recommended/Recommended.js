import React, { useState } from "react";

import articlepic from "../../assets/pictures/cardImage.jpg";
import Carousel from "../../components/carousel/Carousel";
import { AccountCircle, CalendarMonth } from "@mui/icons-material";
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

const videos = [
  {
    article: false,
    type: "7 דקות",
    title: `אמ"ן במנהרת הזמן`,
    src: "https://www.youtube.com/watch?v=65mZD9XQNOg",
  },
  {
    article: false,
    type: "6 דקות",
    title: `לקחים בעקבות מלחמת יום הכיפורים`,
    src: "https://www.youtube.com/watch?v=P-1SJt25jWs",
  },
];

export default function Recommended() {
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [articles, setArticles] = useState(
    getRandomArticles(consts.aritcles, 5)
  );

  function getRandomArticles(arr, num) {
    const shuffled = arr.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, num);
  }

  return (
    <>
      <Carousel />
      {/* <SemiTitle>סרטונים מומלצים</SemiTitle>
      {videos.map((article) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ArticleContainer >
              <div style={{width: '20px !important', height: '80px !important', marginLeft: '10px', objectFit: 'cover'}}>
              <video style={{borderRadius: '12px', width: '120px', height: "90px", verticalAlign: 'top'}} controls >
                <source src={article.pic} type="video/mp4" />
              </video>
              </div>
              <ArticleTextContainer>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDetailsContainer>
                  <ArticleDetail>
                    <img
                      src={require("../../assets/pictures/clock.svg")}
                      style={{ height: "14px", marginLeft: "5px" }}
                    />
                    {article.type}
                  </ArticleDetail>
                </ArticleDetailsContainer>
              </ArticleTextContainer>
            </ArticleContainer>
          </div>
        );
      })} */}
      <SemiTitle>סרטונים ממולצים</SemiTitle>
      {videos.map((video) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a style={{ textDecoration: "none" }} href={video.src}>
              <ArticleContainer>
                {video.pic ? (
                  <ArticlePic src={video.pic} />
                ) : (
                  <ArticlePic src={articlepic} />
                )}
                <ArticleTextContainer>
                  <ArticleTitle>{video.title}</ArticleTitle>
                  <ArticleDetailsContainer>
                    <ArticleDetail>
                      {video.type}
                      <img
                        src={require("../../assets/pictures/clock.svg")}
                        style={{ height: "14px", marginLeft: "5px" }}
                      />
                    </ArticleDetail>
                  </ArticleDetailsContainer>
                </ArticleTextContainer>
              </ArticleContainer>
            </a>
          </div>
        );
      })}
      <SemiTitle>כתבות מומלצות</SemiTitle>
      {articles.map((article) => {
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
      <Footer />
      {!showCard ? <Navbar selected="recommended" /> : null}
    </>
  );
}
