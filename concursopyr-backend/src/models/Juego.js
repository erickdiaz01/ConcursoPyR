const { Schema, model } = require("mongoose");

const createJuegoSchema = new Schema(
  {
    concurso: {
      type: Schema.Types.ObjectId,
      ref:"Concurso"
    },
    jugador: {
      type: Schema.Types.ObjectId,
      ref:"Usuario"
    },
   puntaje:{
       type: Number,
       required:true
   },
   fecha: {
     type:Date,
     default:Date.now()
   }
  }
);

module.exports = model("Juego", createJuegoSchema);
