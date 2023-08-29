import React, { useState } from "react";

export default function SortButtons({ labels, setSelectedLabel }) {
  const [selected, setSelected] = useState(labels[0]);

  const containerStyle = {
    display: "flex",
    flexDirection: "row-reverse",
    textAlign: "center",
    color: "white",
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

  return (
    <div style={containerStyle}>
      {labels.map((label) => (
        <div
          key={label}
          style={selected == label ? selectedStyle : unselectedStyle}
          onClick={() => {
            setSelectedLabel(label);
            setSelected(label);
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
