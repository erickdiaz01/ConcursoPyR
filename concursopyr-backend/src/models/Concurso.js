const { Schema, model } = require("mongoose");
//Modelo de un concurso, en donde se tiene una categoria, y 5 niveles, los cuales son arreglos de objetos que constan de la pregunta, 3 opciones incorrectas y 1 respuesta correcta
const createConcursoSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },

    nivel1: [
      {
        pregunta: String,
        respuestaCorrecta: String,
        respuestasIncorrectas: [String],
      },
    ],

    nivel2: [
      {
        pregunta: String,
        respuestaCorrecta: String,
        respuestasIncorrectas: [String],
      },
    ],
    nivel3: [
      {
        pregunta: String,
        respuestaCorrecta: String,
        respuestasIncorrectas: [String],
      },
    ],

    nivel4: [
      {
        pregunta: String,
        respuestaCorrecta: String,
        respuestasIncorrectas: [String],
      },
    ],

    nivel5: [
      {
        pregunta: String,
        respuestaCorrecta: String,
        respuestasIncorrectas: [String],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Concurso", createConcursoSchema);
