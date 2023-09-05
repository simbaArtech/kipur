import styled from "styled-components";
import { SwiperSlide } from "swiper/react/swiper-react";

export const CardWrapper = styled.div`
  margin-bottom: 12px;
`;
export const CardTitle = styled.div`
  color: white;
  position: relative;
  -webkit-text-stroke: 1.5px white;
  letter-spacing: 2px;
  bottom: 35px;
  width: 85%;
  margin: auto;
  font-size: 1rem;
  text-align: right;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    opacity: 0.5;
    background: none;
  }
`;
