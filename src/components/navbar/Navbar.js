import React, { useState } from "react";
import { Wrapper } from "./styles";
import styled from "styled-components";
import { useNavigate } from "react-router";

export default function Navbar({ selected }) {
  // const [page, setPage] = useState();
  const navigate = useNavigate();
  const items = [
    {
      id: "recommended",
      heb: "עמוד הבית",
      icon: require("../../assets/pictures/home.svg"),
      iconSel: require("../../assets/pictures/homeSel.svg"),
    },
    {
      id: "images",
      iconSel: require("../../assets/pictures/storySel.svg"),
      heb: "אישים ואירועים",
      icon: require("../../assets/pictures/story.svg"),
    },
    {
      iconSel: require("../../assets/pictures/timelineSel.svg"),
      id: "timeline",
      heb: "מנהרת הזמן",
      icon: require("../../assets/pictures/timeline.svg"),
    },
    {
      icon: require("../../assets/pictures/people.svg"),
      id: "people",
      heb: "חללים ושבויים",
      iconSel: require("../../assets/pictures/peopleSel.svg"),
    },
    {
      id: "game",
      heb: "תשבץ היגיון",
      iconSel: require("../../assets/pictures/crosswordSel.svg"),
      icon: require("../../assets/pictures/crossword.svg"),
    },
  ];
  const Item = styled.div`
    ${({ isSelected }) =>
      isSelected &&
      `
        color: #99b882;
    `}
  `;
  // fill: ${({ isSelected }) => (isSelected ? "#99b882" : "#797979")};
  const Icon = styled.img`
    width: 25px;
    height: 25px;
    align-self: center;
  `;

  const handleChange = (name) => {
    navigate(`/${name}`);
  };

  return (
    <Wrapper onClick={() => sessionStorage.setItem("firstTimeBannerDismissed", "true")}>
      {items.map((item) => (
        <div
          style={{ display: "inline", textAlign: "center" }}
          onClick={() => handleChange(item.id)}
        >
          <Icon
            src={selected == item.id ? item.iconSel : item.icon}
            isSelected={selected == item.id}
          />
          <Item isSelected={selected == item.id}>{item.heb}</Item>
        </div>
      ))}
    </Wrapper>
  );
}
