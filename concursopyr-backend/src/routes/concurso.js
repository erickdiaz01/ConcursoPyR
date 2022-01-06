const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const {
  crearConcurso,
  getConcursos,
  getConcurso,
} = require("../controllers/concurso");

router.post(
  "/newconcurso",
  [
    check("category", "La categoria es obligatoria").not().isEmpty(),
    check("nivel1", "Las preguntas de nivel 1 son obligatorias")
      .not()
      .isEmpty(),
    check("nivel2", "Las preguntas de nivel 2 son obligatorias")
      .not()
      .isEmpty(),
    // check("nivel3", "Las preguntas de nivel 3 son obligatorias").not().isEmpty(),
    // check("nivel4", "Las preguntas de nivel 4 son obligatorias").not().isEmpty(),
    // check("nivel5", "Las preguntas de nivel 5 son obligatorias").not().isEmpty(),
  ],
  crearConcurso
);

router.get("/concursos", getConcursos);

router.get("/concurso/:id", getConcurso);

module.exports = router;
