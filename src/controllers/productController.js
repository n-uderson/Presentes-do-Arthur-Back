import * as productRepository from "../repositories/productRepositories.js";


export async function getAllProdutos(req, res) {
  try {
    const produtos = await productRepository.findAllProdutos();
    return res.json(produtos);
  } catch (error) {
    console.error("Erro ao buscar todos os produtos:", error);
    return res.status(400).json({ message: "Erro ao buscar produtos." });
  }
}


export async function getProdutoById(req, res) {
  const { id } = req.params;

  try {
    const produto = await productRepository.findProdutoById(id);

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    return res.status(200).json(produto);
  } catch (error) {
    console.error("Erro ao buscar o produto pelo id:", error);
    return res.status(400).json({ message: "Erro ao buscar o produto por id" });
  }
}


export async function createProduto(req, res) {
  const { tipo, disponiveis } = req.body;

  try {
    const produto = await productRepository.createProduto({
      tipo,
      disponiveis,
    });

    return res.status(201).json({
      message: "Produto criado com sucesso",
      produto,
    });
  } catch (error) {
    console.error("Erro ao criar o produto", error);
    return res.status(400).json({ message: "Erro ao criar o produto" });
  }
}


export async function updateProduto(req, res) {
  const { id } = req.params;
  const { tipo, disponiveis } = req.body;

  try {
    const produto = await productRepository.updateProduto(id, {
      tipo,
      disponiveis,
    });

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    return res.status(200).json({
      message: "Produto atualizado com sucesso",
      produto,
    });
  } catch (error) {
    console.error("Erro ao atualizar o produto", error);
    return res.status(400).json({ message: "Erro ao atualizar o produto" });
  }
}


export async function deleteProduto(req, res) {
  const { id } = req.params;

  try {
    const produto = await productRepository.deleteProduto(id);

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    return res.status(200).json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar o produto", error);
    return res.status(400).json({ message: "Erro ao deletar o produto" });
  }
}
