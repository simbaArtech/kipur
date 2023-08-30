import React, { useState } from "react";
import {
  ImageScroller,
  ImageContainer,
  Image,
  StyledCarousel,
  SelectedImage,
  ImageTitle,
} from "./TimeLineStyles";
import { data } from "./consts";
import { consts } from "react-elastic-carousel";

export default function TimeLine() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleChangeImage = (currentItem) => {
    setSelectedItem(currentItem.index);
  };

  return (
    <StyledCarousel
      verticalMode
      itemsToShow={4}
      focusOnSelect={true}
      onChange={(event) => handleChangeImage(event)}
    >
      {data.map((item, index) => (
        <Image src={item.pic} isSelected={index === selectedItem} />
      ))}
    </StyledCarousel>
  );
}
