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

import Article from "../article/Article";
import consts from "../consts";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

export default function ImagesAndEvents() {
  const aritcles = consts.aritcles;
  const personalities = consts.personalities;
  const navigate = useNavigate();
  const [showCardO, setShowCardO] = useState(false);
  const [showCard, setShowCard] = useState(false);
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
                    navigate(`/article/${person.id}/personalities`);
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
                </ArticleTextContainer>
              </ArticleContainer>
            </div>
          );
        })}
        {!showCardO && !showCard ? <Navbar selected="images" /> : null}
      </>
      <Footer />
    </>
  );
}
