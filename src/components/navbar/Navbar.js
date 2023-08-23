import React from "react";
import { Wrapper } from "./styles";
import styled from "styled-components";

export default function Navbar({ items, selected, setSelected }) {
  const Item = styled.div`
    ${({ isSelected }) =>
      isSelected &&
      `
        color: #99b882;
        border-bottom: 2.5px solid #99b882;
    `}
  `;

  const handleChange = (name) => {
    setSelected(name);
  };


  return (
    <Wrapper>
      {items.map((item) => (
        <Item
          isSelected={selected == item.id}
          onClick={() => handleChange(item.id)}
        >
          {item.heb}
        </Item>
      ))}
    </Wrapper>
  );
}
