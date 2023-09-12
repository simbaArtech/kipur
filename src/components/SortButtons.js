import React, { useState } from "react";

export default function SortButtons({ labels, setSelectedLabel }) {
  const lableStorage = sessionStorage.getItem("filterBy");
  const [selected, setSelected] = useState(
    lableStorage ? lableStorage : labels[0]
  );

  const containerStyle = {
    display: "flex",
    flexDirection: "row-reverse",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "0.7rem",
    padding: "0.5rem",
    paddingTop: "1rem",
  };
  const selectedStyle = {
    color: "black",
    margin: "auto",
    width: "fit-content",
    padding: "3px 12px",
    background: "white",
    borderRadius: "20vw",
    fontSize: "15px",
    height: "2rem",
    lineHeight: "1.8",
  };
  const unselectedStyle = {
    margin: "auto",
    width: "4.5rem",
    fontSize: "15px",
    padding: "2px 0px",
    background: "#657c54",
    color: "black",
    borderRadius: "20vw",
    border: "2px solid #657c54",
    height: "2rem",
    lineHeight: "1.8",
  };

  return (
    <div style={containerStyle}>
      {labels.map((label) => (
        <div
          key={label}
          style={selected == label ? selectedStyle : unselectedStyle}
          onClick={() => {
            sessionStorage.setItem("filterBy", label);
            setSelectedLabel(label);
            setSelected(label);
            // Corrected the placement of the closing parenthesis
          }}
        >
          {selected == label ? label : label.split(" ")[0]}
        </div>
      ))}
    </div>
  );
}
