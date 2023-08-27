import {
  Wrapper,
  CardImage,
  CardContainer,
  CardHeaderLogo,
  CardTitle,
  UselessHorizontalLine,
  CardDetail,
  UselessDot,
  UselessDotsCOntainer,
  TextContainer,
  BackBtn,
} from "./articleStyle";
import { ArrowForwardIos as ArrowIcon } from "@mui/icons-material";
import React from "react";
import Footer from "../footer/Footer";
import logo from "../../assets/pictures/logo.webp";

export default function Article({ setShowCard, article }) {
  console.log(article);
  return (
    <>
      <Wrapper>
        <CardHeaderLogo src={logo} />
        <BackBtn onClick={() => setShowCard(false)}>
          <ArrowIcon
            sx={{ color: "white", width: "1rem", paddingLeft: "5px" }}
          />
        </BackBtn>
        <CardImage
          imgSrc={
            article.pic
              ? article.pic
              : require("../../assets/pictures/kipur.jpg")
          }
        />
        <CardContainer>
          <UselessHorizontalLine />
          <CardTitle>{article.title}</CardTitle>
          <UselessDotsCOntainer>
            <UselessDot />
            <UselessDot />
            <UselessDot />
          </UselessDotsCOntainer>
          <TextContainer>{article.text}</TextContainer>
        </CardContainer>
        {/* <Footer card={true} /> */}
      </Wrapper>
    </>
  );
}
