import { Router } from "express";
import * as productController from "../controllers/productController.js";

const router = Router();

router.get("/", productController.getAllProdutos);
router.get("/:id", productController.getProdutoById);
router.post("/", productController.createProduto);
router.put("/:id", productController.updateProduto);
router.delete("/:id", productController.deleteProduto);

export default router;