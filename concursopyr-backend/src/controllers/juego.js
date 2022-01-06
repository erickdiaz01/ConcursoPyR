// Importación del modelo de un juego
const Juego = require("../models/Juego");
const { response } = require("express");

//Metodo para crear un nuevo juego una vez se haya ingresado el nombre de usuario y la categoria con la que quiere participar el usuario
const nuevoJuego = async (req, resp = response) => {
  const { concurso, jugador, puntaje } = req.body;
  try {
    let juego = new Juego(req.body);
    await juego.save();
    resp.status(201).json({
      ok: true,
      message: "Juego creado con exito",
      jugador,
      juego
  
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      message: "Error al guardar el juego",
    });
  }
};
//Metodo para actualizar el juego (el puntaje) según se vaya desarrollando
const actualizarJuego = async (req, resp = response) => {
  try {
    let { puntaje } = req.body;
    await Juego.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { puntaje }
    );
    resp.status(201).json({
      ok: true,
      message: "Juego actualizado de manera exitosa",
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      message: "Error al actualizar el juego",
    });
  }
};

//Metodo para tomar todos los juegos registrados en la base de datos
const getJuegos = async (req, resp = response) => {
  try {
    const juegos = await Juego.find().populate("jugador").populate("concurso");
    resp.json(juegos);
  } catch (error) {
    console.log(error);
  }
};
//Metodo para tomar un solo juego en especial en la base de datos
const getJuego = async (req, resp = response) => {
  try {
    const juego = await Juego.findById(req.params.id).populate("jugador").populate("concurso");
    resp.json(juego);
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
    nuevoJuego,
    getJuegos,
    actualizarJuego,
    getJuego
}
