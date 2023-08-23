import React from "react";
import articlepic from "../assets/pictures/cardImage.jpg";
import SortButtons from "../components/SortButtons";
import { AccountCircle, CalendarMonth } from "@mui/icons-material";
import {
  ArticleDetailsContainer,
  ArticleTextContainer,
  ArticleContainer,
  ArticlePic,
  ArticleTitle,
  ArticleDetail,
} from "../components/general";

export default function AmanUnits() {
  const labels = ["8200", "504", "7656"];

  return (
    <>
      <SortButtons labels={labels} />
      <ArticleContainer>
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
          <ArticleTitle>כותרת יחסית קצרה</ArticleTitle>
          <ArticleDetailsContainer>
            <ArticleDetail>כאן יהיה טקסט</ArticleDetail>
          </ArticleDetailsContainer>
        </ArticleTextContainer>
      </ArticleContainer>
    </>
  );
}
