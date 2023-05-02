import styled, { keyframes, css } from "styled-components"

export const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: space-between;

`
export const ImageContainer = styled.div`    
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    width: 150px;
    height: 150px;
`

export const ImageTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
`
export const ImageDescription = styled.div`

`
// Animations
const fadeIn = keyframes`
  0% {opacity: 1;},
  100% {opacity: 1;}
`;

const fadeOut = keyframes`
  0%{opacity: 1;},
  100%{opacity: 0;}
`;

export const ImageTextContainer = styled.div`
    color: white;
    height: ${(props) => (props.visible ? "100%" : "0")};
    text-align: right;
    font-size: 12px;
    background: #000000a6;
    direction: rtl;
    opacity:  ${(props) => (props.visible ? "1" : "0")};
    transition: ${(props) => (props.visible ? "width 0.2s, height 0.2s, opacity 0.3s 0.05s" : "width 0.2s 0.2s, height 0.2s 0.2s, opacity 0.2s")};
`