import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";
import "./styles.css";
import { CardTitle, CardWrapper, StyledSwiperSlide } from "./styles";

export default function Carousel() {
  const data = [
    {
      text: "כותרת משנה כותרת משנה כותרת משנה",
    },
    {
      text: "כותרת משנה כותרת משנה כותרת משנה",
    },
    {
      text: "כותרת משנה כותרת משנה כותרת משנה",
    },
  ];

  return (
    <>
      <Swiper
        dir="rtl"
        initialSlide={1}
        slidesPerView={1.5}
        effect={"coverflow"}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
      >
        {data.map((item) => (
          <StyledSwiperSlide>
            <CardWrapper>
              <div className="swiper-image"></div>
              <CardTitle>{item.text}</CardTitle>
            </CardWrapper>
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
