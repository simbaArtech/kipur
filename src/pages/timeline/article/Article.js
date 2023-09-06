import {
  Wrapper,
  CardImage,
  CardContainer,
  CardHeaderLogo,
  CardTitle,
  CardMiniTitle,
  UselessHorizontalLine,
  UselessDot,
  UselessDotsCOntainer,
  TextContainer,
  BackBtn,
} from "./articleStyle";
import ArrowIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import logo from "../../../assets/pictures/logo.webp";

export default function Article({ setShowCard, article }) {
  return (
    <>
      <Wrapper>
        <BackBtn onClick={() => setShowCard(false)}>
          <ArrowIcon
            sx={{ color: "white", width: "1rem", paddingLeft: "5px" }}
          />
        </BackBtn>
        <CardHeaderLogo src={logo} />
        <div style={{ background: "gray" }}>
          <CardImage style={{ height: "17rem" }} imgSrc={article.pic} />
        </div>
        <CardContainer>
          <>
            <CardTitle>{article.date}</CardTitle>
            <CardMiniTitle>{article.title}</CardMiniTitle>
            <UselessDotsCOntainer>
              <UselessDot />
              <UselessDot />
              <UselessDot />
            </UselessDotsCOntainer>
          </>
          <TextContainer>{article.desc}</TextContainer>
        </CardContainer>
      </Wrapper>
    </>
  );
}
