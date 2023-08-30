import React, { useState } from "react";
// import Crossword from "@jaredreisinger/react-crossword";
import Crossword from "@irvanster/react-crossword-x";
import { ArrowForwardIos as ArrowIcon } from "@mui/icons-material";
import { data } from "./consts";
import { BackBtn } from "../article/articleStyle";

export default function Game({ setGame }) {
  const [selectedClue, setSelectedClue] = useState(null);

  const handleCellClick = (event) => {};

  return (
    <div
      style={{
        background: "gray",
        height: "100%",
        width: "100%",
        direction: "rtl",
      }}
    >
      <BackBtn style={{ top: "4rem" }} onClick={() => setGame(false)}>
        <ArrowIcon sx={{ color: "white", width: "1rem", paddingLeft: "5px" }} />
      </BackBtn>
      <Crossword
        data={data}
        onCellFocus={(event) => setSelectedClue(event.clue)}
        style={{}}
      />
      {selectedClue && (
        <div className="clue-container">
          <h3>Selected Clue:</h3>
          <p>{selectedClue}</p>
        </div>
      )}
    </div>
  );
}
