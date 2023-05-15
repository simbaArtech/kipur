import './App.css';
import Header from "./components/header/Header";
import Recommended from './pages/recommended/Recommended';
import GameCircle from './components/GameCircle';
import People from './pages/people/People';
import Events from './pages/events/Events';
import Images from './pages/images/Images';
import AmanUnits from './pages/AmanUnits';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import BadResolution from './components/badResolution/BadResolution';

function App() {
  const [selected, setSelected] = useState("recommended");

  return (
    <>
      {window.innerWidth > 500 &&
        <BadResolution />}
      <Header selected={selected} setSelected={setSelected} />
      <div style={{ background: "#32332F" }}>
        {selected == "recommended" ?
          <Recommended /> :
          selected == "people" ? <People /> :
            selected == "events" ? <Events /> :
              selected == "images" ? <Images /> :
                selected == "amanUnits" && <AmanUnits />}
        <GameCircle />
        <Footer />
      </div>
    </>
  );
}

export default App;
