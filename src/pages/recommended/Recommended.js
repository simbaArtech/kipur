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
  VideoContaiber,
} from "../../components/general";
import Article from "../article/Article";
import SecBanner from "./banner/SecBanner";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import consts from "../../pages/consts";
import Footer from "../../components/footer/Footer";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

const videos = [
  {
    article: false,
    type: "7 דקות",
    title: `אמ"ן במנהרת הזמן`,
    src: "https://www.youtube.com/watch?v=65mZD9XQNOg",
    pic: require("../../assets/pictures/סרטון 2.jpeg"),
  },
  {
    article: false,
    type: "6 דקות",
    title: `לקחים בעקבות מלחמת יום הכיפורים`,
    src: "https://www.youtube.com/watch?v=P-1SJt25jWs",
    pic: require("../../assets/pictures/סרטון 1.jpeg"),
  },
];

export default function Recommended() {
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [articles, setArticles] = useState(
    getRandomArticles(consts.aritcles, 5)
  );

  function getRandomArticles(arr, num) {
    const shuffled = arr.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, num);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          paddingTop: "1rem",
        }}
      >
        <img
          onClick={() => setShowBanner(true)}
          src={require("../../assets/pictures/kelim.png")}
          style={{ borderRadius: "1rem", width: "340px", height: "auto" }}
        />
      </div>
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
      <SemiTitle>סרטונים מומלצים</SemiTitle>
      {videos.map((video) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a style={{ textDecoration: "none" }} href={video.src}>
              <ArticleContainer>
                {video.pic ? (
                  <VideoContaiber>
                    <VideoLibraryIcon
                      style={{
                        position: "absolute",
                        color: "white",
                        opacity: ".7",
                      }}
                    />
                    <ArticlePic src={video.pic} />
                  </VideoContaiber>
                ) : (
                  <ArticlePic src={articlepic} />
                )}
                <ArticleTextContainer>
                  <ArticleTitle>{video.title}</ArticleTitle>
                  <ArticleDetailsContainer>
                    <ArticleDetail>
                      <img
                        src={require("../../assets/pictures/clock.svg")}
                        style={{ height: "14px", marginLeft: "5px" }}
                        />
                        {video.type}
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
      })}
      <Footer />
      {showBanner && <SecBanner setShowPopUp={setShowCard} />}
      {!showCard ? <Navbar selected="recommended" /> : null}
    </>
  );
}
