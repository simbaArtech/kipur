import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const CardImage = styled.img`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent),
    url(${(props) => props.imgSrc});
`;
export const CardContainer = styled.div`
  background: white;
  position: relative;
  top: -27px;
  border-radius: 20px 20px 0 0;
  padding-top: 0.7rem;
`;
// height: 100%;

export const CardTitle = styled.div`
  color: #99b882;
  width: 250px;
  text-align: right;
  direction: rtl;
  margin: auto;
  border-right: 3px solid #99b882;
  font-weight: bold;
  padding-right: 12px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

export const UselessHorizontalLine = styled.div`
  height: 4px;
  background: #e3e3e3;
  width: 50px;
  margin: auto;
`;

export const CardDetail = styled.div`
  color: darkslategray;
  text-align: center;
  padding-bottom: 1rem;
`;

export const UselessDot = styled.div`
  width: 6px;
  height: 6px;
  background: #ececec;
  border-radius: 50%;
  margin: auto;
`;

export const UselessDotsCOntainer = styled.div`
  display: flex;
  width: 50px;
  margin: auto;
  margin-bottom: 1rem;
`;
export const TextContainer = styled.div`
  width: 300px;
  margin: auto;
  direction: rtl;
  color: black;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 3rem;
`;

export const BackBtn = styled.div`
  position: absolute;
  top: 2rem;
  right: 1.5rem;
  z-index: 1;
  width: 25px;
  height: 25px;
  background: #606060;
  border-radius: 50%;
`;
export const CardHeaderLogo = styled.img`
  width: 7rem;
  position: absolute;
  top: 2rem;
  left: 1.5rem;
`;

export const PersonalCircle = styled.img`
  border-radius: 50%;
  width: 9.5rem;
  height: 9.5rem;
  border: 1px solid white;
  position: absolute;
  top: 10%;
  left: 30%;
`;
