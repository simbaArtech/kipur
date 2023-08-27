import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { Pagination, Navigation, Autoplay } from "swiper";
import "./styles.css";
import { CardTitle, CardWrapper } from "./styles";

export default function Carousel() {
  return (
    <>
      <Swiper
        dir="rtl"
        initialSlide={1}
        slidesPerView={1.5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardWrapper>
            <div className="swiper-image"></div>
            <CardTitle>כותרת משנה כותרת משנה כותרת משנה</CardTitle>
          </CardWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <CardWrapper>
            {/* <img src={cardPic} /> */}
            <div className="swiper-image"></div>
            <CardTitle>כותרת משנה כותרת משנה</CardTitle>
          </CardWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <CardWrapper>
            {/* <img src={cardPic} /> */}
            <div className="swiper-image"></div>
            <CardTitle>זוהי כותרת ממש ארוכה שיואו כמה ארוכה</CardTitle>
          </CardWrapper>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
