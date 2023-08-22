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
import BadResolution from "./components/badResolution/BadResolution";

function App() {
  const [selected, setSelected] = useState("recommended");

  return (
    <>
      {window.innerWidth > 500 && <BadResolution />}
      <Header selected={selected} setSelected={setSelected} />
      <div style={{ background: "#32332F" }}>
        {selected == "recommended" ? (
          <Recommended />
        ) : selected == "people" ? (
          <People />
        ) : selected == "images" ? (
          <ImagesAndEvents />
        ) : (
          selected == "amanUnits" && <AmanUnits />
        )}

        <GameCircle />
        <Footer />
      </div>
    </>
  );
}

// ) : selected == "events" ? (<Events />

export default App;
