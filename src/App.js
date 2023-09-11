import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import TimeLine from "./pages/timeline/TimeLine";
import ImagesAndEvents from "./pages/imagesAndEvents/ImagesAndEvent";
import Recommended from "./pages/recommended/Recommended";
import People from "./pages/people/People";
import Footer from "./components/footer/Footer";
import Article from "./pages/article/Article";
import Header from "./components/header/Header";
import Game from "./pages/game/Game";

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          background: "#32332F",
          minHeight: "100vh",
          paddingBottom: "5rem",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/timeline" element={<TimeLine />} />
            <Route path="/images" element={<ImagesAndEvents />} />
            <Route path="/recommended" element={<Recommended />} />
            <Route path="/people" element={<People />} />
            <Route path="/article" element={<Article />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
