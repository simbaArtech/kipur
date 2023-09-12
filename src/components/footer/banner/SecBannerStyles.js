import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: rgb(0, 0, 0, 0.6);
  padding: 0.625rem;
  display: none;
`;

export const Banner = styled.div`
  background-color: white;
  height: 540px;
  top: -5rem;
  left: 1.2rem;
  padding-top: 2rem;
  width: 90%;
  margin-top: 10rem;
  box-shadow: 0px 0px 0px 3px #99b882;
  border-radius: 10px;
  direction: rtl;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  margin-right: 1.2rem;
`;

export const SemiTitle = styled.p`
  width: 85%;
  height: 20rem;
  overflow: scroll;
  position: relative;
  // margin-top: 2rem;
  margin-right: 1.2rem;
  line-height: 1.5;
`;

export const CloseButton = styled.div`
  width: 50px;
  height: 30px;
  background-color: white;
  top: -1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 3px #99b882;
  border-radius: 10px;
  color: black;
  position: relative;
`;
