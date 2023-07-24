import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./screens/Home";
import CulturaDaikin from "./screens/CulturaDaikin";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cultura" element={<CulturaDaikin />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
