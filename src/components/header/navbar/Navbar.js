import { Wrapper } from "./styles";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export default function Navbar() {
    const [selected, setSelected] = useState("recommended");
    let navigate = useNavigate();

    const Item = styled.div`
        ${({ isSelected }) => isSelected && `
        color: #99b882;
        border-bottom: 2.5px solid #99b882;
    `}`;

    useEffect(() => {
        navigate(`/${selected}`);
    }, [selected]);

    const handleChange = (name) => {
        setSelected(name);
    }

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
            id: "images",
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
                <Item isSelected={selected == item.id} onClick={() => handleChange(item.id)}>{item.heb}</Item>
            )}
        </Wrapper>
    )
}