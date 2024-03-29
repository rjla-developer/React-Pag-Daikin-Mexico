import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Context
import { ContextProyectosProvider } from "./context/ContextProyectos";
import { ContextDistribuidoresProvider } from "./context/ContextDistribuidores";
import { ContextEntrenamientosProvider } from "./context/ContextEntrenamientos";

import Menu from "./components/Menu";
import Home from "./screens/Home";
import CulturaDaikin from "./screens/CulturaDaikin";
import VRV from "./screens/VRV";
import Residencial from "./screens/Residencial";
import Aplicado from "./screens/Aplicado";
import Purificadores from "./screens/Purificadores";
import Servicios from "./screens/Servicios";
import NoticiasEIndustria from "./screens/NoticiasEIndustria";
import Noticia from "./components/noticiasComponents/Noticia";
import Distribuidores from "./screens/Distribuidores";
import Proyecto from "./screens/Proyecto";
import CentroEntrenamiento from "./screens/CentroEntrenamiento";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ContextEntrenamientosProvider>
        <ContextDistribuidoresProvider>
          <ContextProyectosProvider>
            <React.StrictMode>
              <BrowserRouter>
                <Menu />
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/cultura" element={<CulturaDaikin />}></Route>
                  <Route path="/vrv" element={<VRV />}></Route>
                  <Route path="/residencial" element={<Residencial />}></Route>
                  <Route path="/aplicado" element={<Aplicado />}></Route>
                  <Route
                    path="/purificadores"
                    element={<Purificadores />}
                  ></Route>
                  <Route path="/servicios" element={<Servicios />}></Route>
                  <Route
                    path="/noticias"
                    element={<NoticiasEIndustria />}
                  ></Route>
                  <Route path="/noticia" element={<Noticia />}></Route>
                  <Route
                    path="/distribuidores"
                    element={<Distribuidores />}
                  ></Route>
                  <Route
                    path="/entrenamientos"
                    element={<CentroEntrenamiento />}
                  ></Route>
                  <Route
                    path="/entrenamiento/:id"
                    element={<CentroEntrenamiento />}
                  ></Route>
                  <Route path="/proyecto" element={<Proyecto />}></Route>
                </Routes>
                <Footer />
              </BrowserRouter>
            </React.StrictMode>
          </ContextProyectosProvider>
        </ContextDistribuidoresProvider>
      </ContextEntrenamientosProvider>
    </>
  );
}

export default App;
