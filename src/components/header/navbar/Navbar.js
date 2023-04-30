import { Wrapper } from "./styles";
import { useState } from "react";
import styled from "styled-components";

export default function Navbar() {
    const [selected, setSelected] = useState("recommended");
    const Item = styled.div`
        ${({ isSelected }) => isSelected && `
        color: #99b882;
        border-bottom: 2.5px solid #99b882;
    `}`

    const items = [
        {
            id: "recommended",
            heb: "מומלצים"
        },
        {
            id: "people",
            heb: "אישים וחללים"
        },
        {
            id: "events",
            heb: "אירועים"
        },
        {
            id: "pictures",
            heb: "תמונות מספרות"
        },
        {
            id: "amanUnit",
            heb: 'יחידות אמ"ן'
        },
        {
            id: "timeline",
            heb: "ציר זמן"
        }
    ];

    return (
        <Wrapper>
            {items.map(item =>
                <Item isSelected={selected == item.id} onClick={() => setSelected(item.id)}>{item.heb}</Item>
            )}
        </Wrapper>
    )
}