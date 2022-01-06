import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Common/NavBar/NavBar";
import Historico from "../Components/Historico";
import Home from "../Components/Home";
import Juego from "../Components/Juego/Juego";
import NuevoConcurso from "../Components/NuevoConcurso";

const ContentRoutes = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crearconcurso" element={<NuevoConcurso />} />
          <Route path="/juego/:id" element={<Juego />} />
          <Route path="/historico" element={<Historico />} />{" "}
        </Routes>
      </Router>
    </>
  );
};

export default ContentRoutes;
