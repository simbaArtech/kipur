import React from "react";
import {
  ArticleDetailsContainer,
  ArticleTextContainer,
  ArticleContainer,
  ArticlePic,
  ArticleTitle,
  ArticleDetail,
} from "../../components/general";
import { SemiTitle, TitleLabel } from "./peopleStyle";
import { slainPeople } from "../people/consts";

export default function SlainPerson() {
  return (
    <>
      <TitleLabel>
        <SemiTitle>חללים</SemiTitle>
      </TitleLabel>
      {slainPeople.map((person) => (
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
