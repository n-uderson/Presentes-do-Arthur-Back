import Produto from "../models/productModels.js";


export async function findAllProdutos() {
  return await Produto.find();
}


export async function findProdutoById(id) {
  return await Produto.findById(id);
}


export async function createProduto({ tipo, disponiveis }) {
  return await Produto.create({ tipo, disponiveis });
}


export async function updateProduto(id, { tipo, disponiveis }) {
  return await Produto.findByIdAndUpdate(
    id,
    { tipo, disponiveis },
    { new: true }
  );
}


export async function deleteProduto(id) {
  return await Produto.findByIdAndDelete(id);
}
