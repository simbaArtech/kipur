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

// { setShowCard, article }}

export default function Article() {

  return (
    <>
      <Wrapper>
        {/* onClick={() => setShowCard(false)} */}
        <BackBtn>
          <ArrowIcon
            sx={{ color: "white", width: "1.5rem", paddingLeft: "5px" }}
          />
        </BackBtn>
        <CardHeaderLogo src={logo} />
        <div style={{ background: "gray" }}>
          <CardImage
            style={{
              height: article.article ? "25rem" : "17rem",
              marginTop: "-3rem",
            }}
            imgSrc={
              article.article
                ? article.pic
                : require("../../assets/pictures/back.png")
            }
          />
          {article.article ? "" : <PersonalCircle src={article.pic} />}
        </div>
        <CardContainer>
          {article.underPic ? <UnderPic>{article.underPic}</UnderPic> : ""}
          {article.article ? (
            <>
              <CardTitle
                style={{
                  webkitTextStroke: "1px #99b882",
                  webkitLetterSpacing: "2px",
                }}
              >
                {article.title}
              </CardTitle>
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
              <CardTitle
                style={{
                  webkitTextStroke: "1px #99b882",
                  webkitLetterSpacing: "2px",
                }}
              >
                {article.name}
              </CardTitle>
              <CardTitle style={{ marginTop: 0 }}>{article.unit}</CardTitle>
              <CardMiniTitle>{article.years}</CardMiniTitle>
              <UselessDotsCOntainer>
                <UselessDot />
                <UselessDot />
                <UselessDot />
              </UselessDotsCOntainer>
            </>
          )}
          <TextContainer>{article.text}</TextContainer>
        </CardContainer>
      </Wrapper>
    </>
  );
}
