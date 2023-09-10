import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TimeLine from "./pages/timeline/TimeLine";
import ImagesAndEvents from "./pages/imagesAndEvents/ImagesAndEvent";
import Recommended from "./pages/recommended/Recommended";
import People from "./pages/people/People";
import Footer from "./components/footer/Footer";
import Article from "./pages/article/Article";
import { PageProvider } from "./context/PageContext";
import { ArticleProvider } from "./context/ArticleContext";
function App() {
  return (
    <PageProvider>
    <ArticleProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/images" element={<ImagesAndEvents />} />
          <Route path="/recommended" element={<Recommended />} />
          <Route path="/people" element={<People />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </ArticleProvider>
    </PageProvider>
  );
}

export default App;
