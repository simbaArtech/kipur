import React, { useState } from "react";
import {
  ArticleDetailsContainer,
  ArticleTextContainer,
  ArticleContainer,
  ArticlePic,
  ArticleTitle,
  ArticleDetail,
} from "../../components/general";
import {
  SemiTitle,
  TitleLabel,
  PersonalContainer,
  PersonalCircle,
  PersonalName,
  PersonalitiesContainer,
  SeeAll,
} from "./peopleStyle";
import Article from "../article/Article";
import consts from "../consts";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function People() {
  const navigate = useNavigate();
  const warPrisoners = consts.warPrisoners;
  const slainPeople = consts.slainPeople;
  const [personI, setPersonI] = useState();
  const [showCardO, setShowCardO] = useState(false);
  const [showCardT, setShowCardT] = useState(false);
  const [showWar, setShowWar] = useState(true);

  const containerStyle = {
    display: "flex",
    flexDirection: "row-reverse",
    textAlign: "center",
    color: "white",
    marginBottom: "0.25rem",
    fontWeight: "bold",
    justifyContent: "flex-start",
    fontSize: "1rem",
    padding: "0.5rem",
    paddingTop: "1rem",
  };
  const selectedStyle = {
    // margin: "auto",
    marginRight: "0.25rem",
    color: "white",
    width: "fit-content",
    padding: "2px 12px",
    background: "white",
    color: "black",
    borderRadius: "20vw",
    fontSize: "15px",
    lineHeight: "1.6",
  };
  const unselectedStyle = {
    // margin: "auto",
    marginRight: "0.25rem",
    width: "4.5rem",
    fontSize: "15px",
    textAlign: "center",
    padding: "2px 0px",
    background: "#657c54",
    color: "black",
    borderRadius: "20vw",
    border: "2px solid #657c54",
  };

  return (
    <>
      <div style={containerStyle}>
        <SemiTitle
          onClick={() => {
            setShowWar((prevState) => !prevState);
          }}
          style={showWar ? selectedStyle : unselectedStyle}
        >
          {showWar ? "שבויי מלחמה" : "שבויים"}
        </SemiTitle>
        <SemiTitle
          style={!showWar ? selectedStyle : unselectedStyle}
          onClick={() => setShowWar((prevState) => !prevState)}
        >
          {!showWar ? "חללי מלחמה" : "חללים"}
        </SemiTitle>
      </div>
      {showWar &&
        warPrisoners.map((prisoner) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ArticleContainer
              onClick={() => {
                navigate(`/article/${prisoner.id}/warPrisoners`);
              }}
            >
              <ArticlePic
                src={prisoner.pic}
                style={{ width: "4.5rem", height: "4.5rem" }}
              />
              <ArticleTextContainer>
                <ArticleTitle>{prisoner.name}</ArticleTitle>
                <ArticleTitle>{prisoner.years}</ArticleTitle>
                <ArticleDetailsContainer>
                  <ArticleDetail>{prisoner.unit}</ArticleDetail>
                </ArticleDetailsContainer>
              </ArticleTextContainer>
            </ArticleContainer>
          </div>
        ))}
      {!showWar &&
        slainPeople.map((person) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ArticleContainer
              onClick={() => {
                navigate(`/article/${person.id}/slainPeople`);
              }}
            >
              <ArticlePic src={person.pic} />
              <ArticleTextContainer>
                <ArticleTitle>{person.name}</ArticleTitle>
                <ArticleTitle>{person.years}</ArticleTitle>
                <ArticleDetailsContainer>
                  <ArticleDetail>{person.unit}</ArticleDetail>
                </ArticleDetailsContainer>
              </ArticleTextContainer>
            </ArticleContainer>
          </div>
        ))}
      {!showCardT && !showCardO ? <Navbar selected="people" /> : null}
      <Footer />
    </>
  );
}
