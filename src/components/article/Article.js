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
import ArrowIcon from "@mui/icons-material/ArrowBackIos";
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
                top: "27%",
                webkitTextStroke: "1px #99b882",
                letterSpacing: "2px",
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
              <CardTitle>{article.unit}</CardTitle>
              <CardMiniTitle>{article.years}</CardMiniTitle>
            </>
          )}
          <TextContainer>{article.text}</TextContainer>
        </CardContainer>
      </Wrapper>
    </>
  );
}
