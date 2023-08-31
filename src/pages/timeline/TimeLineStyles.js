import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const Container = styled.div`
  display: flex;
`;

export const StyledCarousel = styled(Carousel)`
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
  width: ${({ isSelected }) => (isSelected ? "250px" : "235px")};
  border: ${({ isSelected }) => (isSelected ? "2px solid white" : "")};
  margin-bottom: 1rem;
  border-radius: 10px;
  height: 200px;
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.5")};
  transition: opacity 0.3s ease-in-out;
`;

export const ImageTitle = styled.p`
  position: absolute;
  color: white;
`;
export const ImageDate = styled.p`
  position: absolute;
  font-family: "Almoni";
  color: #797979;
`;
