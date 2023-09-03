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
      <SemiTitle>כתבות מומלצות</SemiTitle>
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
      {showCard && <Article setShowCard={setShowCard} />}
      <ArticleContainer
        onClick={() =>
          console.log("https://yomkipurwar.mod.gov.il/Pages/default.aspx")
        }
      >
        <ArticlePic src={articlepic} />
        <ArticleTextContainer>
          <ArticleTitle>אתר כלים חינוכיים של אמ"ן</ArticleTitle>
        </ArticleTextContainer>
      </ArticleContainer>
    </>
  );
}
