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
} from "./TimeLineStyles";
import { data } from "./consts";

export default function TimeLine() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [showDesc, setShowDesc] = useState(false);
  // const carouselRef = useRef();
  const imageRef = useRef(null);

  const handleChangeImage = (currentItem) => {
    setSelectedItem(currentItem.index);
  };

  // const goTo = (event) => {
  //   const index = Number(event.target.id);
  //   if (index === 39 || index === 40) {
  //     carouselRef.current.goTo(index);
  //   }
  // };

  return (
    <Container>
      <StyledCarousel
        verticalMode
        itemsToShow={3}
        focusOnSelect={true}
        // ref={carouselRef}
        onChange={(event) => {
          handleChangeImage(event);
          setShowDesc(false);
        }}
      >
        {data.map((item, index) => (
          <div style={{ position: "relative" }}>
            <Image
              id={index}
              src={item.pic}
              isSelected={index === selectedItem}
              onClick={() => (index === selectedItem ? setShowDesc(true) : "")} //goTo(event)
              ref={imageRef}
            />
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
            {showDesc && index === selectedItem ? (
              <TextImageSelected
                visible={showDesc && index === selectedItem}
                onClick={() => setShowDesc(false)}
              >
                {item.desc}
              </TextImageSelected>
            ) : (
              ""
            )}
            {item.desc && !showDesc && index === selectedItem ? (
              <ClickForMore>
                <img
                  src={require("../../assets/pictures/tap.svg")}
                  style={{ marginLeft: "4px", width: "20px", height: "20px" }}
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
  );
}
