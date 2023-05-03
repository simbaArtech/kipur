import { Wrapper } from "./styles";
import styled from "styled-components";

export default function Navbar({ selected, setSelected }) {

    const Item = styled.div`
        ${({ isSelected }) => isSelected && `
        color: #99b882;
        border-bottom: 2.5px solid #99b882;
    `}`;

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
            id: "amanUnits",
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