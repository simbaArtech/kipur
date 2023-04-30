import './App.css';
import Header from "./components/header/Header";
import { Routes, Route, Navigate } from 'react-router-dom';
import Recommended from './pages/Recommended';
import GameCircle from './components/GameCircle';
import People from './pages/People';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/people" element={<People />} />
        <Route path="*" element={<Navigate to="/recommended" replace />} />
      </Routes>
      <GameCircle />
    </>
  );
}

export default App;
