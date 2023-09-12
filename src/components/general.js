import styled from "styled-components";

export const SemiTitle = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
  text-align: right;
  margin: 1rem;
`;
export const ArticleTextContainer = styled.div`
  margin: 5px auto 0 auto;
  width: 59vw;
  margin-top: 5px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArticleContainer = styled.div`
  width: 340px;
  border-radius: 10px;
  background: #43443e;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 1rem;
  padding: 7px;
`;
export const ArticleTitle = styled.div`
  color: white;
  font-weight: bold;
`;
export const ArticleDetailsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;
export const ArticleDetail = styled.div`
  display: flex;
  align-items: center;
  color: #99b882;
  direction: rtl;
  font-size: 1rem;
`;

export const ArticlePic = styled.img`
  width: 80px !important;
  height: 80px !important;
  margin-left: 10px;
  border-radius: 12px;
  object-fit: cover;
`;
