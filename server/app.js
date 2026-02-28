import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { initDb } from "./src/database/db.js";
import { verifyAppCheckToken } from "./src/middlewares/authMiddleware.js";

import gameRoutes from "./src/routes/gameRoutes.js";

dotenv.config();

const app = express();

// --- Configurações ---
app.use(
  cors({
    origin: [process.env.LOCALHOST, process.env.NETWORK],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Firebase-AppCheck"],
  }),
);

app.use(express.json());

// --- Inicialização do Banco ---
initDb();

// --- Log de Requisições ---
app.use("/api", (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// --- Rotas Públicas ---
app.get("/", (req, res) => {
  res.json({ message: "GameHub API Online" });
});

// --- Rotas Protegidas ---
// Todas as rotas dentro de gameRoutes passarão pelo verifyAppCheckToken
// OU você pode aplicar individualmente dentro do arquivo de rotas
app.use("/api/games", verifyAppCheckToken, gameRoutes);

// Rota de Perfil (Opcional: agora pega dados do token do Firebase)
app.get("/api/profile", verifyAppCheckToken, (req, res) => {
  // Como o middleware já validou, req.user tem os dados do Firebase
  res.json({
    success: true,
    data: {
      uid: req.user.uid,
      email: req.user.email,
      provider: req.user.firebase.sign_in_provider,
    },
  });
});

// --- Tratamento de Erros ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Erro interno do servidor" });
});

app.listen(process.env.PORT, () =>
  console.log(`API rodando na porta ${process.env.PORT}`),
);

export default app;
