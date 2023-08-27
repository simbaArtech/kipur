import React, { useState } from "react";
import {
  ImageScroller,
  ImageContainer,
  Image,
  SelectedImage,
  ImageTitle,
} from "./TimeLineStyles";
import { data } from "./consts";

export default function TimeLine() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <ImageScroller>
      {data.map((image, index) => (
        <ImageContainer key={index}>
          <Image
            src={image.pic}
            alt={`Image ${index}`}
            // className={`${styles.image} ${
            //   selectedImage === image ? styles["selected-image"] : ""
            // }`}
            onClick={() => handleImageClick(image)}
          />
          <div>
            <ImageTitle>{image.title}</ImageTitle>
          </div>
          <div>
            <ImageTitle>{image.date}</ImageTitle>
          </div>
        </ImageContainer>
      ))}
    </ImageScroller>
  );
}
