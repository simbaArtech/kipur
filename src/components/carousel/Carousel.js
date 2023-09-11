import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";
import "./styles.css";
import { DarkOnImage } from "../../pages/timeline/TimeLineStyles";
import { CardTitle, CardWrapper, StyledSwiperSlide } from "./styles";
import Article from "../../pages/article/Article";
import { useEffect } from "react";
import SecBanner from "../../pages/recommended/banner/SecBanner";
// import SecBanner from "./banner/SecBanner";

export default function Carousel() {
  const [showCard, setShowCard] = useState(false);
  const [articleI, setArticleI] = useState();
  const swiperRef = useRef(null);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    setWidth(getDimensions().width);
    setHeight(getDimensions().height);
  }, [window.innerWidth, window.innerHeight]);

  const getDimensions = () => {
    const width = swiperRef.current.offsetWidth;
    const height = swiperRef.current.offsetHeight;
    return { width, height };
  };

  const aritclesForCarousel = [
    {
      article: false,
      pic: require("../../assets/pictures/kelim.png"),
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
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
      >
        {aritclesForCarousel.map((item) => (
          <StyledSwiperSlide
            onClick={() => {
              setShowCard(true);
            }}
          >
            <CardWrapper>
              <div className="swiper-image" ref={swiperRef}>
                <img src={item.pic} />
              </div>
              <CardTitle>{item.name}</CardTitle>
            </CardWrapper>
          </StyledSwiperSlide>
        ))}
      </Swiper>
      {showCard && <SecBanner setShowPopUp={setShowCard} />}
      {/* {showCard && <Article setShowCard={setShowCard} article={articleI} />} */}
    </>
  );
}
