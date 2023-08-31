import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  StyledCarousel,
  ImageTitle,
  ImageDate,
  Container
} from "./TimeLineStyles";
import { data } from "./consts";

export default function TimeLine() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [style, setStyle] = useState();
  // const carouselRef = useRef();
  const imageRef = useRef(null);

  const handleChangeImage = (currentItem) => {
    setSelectedItem(currentItem.index);
    // carouselRef.current.goTo(currentItem.index);
  };

  useEffect(() => {
    if (imageRef) {
      const imageRect = imageRef.current.getBoundingClientRect();
      const top = imageRect.top + window.scrollY + imageRect.height / 2;
      const left = imageRect.left + window.scrollX + imageRect.width / 2;
      setStyle({ top: `${top}px`, left: `${left}px` });
    }
  }, [selectedItem]);

  return (
    <Container>
      <StyledCarousel
        verticalMode
        itemsToShow={3}
        // preventDefaultTouchmoveEvent
        // ref={carouselRef}
        focusOnSelect={true}
        onChange={(event) => handleChangeImage(event)}
      >
        {data.map((item, index) => (
          <>
            <Image
              src={item.pic}
              isSelected={index === selectedItem}
              ref={imageRef}
            />
            {index === selectedItem ? (
              <div>
                <ImageDate style={style}>{item.date}</ImageDate>
                <ImageTitle style={style}>{item.title}</ImageTitle>
              </div>
            ) : (
              ""
            )}
          </>
        ))}
      </StyledCarousel>
    </Container>
  );
}
