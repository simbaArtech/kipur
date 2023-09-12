import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  StyledCarousel,
  ImageTitle,
  ImageDate,
  TitlesContainer,
  Container,
  ClickForMore,
  TextImageSelected,
  DarkOnImage,
} from "./TimeLineStyles";
import consts from "../consts";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function TimeLine() {
  const navigate = useNavigate();
  const data = consts.timeLine;
  const [selectedItem, setSelectedItem] = useState(0);
  const [showDesc, setShowDesc] = useState(false);
  const imageRef = useRef(null);
  const carouselRef = useRef();

  useEffect(() => {
    if (sessionStorage.getItem("timeline")) {
      carouselRef.current.goTo(Number(sessionStorage.getItem("timeline")));
    }
  }, []);

  const handleChangeImage = (currentItem) => {
    setSelectedItem(currentItem.index);
    sessionStorage.setItem("timeline", currentItem.index);
  };
  return (
    <>
      <Container>
        <StyledCarousel
          verticalMode
          itemsToShow={3}
          focusOnSelect={true}
          ref={carouselRef}
          onChange={(event) => {
            handleChangeImage(event);
            setShowDesc(false);
          }}
        >
          {data.map((item, index) => (
            <div
              style={{ position: "relative" }}
              onClick={() => {
                if (index === selectedItem) {
                  navigate(`/article/${item.id}/timeLine`);
                }
              }}
            >
              <Image
                id={index}
                src={item.pic}
                isSelected={index === selectedItem}
                ref={imageRef}
              />
              {!item.clear ? (
                <DarkOnImage
                  src={require("../../assets/pictures/forTimeline.png")}
                  isSelected={index === selectedItem}
                />
              ) : (
                ""
              )}
              {item.date || item.title ? (
                <TitlesContainer>
                  <ImageDate isSelected={index === selectedItem}>
                    {item.date}
                  </ImageDate>
                  <ImageTitle isSelected={index === selectedItem}>
                    {item.title}
                  </ImageTitle>
                </TitlesContainer>
              ) : (
                ""
              )}
              {item.desc && !showDesc && index === selectedItem ? (
                <ClickForMore>
                  <img
                    src={require("../../assets/pictures/tap.svg")}
                    style={{ marginLeft: "4px", width: "15px", height: "15px" }}
                  ></img>
                  לחצו להרחבה
                </ClickForMore>
              ) : (
                ""
              )}
            </div>
          ))}
        </StyledCarousel>
      </Container>
      <Navbar selected="timeline" />
    </>
  );
}
