import React, { useEffect, useState } from "react";
import SortButtons from "../../components/SortButtons";
import articlepic from "../../assets/pictures/cardImage.jpg";
import {
  SemiTitle,
  ArticleDetailsContainer,
  ArticleTextContainer,
  ArticleContainer,
  ArticlePic,
  ArticleTitle,
  ArticleDetail,
} from "../../components/general";
import {
  TitleLabel,
  PersonalContainer,
  PersonalCircle,
  PersonalName,
  PersonalitiesContainer,
} from "../people/peopleStyle";

import Article from "../../components/article/Article";
import { aritcles } from "../../components/article/consts";
import { personalities } from "../people/consts";

export default function ImagesAndEvents() {
  const [showCardO, setShowCardO] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [articleI, setArticleI] = useState();
  const [selectedLabel, setSelectedLabel] = useState("לפני המלחמה");
  const labels = ["לפני המלחמה", "ערב המלחמה", "מהלך המלחמה", "בעקבות המלחמה"];

  const [filteredArticles, setFilteredArticles] = useState(aritcles);
  const [filteredItems, setFilteredItems] = useState(personalities);

  useEffect(() => {
    const filtered = aritcles.filter((item) => item.type === selectedLabel);
    setFilteredArticles(filtered);
    const filteredPerson = personalities.filter(
      (item) => item.type === selectedLabel
    );
    setFilteredItems(filteredPerson);
  }, [selectedLabel]);

  return (
    <>
      <SortButtons labels={labels} setSelectedLabel={setSelectedLabel} />
      <>
        <TitleLabel>
          <SemiTitle>אישים</SemiTitle>
        </TitleLabel>
        <PersonalitiesContainer style={{ marginBottom: "10px" }}>
          {filteredItems.map((person, index) => {
            return (
              <PersonalContainer>
                <PersonalCircle
                  src={person.pic}
                  onClick={() => {
                    setShowCardO(true);
                    setArticleI(person);
                  }}
                />
                <PersonalName>{person.name}</PersonalName>
              </PersonalContainer>
            );
          })}
          {showCardO && (
            <Article setShowCard={setShowCardO} article={articleI} />
          )}
        </PersonalitiesContainer>
        <TitleLabel>
          <SemiTitle>אירועים</SemiTitle>
        </TitleLabel>
        {filteredArticles.map((article) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ArticleContainer
                style={{ alignItems: "center" }}
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
                  {/* <ArticleDetailsContainer>
                    <ArticleDetail>
                      {article.type}
                      <img
                        src={require("../../assets/pictures/clock.svg")}
                        style={{ height: "14px", marginLeft: "5px" }}
                      />
                    </ArticleDetail>
                  </ArticleDetailsContainer> */}
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
