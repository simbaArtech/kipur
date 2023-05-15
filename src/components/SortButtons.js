import { useState } from "react";

export default function SortButtons() {
    const labels = [
        "לפני המלחמה",
        "ערב המלחמה",
        "מהלך המלחמה",
        "תוצאות"
    ];

    const [selected, setSelected] = useState("לפני המלחמה");
    const containerStyle = { display: "flex", flexDirection: "row-reverse", textAlign: "center", color: "white", fontWeight: "bold", fontSize: "0.7rem", padding: "2rem 0.5rem" };
    const selectedStyle = { margin: "auto", borderRadius: "9px", width: "4.8rem", padding: "2px 0px", background: "#657c54", border: "1px solid #657c54" };
    const unselectedStyle = { margin: "auto", borderRadius: "9px", width: "4.8rem", padding: "2px 0px", background: "none", border: "1px solid #657c54" };

    return (
        <div style={containerStyle}>
            {labels.map(label =>
                <div key={label} style={selected == label ? selectedStyle : unselectedStyle} onClick={() => setSelected(label)}>{label}</div>
            )}
        </div>
    )
}