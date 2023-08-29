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
  PersonalContainer,
  TitleLabel,
  PersonalCircle,
  PersonalName,
  PersonalitiesContainer,
  SeeAll,
} from "./peopleStyle";
import Article from "../../components/article/Article";
import { personalities, warPrisoners, slainPeople } from "../people/consts";

export default function People() {
  const [personI, setPersonI] = useState();
  const [showCard, setShowCard] = useState(false);
  const [showCardO, setShowCardO] = useState(false);
  const [showCardT, setShowCardT] = useState(false);
  const [showWar, setShowWar] = useState(true);

  const handleClickOnPersonality = () => {};
  return (
    <>
      <TitleLabel>
        <SemiTitle>אישים</SemiTitle>
        <SeeAll>ראה הכל</SeeAll>
      </TitleLabel>
      <PersonalitiesContainer>
        {personalities.map((person, index) => {
          return (
            <PersonalContainer>
              <PersonalCircle
                src={person.pic}
                onClick={() => {
                  handleClickOnPersonality(person);
                  setShowCard(true);
                  setPersonI(person);
                }}
              />
              <PersonalName>{person.name}</PersonalName>
            </PersonalContainer>
          );
        })}
        {showCard && <Article setShowCard={setShowCard} article={personI} />}
      </PersonalitiesContainer>
      <TitleLabel>
        <SemiTitle
          onClick={() => {
            setShowWar((prevState) => !prevState);
          }}
          style={{ borderBottom: showWar ? "3px solid #657c54" : "" }}
        >
          שבויי מלחמה
        </SemiTitle>
        <SemiTitle
          style={{ borderBottom: !showWar ? "3px solid #657c54" : "" }}
          onClick={() => setShowWar((prevState) => !prevState)}
        >
          חללים
        </SemiTitle>
      </TitleLabel>
      {showWar &&
        warPrisoners.map((prisoner) => (
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
        ))}
      {showCardO && <Article setShowCard={setShowCardO} article={personI} />}
      {!showWar &&
        slainPeople.map((person) => (
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
        ))}
      {showCardT && <Article setShowCard={setShowCardT} article={personI} />}
    </>
  );
}
