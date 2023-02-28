import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Error404 from "./components/Error404";
import Footer from './components/Footer';
import Home from "./components/secciones/Home";
import Navbar from './components/Navbar';
import PreguntasFrecuentes from "./components/secciones/PreguntasFrecuentes";
import Inscribirme from "./components/secciones/Inscribirme";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/inscribirme"} element={<Inscribirme/>} />
        <Route path={"/preguntasfrecuentes"} element={<PreguntasFrecuentes/>} />
        <Route path={"*"} element={<Error404/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
