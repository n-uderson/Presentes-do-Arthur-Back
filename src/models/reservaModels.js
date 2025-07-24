import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({
  nomePessoa: { type: String, required: true },
  produto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Produto",
    required: true
  }
});

export default mongoose.model("Reserva", reservaSchema);
