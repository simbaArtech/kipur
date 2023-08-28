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
import { personalities, warPrisoners, slainPeople } from "../people/consts";

export default function People() {
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
                onClick={() => handleClickOnPersonality(person)}
              />
              <PersonalName>{person.name}</PersonalName>
            </PersonalContainer>
          );
        })}
      </PersonalitiesContainer>
      <TitleLabel>
        <SemiTitle
          onClick={() => setShowWar((prevState) => !prevState)}
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
          <ArticleContainer>
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
      {!showWar &&
        slainPeople.map((person) => (
          <ArticleContainer>
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
    </>
  );
}
