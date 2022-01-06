import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Common/NavBar/NavBar";
import Home from "../Components/Home";
import NuevoConcurso from "../Components/NuevoConcurso";

const ContentRoutes = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crearconcurso" element={<NuevoConcurso />} />
        </Routes>
      </Router>
    </>
  );
};

export default ContentRoutes;
