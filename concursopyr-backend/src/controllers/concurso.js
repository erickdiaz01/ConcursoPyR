const Concurso = require("../models/Concurso");

const { response } = require("express");

const crearConcurso = async (req, resp = response) => {
  const {
    category,
    preguntasNivel1,
    preguntasNivel2,
    preguntasNivel3,
    preguntasNivel4,
    preguntasNivel5,
  } = req.body;
  try {
    let nuevoConcurso = new Concurso({
      category: category,
      nivel1: preguntasNivel1,
      nivel2: preguntasNivel2,
      nivel3: preguntasNivel3,
      nivel4: preguntasNivel4,
      nivel5: preguntasNivel5,
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


module.exports = {
    getConcursos,
    crearConcurso
}