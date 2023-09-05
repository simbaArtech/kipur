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
  PersonalCircle,
  UnderPic,
} from "./articleStyle";
import { ArrowForwardIos as ArrowIcon } from "@mui/icons-material";
import React from "react";
import logo from "../../assets/pictures/logo.webp";

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
          <CardImage
            style={{ height: article.article ? "25rem" : "17rem" }}
            imgSrc={
              article.article
                ? article.pic
                : require("../../assets/pictures/back.png")
            }
          />
          {article.article ? "" : <PersonalCircle src={article.pic} />}
          {article.article ? (
            ""
          ) : (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "33%",
                display: "flex",
                justifyContent: "space-around",
                color: "#99b882",
              }}
            >
              {article.name}
            </div>
          )}
          {article.underPic ? <UnderPic>{article.underPic}</UnderPic> : ""}
        </div>
        <CardContainer>
          {article.article ? (
            <>
              <CardTitle>{article.title}</CardTitle>
              {article.miniTitle ? (
                <CardMiniTitle>{article.miniTitle}</CardMiniTitle>
              ) : (
                ""
              )}
              <UselessDotsCOntainer>
                <UselessDot />
                <UselessDot />
                <UselessDot />
              </UselessDotsCOntainer>
            </>
          ) : (
            <>
              <CardTitle>{article.years}</CardTitle>
              <CardTitle>{article.unit}</CardTitle>
            </>
          )}
          <TextContainer>{article.text}</TextContainer>
        </CardContainer>
      </Wrapper>
    </>
  );
}
