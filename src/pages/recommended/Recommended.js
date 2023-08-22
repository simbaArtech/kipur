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
import Article from "../../components/article/Article";

export default function Recommended() {
  const [showCard, setShowCard] = useState(false);
  return (
    <>
      <Carousel />
      <SemiTitle>כותרת</SemiTitle>
      <ArticleContainer onClick={() => setShowCard(true)}>
        <ArticlePic src={articlepic} />
        <ArticleTextContainer>
          <ArticleTitle>
            כותרת ארוכה מאוד אבל מאוד ארוכה ממש שצריך לרדת שורה
          </ArticleTitle>
          <ArticleDetailsContainer>
            <ArticleDetail>
              שם כותב המאמר
              <AccountCircle sx={{ height: "14px" }} />
            </ArticleDetail>
            <ArticleDetail>
              תאריך כתיבה
              <CalendarMonth sx={{ height: "14px" }} />
            </ArticleDetail>
          </ArticleDetailsContainer>
        </ArticleTextContainer>
      </ArticleContainer>
      <ArticleContainer>
        <ArticlePic src={articlepic} />
        <ArticleTextContainer>
          <ArticleTitle>כותרת יחסית קצרה</ArticleTitle>
          <ArticleDetailsContainer>
            <ArticleDetail>
              שם כותב המאמר
              <AccountCircle sx={{ height: "14px" }} />
            </ArticleDetail>
            <ArticleDetail>
              תאריך כתיבה
              <CalendarMonth sx={{ height: "14px" }} />
            </ArticleDetail>
          </ArticleDetailsContainer>
        </ArticleTextContainer>
      </ArticleContainer>
      <ArticleContainer>
        <ArticlePic src={articlepic} />
        <ArticleTextContainer>
          <ArticleTitle>כותרת יחסית יחסית קצרה</ArticleTitle>
          <ArticleDetailsContainer>
            <ArticleDetail>כאן יהיה טקסט</ArticleDetail>
          </ArticleDetailsContainer>
        </ArticleTextContainer>
      </ArticleContainer>
      {showCard && <Article setShowCard={setShowCard} />}
    </>
  );
}
