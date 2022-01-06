// Importación del modelo de Usuario del juego
const Usuario = require("../models/Usuario");
//Importación del metodo response de Express
const { response } = require("express");


// Este metodo tomará el nombre mandado desde el Front para recibirlo y crear un nuevo usuario si es que el nombre de usuario ingresado aun no está registrado en la base de datos
const crearUsuario = async (req, resp = response) => {
  const { nombre } = req.body;

  try {
    let usuario = new Usuario({ nombre });
    await usuario.save();
    resp.status(201).json({
      ok: true,
      message: "Usuario creado de manera exitosa",
      id: usuario.id,
      name: usuario.name,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      message: "error al guardar el registro",
    });
  }
};
//Metodo para tomar todos los usuarios registrados en la base de datos
const getUsuarios = async (req, resp = response) => {
  const usuarios = await Usuario.find();
  resp.json(usuarios);
};
// Metodo para tomar solo un usuario en especial, mediante el parametro de entrada ":id" en la URL
const getUsuario = async (req, resp = response) => {
  const usuario = await Usuario.findById(req.params.id);
  resp.json(usuario);
};

module.exports = {
  getUsuario,
  getUsuarios,
  crearUsuario,
};
