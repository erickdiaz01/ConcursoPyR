const { Schema, model } = require("mongoose");

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
