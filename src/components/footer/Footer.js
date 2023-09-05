import React, { useState } from "react";
import logos from "../../assets/pictures/logos.png";
import {
  FooterContainer,
  Contact,
  Logos,
  CardFooterContainer,
} from "./footerStyle";

export default function Footer({ card }) {
  const containerStyle = {
    display: "flex",
    flexDirection: "row-reverse",
    textAlign: "center",
    color: "white",
    marginTop: "0",
    fontWeight: "bold",
    fontSize: "0.7rem",
    padding: "2rem 0.5rem",
  };
  const unselectedStyle = {
    margin: "auto",
    borderRadius: "9px",
    marginLeft: "10px",
    marginRight: "10px",
    width: "4.8rem",
    padding: "2px 0px",
    justifyContent: "space-around",
    display: "flex",
    alignItems: "center",
    background: "none",
    border: "1px solid #657c54",
  };
  const labels = [
    { name: "צרו קשר", icon: require("../../assets/pictures/email.png") },
    { name: "אודות", icon: require("../../assets/pictures/odot.svg") },
  ];

  return (
    <>
      {card ? (
        ""
      ) : (
        <FooterContainer>
          <Logos src={logos} />
          פותח ועוצב ע"י תחום ארטק, מערך הדרכה אמ"ן
          <div style={containerStyle}>
            {labels.map((label) => (
              <div key={label} style={unselectedStyle}>
                <img
                  src={label.icon}
                  style={{ width: "20px", height: "20px" }}
                ></img>
                {label.name}
              </div>
            ))}
          </div>
        </FooterContainer>
      )}
    </>
  );
}
