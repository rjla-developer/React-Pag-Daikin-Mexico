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
      <Menu />
      <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cultura" element={<CulturaDaikin />}></Route>
            </Routes>
          </BrowserRouter>
      </React.StrictMode>
      <Footer />
    </>
  );
}

export default App;
