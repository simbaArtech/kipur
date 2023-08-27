import React, { useEffect, useState } from "react";
import SortButtons from "../../components/SortButtons";
import articlepic from "../../assets/pictures/cardImage.jpg";
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
import Carousel from "../../components/carousel/Carousel";

import Article from "../../components/article/Article";
import { aritcles } from "../../components/article/consts";

export default function ImagesAndEvents() {
  const [showCard, setShowCard] = useState(false);
  const [articleI, setArticleI] = useState();
  const [selectedLabel, setSelectedLabel] = useState("לפני המלחמה");
  const labels = ["לפני המלחמה", "ערב המלחמה", "מהלך המלחמה", "בעקבות המלחמה"];

  return (
    <>
      <SortButtons labels={labels} />
      <>
        {aritcles.map((article) => {
          return (
            <div>
              <ArticleContainer
                onClick={() => {
                  setShowCard(true);
                  setArticleI(article);
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
                      <AccountCircle
                        sx={{
                          height: "14px",
                        }}
                      />
                    </ArticleDetail>
                  </ArticleDetailsContainer>
                </ArticleTextContainer>
              </ArticleContainer>
              {showCard && (
                <Article setShowCard={setShowCard} article={articleI} />
              )}
            </div>
          );
        })}
      </>
    </>
  );
}
