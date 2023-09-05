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
import { data } from "./consts";
import Article from "../timeline/article/Article";

export default function TimeLine() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [article, setArticle] = useState();
  const [showDesc, setShowDesc] = useState(false);
  const imageRef = useRef(null);

  const handleChangeImage = (currentItem) => {
    setSelectedItem(currentItem.index);
  };
  return (
    <>
      <Container>
        <StyledCarousel
          verticalMode
          itemsToShow={3}
          focusOnSelect={true}
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
                  setShowDesc(true);
                  setArticle(item);
                }
              }}
            >
              <Image
                id={index}
                src={item.pic}
                isSelected={index === selectedItem}
                ref={imageRef}
              />
              {index !== 41 && index !== 42 ? (
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
      {showDesc && <Article setShowCard={setShowDesc} article={article} />}
    </>
  );
}
