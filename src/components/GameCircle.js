import React from "react";
import crossword from "../assets/pictures/crossword.svg";
import { hydrate } from "react-dom";

export default function GameCircle({ setGame }) {
  const imgStyle = {
    bottom: "100px",
    left: "15px",
    width: "90px",
    position: "relative",
  };

  const blackFadeStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "4rem",
    background: "linear-gradient(to bottom, transparent, #000000d9)",
  };

  return (
    <div style={blackFadeStyle} onClick={() => setGame(true)}>
      <img src={crossword} style={imgStyle} />
    </div>
  );
}
