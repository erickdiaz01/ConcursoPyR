const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const {
  crearUsuario,
  getUsuarios,
  getUsuario,
} = require("../controllers/auth");

router.post(
  "/newuser",
  [check("nombre", "El nombre es obligatorio").not().isEmpty()],
  crearUsuario
);

router.get("/usuarios", getUsuarios);

router.get("/usuario/:id", getUsuario);

module.exports = router;