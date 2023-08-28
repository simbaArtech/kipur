import styled from "styled-components";

export const ImageScroller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 250px;
  background-color: white;
  padding: 4px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
`;
// height: 150px;
//opacity: 0.5;

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
