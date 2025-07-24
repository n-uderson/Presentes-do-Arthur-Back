import express from "express";
import productRoutes from "./routes/productRoutes.js";
import reservaRoutes from "./routes/reservaRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsConfig from "./config/corsConfig.js";
import "./config/db.js"; 

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsConfig));


app.use("/api/produtos", productRoutes);


app.use("/api/reservas", reservaRoutes);

export default app;
