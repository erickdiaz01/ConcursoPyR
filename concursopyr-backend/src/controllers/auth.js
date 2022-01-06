const Usuario = require("../models/Usuario");
const { response } = require("express");

const crearUsuario = async (req, resp = response) => {
  const { nombre } = req.body;

  try {
    let usuario = new Usuario(nombre);
    await usuario.save();
    resp.status(201).json({
      ok: true,
      message: "Usuario creado de manera exitosa",
      uid: usuario.id,
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

const getUsuarios = async (req, resp = response) => {
  const usuarios = await Usuario.find();
  resp.json(usuarios);
};

const getUsuario = async (req, resp = response) => {
  const usuario = await Usuario.findById(req.params.id);
  resp.json(usuario);
};


module.exports={
  getUsuario,
  getUsuarios,
  crearUsuario
}
