import styled from "styled-components";
import { SwiperSlide } from "swiper/react/swiper-react";

export const CardWrapper = styled.div``;
export const CardTitle = styled.div`
  color: white;
  position: relative;
  bottom: 35px;
  width: 85%;
  margin: auto;
  font-size: 1rem;
  text-align: right;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    background: none;
    opacity: 0.5;
  }
`;
