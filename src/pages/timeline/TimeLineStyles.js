import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const StyledCarousel = styled(Carousel)`
  .rec.rec-arrow {
    display: none;
  }
  .rec.rec-pagination {
    display: none;
  }
`;

export const ImageScroller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
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
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.5")};
  transition: opacity 0.3s ease-in-out;
`;

export const SelectedImage = styled.img`
  width: 250px;
  opacity: 1;
`;

export const ImageTitle = styled.p`
  position: absolute;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

// top: 50%;
// left: 50%;
