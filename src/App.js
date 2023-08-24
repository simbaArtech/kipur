import "./App.css";
import Header from "./components/header/Header";
import Recommended from "./pages/recommended/Recommended";
import GameCircle from "./components/GameCircle";
import People from "./pages/people/People";
import SlainPerson from "./pages/people/SlainPerson";
import ImagesAndEvents from "./pages/imagesAndEvents/ImagesAndEvent";
import AmanUnits from "./pages/AmanUnits";
import Footer from "./components/footer/Footer";
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import BadResolution from "./components/badResolution/BadResolution";
import TimeLine from "./pages/timeline/TimeLine";

function App() {
  const [selected, setSelected] = useState("recommended");
  const items = [
    {
      id: "recommended",
      heb: "עמוד הבית",
      icon: require("./assets/pictures/home.svg"),
    },
    {
      id: "people",
      heb: "אישים",
      icon: require("./assets/pictures/people.svg"),
    },
    {
      id: "images",
      heb: "סיפורים",
      icon: require("./assets/pictures/story.svg"),
    },
    {
      id: "amanUnits",
      heb: 'יחידות אמ"ן',
      icon: require("./assets/pictures/unit.png"),
    },
    {
      id: "timeline",
      heb: "מנהרת הזמן",
      icon: require("./assets/pictures/timeline.svg"),
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
          selected == "amanUnits" && <AmanUnits />
        )}
        <GameCircle />
        <Footer selected={selected} setSelected={setSelected} />
        <Navbar items={items} selected={selected} setSelected={setSelected} />
      </div>
    </>
  );
}

// ) : selected == "events" ? (<Events />

export default App;
