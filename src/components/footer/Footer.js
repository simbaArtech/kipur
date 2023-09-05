import React, { useState } from "react";
import { LocalPostOffice as EmailIcon } from "@mui/icons-material";
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
  const selectedStyle = {
    margin: "auto",
    borderRadius: "9px",
    width: "4.8rem",
    padding: "2px 0px",
    background: "#657c54",
    border: "1px solid #657c54",
  };
  const unselectedStyle = {
    margin: "auto",
    borderRadius: "9px",
    width: "4.8rem",
    padding: "2px 0px",
    background: "none",
    border: "1px solid #657c54",
  };
  const [selectedLabel, setSelectedLabel] = useState();
  const labels = [
    { name: "צרו קשר", icon: EmailIcon },
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
              <div
                key={label}
                style={selectedLabel == label ? selectedStyle : unselectedStyle}
                onClick={() => {
                  setSelectedLabel(label);
                }}
              >
                <img src={label.icon}></img>
                {label.name}
              </div>
            ))}
          </div>
        </FooterContainer>
      )}
    </>
  );
}
