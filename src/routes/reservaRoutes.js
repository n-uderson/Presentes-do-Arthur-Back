import express from "express";
import { criarReserva, listarReservas } from "../reservaService.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const reserva = await criarReserva(req.body);
    res.status(201).json(reserva);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const reservas = await listarReservas();
    res.json(reservas);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

export default router;
