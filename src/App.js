import './App.css';
import Header from "./components/header/Header";
import { Routes, Route, Navigate } from 'react-router-dom';
import Recommended from './pages/recommended/Recommended';
import GameCircle from './components/GameCircle';
import People from './pages/people/People';
import Events from './pages/events/Events';
import Images from './pages/images/Images';

function App() {
  return (
    <>
      <Header />
      <div style={{ background: "#32332F" }}>
        <Routes>
          <Route path="/recommended" element={<Recommended />} />
          <Route path="/people" element={<People />} />
          <Route path="/events" element={<Events />} />
          <Route path="/images" element={<Images />} />
          <Route path="*" element={<Navigate to="/recommended" replace />} />
        </Routes>
      </div>
      <GameCircle />
    </>
  );
}

export default App;
