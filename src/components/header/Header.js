import React from "react";
import logo from "../../assets/pictures/logo.png";
import { Title, Logo, Container } from "./styles";

export default function Header() {
  return (
    <>
      <Container>
        <Logo src={logo} />
        <Title>אמ"ן במלחמת יום הכיפורים</Title>
      </Container>
    </>
  );
}
