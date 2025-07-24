import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    tipo: { type: String, required: true },
    disponiveis: { type: Number, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Produto", produtoSchema);
