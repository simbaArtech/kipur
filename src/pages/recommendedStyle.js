import styled from "styled-components"

export const SemiTitle = styled.div`
    font-weight: bold;
    font-size: 1rem;
    color: white;
    text-align: right;
    margin: 1rem;
`

export const Container = styled.div`
    background: #32332F;
`
export const ArticleTextContainer = styled.div`
    margin-right: 1rem;
    margin-top: 5px;
    text-align: right;
`

export const ArticleContainer = styled.div`
    background: #43443E;
    display: flex;
    flex-direction: row-reverse;
    padding: 7px 26px;
    margin-bottom: 1rem;
`
export const ArticleTitle = styled.div`
    color: white;
`
export const ArticleDetailsContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
`
export const ArticleDetail = styled.div`
    display: flex;
    align-items: center;
    color: #99b882;
    font-size: 0.8rem;
`

export const ArticlePic = styled.img`
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 12px;
`