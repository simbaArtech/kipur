import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TimeLine from "./pages/timeline/TimeLine";
import ImagesAndEvents from "./pages/imagesAndEvents/ImagesAndEvent";
import Recommended from "./pages/recommended/Recommended";
import People from "./pages/people/People";
import Footer from "./components/footer/Footer";
import { PageProvider } from "./context/PageContext";
function App() {
  return (
    <PageProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/images" element={<ImagesAndEvents />} />
          <Route path="/recommended" element={<Recommended />} />
          <Route path="/people" element={<People />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </PageProvider>
  );
}

export default App;
