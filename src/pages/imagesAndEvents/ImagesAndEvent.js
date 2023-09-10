import React, { useEffect, useState } from "react";
import SortButtons from "../../components/SortButtons";
import articlepic from "../../assets/pictures/cardImage.jpg";
import Navbar from "../../components/navbar/Navbar";
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

import Article from "../article/Article";
import { aritcles } from "../article/consts";
import { personalities } from "../people/consts";
import items from "../../consts/const";
import { usePage } from "../../context/PageContext";
import { useArticle } from "../../context/ArticleContext";
import { useNavigate } from "react-router";

export default function ImagesAndEvents() {
  const [page, setPage] = usePage();
  const [showCardO, setShowCardO] = useState(false);
  const [articleI, setArticleI] = useState();
  const [pageLabel, setPageLabel] = useState("לפני המלחמה");
  const labels = ["לפני המלחמה", "ערב המלחמה", "מהלך המלחמה", "בעקבות המלחמה"];
  const [article, setArticle] = useArticle();
  const navigate = useNavigate();

  const [filteredArticles, setFilteredArticles] = useState(aritcles);
  const [filteredItems, setFilteredItems] = useState(personalities);
  useEffect(() => {
    const filtered = aritcles.filter((item) => item.type === pageLabel);
    setFilteredArticles(filtered);
    const filteredPerson = personalities.filter(
      (item) => item.type === pageLabel
    );
    setFilteredItems(filteredPerson);
  }, [pageLabel]);

  return (
    <>
      <SortButtons labels={labels} setPageLabel={setPageLabel} />
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
                    setArticle(person);
                  navigate('/article');
                  }}
                />
                <PersonalName>{person.name}</PersonalName>
              </PersonalContainer>
            );
          })}
        </PersonalitiesContainer>
        <TitleLabel>
          <SemiTitle>אירועים</SemiTitle>
        </TitleLabel>
        {filteredArticles.map((article) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ArticleContainer
                onClick={() => {
                  setArticle(article);
                  navigate('/article');
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
            </div>
          );
        })}
      </>
      <Navbar items={items} page={page} setPage={setPage} />
    </>
  );
}
