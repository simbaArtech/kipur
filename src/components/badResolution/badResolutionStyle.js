import { style } from "@mui/system";
import styled from "styled-components";

export const Back = styled.div`
position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: #e7e7e7;
    user-select: none;
`

export const Container = styled.div`
    width: 380px;
    height: 300px;
    background: white;
    border-radius: 14px;
    margin: auto;
    position: relative;
    top: 12%;
    direction: rtl;
`

export const Top = styled.div`
    background: #74a776;
    height: 70px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`

export const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 2rem;
`

export const Information = styled.div`
    font-size: 20px;
    padding: 0 2rem;
`