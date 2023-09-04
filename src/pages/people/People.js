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
import Article from "../../components/article/Article";
import { warPrisoners, slainPeople } from "../people/consts";

export default function People() {
  const [personI, setPersonI] = useState();
  const [showCardO, setShowCardO] = useState(false);
  const [showCardT, setShowCardT] = useState(false);
  const [showWar, setShowWar] = useState(true);

  return (
    <>
      <TitleLabel>
        <SemiTitle
          onClick={() => {
            setShowWar((prevState) => !prevState);
          }}
          style={{
            borderBottom: showWar ? "6px solid #657c54" : "",
            color: showWar ? "#657c54" : "white",
          }}
        >
          שבויי מלחמה
        </SemiTitle>
        <SemiTitle
          style={{
            borderBottom: !showWar ? "6px solid #657c54" : "",
            color: !showWar ? "#657c54" : "white",
          }}
          onClick={() => setShowWar((prevState) => !prevState)}
        >
          חללים
        </SemiTitle>
      </TitleLabel>
      {showWar &&
        warPrisoners.map((prisoner) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ArticleContainer
              onClick={() => {
                setShowCardO(true);
                setPersonI(prisoner);
              }}
            >
              <ArticlePic src={prisoner.pic} />
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
      {showCardO && <Article setShowCard={setShowCardO} article={personI} />}
      {!showWar &&
        slainPeople.map((person) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ArticleContainer
              onClick={() => {
                setShowCardT(true);
                setPersonI(person);
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
      {showCardT && <Article setShowCard={setShowCardT} article={personI} />}
    </>
  );
}
