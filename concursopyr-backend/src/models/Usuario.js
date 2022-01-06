const { Schema, model } = require("mongoose");

const createUserSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    fechaIngreso: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Usuario", createUserSchema);
