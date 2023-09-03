import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const Container = styled.div`
  display: flex;
`;

export const StyledCarousel = styled(Carousel)`
  margin-top: 15px;
  .rec.rec-arrow {
    display: none;
  }
  .rec.rec-pagination {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: ${({ isSelected }) => (isSelected ? "275px" : "250px")};
  border: ${({ isSelected }) => (isSelected ? "2px solid white" : "")};
  margin-bottom: 1rem;
  height: 215px;
  border-radius: 10px;
  opacity: ${({ isSelected }) => (isSelected ? "0.65" : "0.5")};
  transition: opacity 0.3s ease-in-out;
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  position: absolute;
  bottom: 25%;
  left: 55%;
  opacity: 1;
  width: 150px;
`;

export const ImageTitle = styled.p`
  color: white;
  font-size: ${({ isSelected }) => (isSelected ? "13px" : "10px")};
  width: 200px;
  letter-spacing: 1px;
  padding: 0;
  -webkit-text-stroke: 2px white;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 1);
`;
export const ImageDate = styled.p`
  padding: 0;
  font-size: ${({ isSelected }) => (isSelected ? "21px" : "19px")};
  letter-spacing: 1px;
  width: 125px;
  font-family: "Almoni";
  -webkit-text-stroke: 2px #99b882;
  color: #99b882;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.76);
  text-stroke: 10px #797979;
`;

export const TextImageSelected = styled.div`
  color: white;
  position: absolute;
  top: 2px;
  border-radius: 10px;
  left: 2px;
  height: ${(props) => (props.visible ? "215px" : "0")};
  width: 275px;
  text-align: center;
  font-size: 12px;
  background: #000000a6;
  direction: rtl;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: ${(props) =>
    props.visible
      ? "width 0.2s, height 0.2s, opacity 0.3s 0.05s"
      : "width 0.2s 0.2s, height 0.2s 0.2s, opacity 0.2s"};
`;

export const ClickForMore = styled.div`
  position: absolute;
  align-items: center;
  display: flex;
  direction: rtl;
  color: white;
  bottom: 10%;
  right: 3%;
`;
