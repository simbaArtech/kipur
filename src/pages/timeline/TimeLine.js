import React, { useState } from "react";
import {
  ImageScroller,
  ImageContainer,
  Image,
  SelectedImage,
  ImageTitle,
} from "./TimeLineStyles";
import { data } from "./consts";
import Carousel from "react-elastic-carousel";

export default function TimeLine() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <Carousel verticalMode itemsToShow={3} focusOnSelect={true} style={{}}>
      {data.map((item) => (
        <Image src={item.pic} />
      ))}
    </Carousel>
  );
}
// <ImageScroller>
//   {data.map((image, index) => (
//     <ImageContainer key={index}>
//       <Image
//         src={image.pic}
//         alt={`Image ${index}`}
//         // className={`${styles.image} ${
//         //   selectedImage === image ? styles["selected-image"] : ""
//         // }`}
//         onClick={() => handleImageClick(image)}
//       />
//       <div>
//         <ImageTitle>{image.title}</ImageTitle>
//       </div>
//       <div>
//         <ImageTitle>{image.date}</ImageTitle>
//       </div>
//     </ImageContainer>
//   ))}
// </ImageScroller>
