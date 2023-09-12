import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import AlmoniDemibold from "../../assets/fonts/AlmoniDemibold.ttf";

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
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.5")};
  transition: opacity 0.3s ease-in-out;
`;

export const DarkOnImage = styled.img`
  position: absolute;
  top: 1px;
  left: 1px;
  height: ${({ isSelected }) => (isSelected ? "215px" : "212px")};
  border-radius: 10px;
  width: ${({ isSelected }) => (isSelected ? "275px" : "246px")};
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
  font-weight: 600;
  font-size: 12px;
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.5")};
  width: 200px;
  margin-top: 0;
  letter-spacing: 3px;
  padding: 0;
  font-family: ${AlmoniDemibold};
  -webkit-text-stroke: 0.5px;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 1);
`;
export const ImageDate = styled.p`
  padding: 0;
  font-size: 24px;
  font-weight: 600;
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.5")};
  letter-spacing: 2px;
  font-family: ${AlmoniDemibold};
  width: 200px;
  color: #99b882;
  -webkit-text-stroke: 1.5px #99b882;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.76);
`;
// text-stroke: 10px #797979;

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
  font-size: 15px;
  color: white;
  bottom: 11%;
  right: 3%;
`;
