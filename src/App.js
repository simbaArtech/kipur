import "./App.css";
import Header from "./components/header/Header";
import Recommended from "./pages/recommended/Recommended";
import People from "./pages/people/People";
import ImagesAndEvents from "./pages/imagesAndEvents/ImagesAndEvent";
import Footer from "./components/footer/Footer";
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import BadResolution from "./components/badResolution/BadResolution";
import TimeLine from "./pages/timeline/TimeLine";
import Crossword from "./components/game/Game";

function App() {
  const [selected, setSelected] = useState("recommended");
  const items = [
    {
      id: "recommended",
      heb: "עמוד הבית",
      icon: require("./assets/pictures/home.svg"),
      iconSel: require("./assets/pictures/homeSel.svg"),
    },
    {
      id: "images",
      iconSel: require("./assets/pictures/storySel.svg"),
      heb: "אישים ואירועים",
      icon: require("./assets/pictures/story.svg"),
    },
    {
      iconSel: require("./assets/pictures/timelineSel.svg"),
      id: "timeline",
      heb: "מנהרת הזמן",
      icon: require("./assets/pictures/timeline.svg"),
    },
    {
      icon: require("./assets/pictures/people.svg"),
      id: "people",
      heb: "חללים ושבויים",
      iconSel: require("./assets/pictures/peopleSel.svg"),
    },
    {
      id: "game",
      heb: "תשבץ היגיון",
      iconSel: require("./assets/pictures/crosswordSel.svg"),
      icon: require("./assets/pictures/crossword.svg"),
    },
  ];
  return (
    <>
      {window.innerWidth > 500 && <BadResolution />}
      <Header />
      <div style={{ background: "#32332F" }}>
        {selected == "recommended" ? (
          <Recommended />
        ) : selected == "people" ? (
          <People />
        ) : selected == "images" ? (
          <ImagesAndEvents />
        ) : selected == "timeline" ? (
          <TimeLine />
        ) : (
          selected == "game" && <Crossword  />
        )}
      </div>
      <Footer />
      <Navbar items={items} selected={selected} setSelected={setSelected} />
    </>
  );
}

// ) : selected == "events" ? (<Events />

export default App;
