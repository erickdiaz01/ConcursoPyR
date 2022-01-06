// Importación del modelo de un Concurso
const Concurso = require("../models/Concurso");
//Importación del metodo response de Express
const { response } = require("express");

// Este metodo tomará la nueva categoria a crear de un concurso y las preguntas correspondientes a cada nivel mandados desde el Front para recibirlo y crear un nuevo concurso
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
//Metodo para tomar todos los concursos registrados en la base de datos
const getConcursos = async (req, resp = response) => {
  try {
    const concursos = await Concurso.find();
    resp.json(concursos);
  } catch (error) {
    console.log(error);
  }
};
// Metodo para tomar solo un concurso en especial, mediante el parametro de entrada ":id" en la URL
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