import React from "react";
import cube from "../assets/pictures/cube.png";

export default function GameCircle() {
  const circleStyle = {
    background: "#475E36",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    position: "relative",
    left: "25px",
    bottom: "55px",
  };

  const imgStyle = {
    padding: "19%",
    width: "48px",
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
    <div style={blackFadeStyle}>
      <div style={circleStyle}>
        <img src={cube} style={imgStyle} />
      </div>
    </div>
  );
}
