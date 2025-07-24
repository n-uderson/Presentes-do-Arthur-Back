import Reserva from "./models/reservaModels.js";
import Produto from "./models/productModels.js";


export async function criarReserva({ nomePessoa, produtoId }) {
  const produto = await Produto.findById(produtoId);

  if (!produto || produto.disponiveis <= 0) {
    throw new Error("Produto não encontrado ou indisponível");
  }

  
  const novaReserva = await Reserva.create({
    nomePessoa,
    produto: produtoId
  });

  
  produto.disponiveis -= 1;
  await produto.save();

  return novaReserva;
}


export async function listarReservas() {
  return await Reserva.find().populate("produto");
}
