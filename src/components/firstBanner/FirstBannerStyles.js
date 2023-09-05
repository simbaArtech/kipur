import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgb(0, 0, 0, 0.6);
  padding: 10px;
  display: none;
`;

export const Banner = styled.div`
  background-color: white;
  height: 65%;
  margin-left: 0.5rem;
  padding-top: 2rem;
  width: 90%;
  margin-top: 10rem;
  box-shadow: 0px 0px 0px 3px #99b882;
  border-radius: 10px;
  direction: rtl;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-right: 1.2rem;
`;

export const SemiTitle = styled.p`
  width: 85%;
  margin-top: 2rem;
  margin-right: 1.2rem;
  line-height: 1.5;
`;

export const CloseButton = styled.div`
  width: 50px;
  height: 30px;
  background-color: white;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 3px #99b882;
  border-radius: 10px;
  color: black;
  position: relative;
`;
