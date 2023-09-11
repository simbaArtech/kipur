import React from "react";
import logo from "../../assets/pictures/logo.webp";
import { Title, Logo, Container } from "./styles";

export default function Header() {
  return (
    <>
      <Container>
        <Title>אמ"ן במלחמת יום הכיפורים</Title>
        <Logo src={logo} />
      </Container>
    </>
  );
}
