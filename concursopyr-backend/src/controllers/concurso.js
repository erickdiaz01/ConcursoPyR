const Concurso = require("../models/Concurso");

const { response } = require("express");

const crearConcurso = async (req, resp = response) => {
  const {
    category,
    nivel1,
    nivel2,
    nivel3,
    nivel4,
    nivel5
  } = req.body;
  try {
    let nuevoConcurso = new Concurso({
      category: category,
      nivel1: nivel1,
      nivel2: nivel2,
      nivel3: nivel3,
      nivel4: nivel4,
      nivel5: nivel5,
    });

    await nuevoConcurso.save();
    resp.status(201).json({
      ok: true,
      message: "Concurso creado",
      category,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      message: "error al guardar el concurso",
    });
  }
};

const getConcursos = async (req, resp = response) => {
  try {
    const concursos = await Concurso.find();
    resp.json(concursos);
  } catch (error) {
    console.log(error);
  }
};

const getConcurso = async (req, resp = response) => {
  try {
  
    const concurso = await Concurso.findById(req.params.id);
    resp.json(concurso);
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getConcursos,
    crearConcurso,
    getConcurso
}