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
  height: 300px !important;
  left: 1.2rem;
  padding-top: 1rem;
  width: 90%;
  top: 0;
  box-shadow: 0px 0px 0px 3px #99b882;
  border-radius: 10px;
  direction: rtl;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 20px;
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
  width: 3rem;
  height: 3rem;
  background-color: white;
  top: 0;
  // display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 3px #99b882;
  border-radius: 10px;
  color: black;
  position: relative;
`;
