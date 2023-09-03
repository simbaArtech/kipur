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

  return (
    <Container>
      <StyledCarousel
        verticalMode
        itemsToShow={3}
        focusOnSelect={true}
        // onNextStart={(event) => console.log(event)}
        onChange={(event) => {
          handleChangeImage(event);
          setShowDesc(false);
        }}
      >
        {data.map((item, index) => (
          <div style={{ position: "relative" }}>
            {console.log(selectedItem)}
            <Image
              src={item.pic}
              isSelected={index === selectedItem}
              onClick={() => (index === selectedItem ? setShowDesc(true) : "")}
              ref={imageRef}
            />
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
            {!showDesc && index === selectedItem ? (
              <TitlesContainer>
                {/* {console.log(index)}
                {console.log(selectedItem)} */}
                <ImageDate>{item.date}</ImageDate>
                <ImageTitle>{item.title}</ImageTitle>
              </TitlesContainer>
            ) : (
              ""
            )}
            {!showDesc && index === selectedItem ? (
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
