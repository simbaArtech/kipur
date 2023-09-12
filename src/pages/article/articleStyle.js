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
  min-height: 100%;
  padding-bottom: 10rem;
  overflow-y: auto;
`;

export const CardTitle = styled.div`
  color: #99b882;
  width: 300px;
  text-align: right;
  direction: rtl;
  margin: auto;
  border-right: 3px solid #99b882;
  font-weight: bold;
  padding-right: 12px;
  margin-top: 2rem;
  font-size: 1.2rem;
`;
export const CardMiniTitle = styled.div`
  color: #99b882;
  width: 300px;
  text-align: right;
  direction: rtl;
  margin: auto;
  margin-bottom: 10px;
  border-right: 3px solid #99b882;
  font-weight: bold;
  padding-right: 12px;
  font-size: 1rem;
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
  line-height: 1.5;
  direction: rtl;
  color: black;
  font-size: 1rem;
  font-family: Almoni;
  margin-bottom: 3rem;
`;

export const BackBtn = styled.div`
  position: sticky;
  top: 2rem;
  left: 1.5rem;
  z-index: 1;
  width: 2.5rem;
  height: 2.5rem;
  background: #606060;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 50%;
`;
export const CardHeaderLogo = styled.img`
  width: 7rem;
  position: absolute;
  top: 0.55rem;
  right: 0.5rem;
`;

export const PersonalCircle = styled.img`
  border-radius: 50%;
  width: 9.5rem;
  height: 9.5rem;
  border: 1px solid white;
  position: absolute;
  top: 8%;
  left: 30%;
`;

export const UnderPic = styled.div`
  color: black;
  direction: rtl;
  top: 0;
  background: none;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
