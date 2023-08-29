import React from "react";
import Crossword from "@jaredreisinger/react-crossword";
import Footer from "../footer/Footer";
import { data } from "./consts";

export default function Game() {
  const handleClickCell = (event) => {
    console.log(event);
  };
  return (
    <div style={{ background: "gray", height: "100%", width: "100%" }}>
      <Crossword
        data={data}
        onCellChange={(event) => handleClickCell(event)}
        onClueSelected={(event) => handleClickCell(event)}
      />
      <Footer />
    </div>
  );
}
