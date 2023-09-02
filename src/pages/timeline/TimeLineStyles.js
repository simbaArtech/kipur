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
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.5")};
  transition: opacity 0.3s ease-in-out;
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  position: absolute;
  bottom: 15%;
  left: 65%;
  opacity: 1;
  width: 150px;
`;

export const ImageTitle = styled.p`
  color: white;
  font-size: 17px;
  padding: 0;
`;
export const ImageDate = styled.p`
  padding: 0;
  font-size: 22px;
  font-family: "Almoni";
  color: #797979;
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
