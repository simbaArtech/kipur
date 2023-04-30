import './App.css';
import Header from "./components/header/Header";
import { Routes, Route } from 'react-router-dom';
import Recommended from './pages/Recommended';
import GameCircle from './components/GameCircle';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Recommended />} />
      </Routes>
      <GameCircle />
    </>
  );
}

export default App;
