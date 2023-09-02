import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  StyledCarousel,
  ImageTitle,
  ImageDate,
  TitlesContainer,
  Container,
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
    // carouselRef.current.goTo(currentItem.index);
  };

  return (
    <Container>
      <StyledCarousel
        verticalMode
        itemsToShow={3}
        // preventDefaultTouchmoveEvent
        // ref={carouselRef}
        focusOnSelect={true}
        onChange={(event) => {handleChangeImage(event); setShowDesc(false);}}
      >
        {data.map((item, index) => (
          <div style={{ position: "relative" }}>
            <Image
              src={item.pic}
              isSelected={index === selectedItem}
              onClick={() => index === selectedItem ? setShowDesc(true) : ""}
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
                <ImageDate>{item.date}</ImageDate>
                <ImageTitle>{item.title}</ImageTitle>
              </TitlesContainer>
            ) : (
              ""
            )}
          </div>
        ))}
      </StyledCarousel>
    </Container>
  );
}
