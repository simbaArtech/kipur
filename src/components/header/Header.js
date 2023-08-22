import React from "react";
import logo from "../../assets/pictures/logo.png";
import Navbar from "./navbar/Navbar";
import { Title, Logo, Container } from "./styles";

export default function Header({ selected, setSelected }) {
  const items = [
    {
      id: "recommended",
      heb: "מומלצים",
    },
    {
      id: "people",
      heb: "אישים שבויים וחללים",
    },
    {
      id: "images",
      heb: "סיפורים מספרים",
    },
    {
      id: "amanUnits",
      heb: 'יחידות אמ"ן',
    },
    {
      id: "timeline",
      heb: "ציר זמן",
    },
  ];
  return (
    <>
      <Container>
        <Logo src={logo} />
        <Title>אמ"ן במלחמת יום הכיפורים</Title>
      </Container>
      <Navbar items={items} selected={selected} setSelected={setSelected} />
    </>
  );
}
