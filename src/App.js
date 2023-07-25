import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./screens/Home";
import CulturaDaikin from "./screens/CulturaDaikin";
import Servicios from "./screens/Servicios";
import NoticiasEIndustria from "./screens/NoticiasEIndustria";
import Noticia from "./components/noticiasComponents/Noticia";
import Distribuidores from "./screens/Distribuidores";
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
            <Route path="/servicios" element={<Servicios />}></Route>
            <Route path="/noticias" element={<NoticiasEIndustria />}></Route>
            <Route path="/noticia" element={<Noticia />}></Route>
            <Route path="/distribuidores" element={<Distribuidores />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
