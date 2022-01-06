const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const {
  nuevoJuego,
  getJuegos,
  actualizarJuego,
  getJuego,
} = require("../controllers/juego");

router.post(
  "/newjuego",
  [
    check("concurso", "La categoria es obligatoria").not().isEmpty(),
    check("jugador", "El jugador es obligatorio").not().isEmpty(),
    check("puntaje", "El puntaje es obligatorio").not().isEmpty(),
  ],
  nuevoJuego
);

router.get("/juegos", getJuegos);
router.get("/juego/:id", getJuego);

router.put(
  "/actualizarjuego/:id",
  check("puntaje", "El puntaje es obligatorio").not().isEmpty(),
  actualizarJuego
);

module.exports = router;
