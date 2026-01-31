import dotenv from "dotenv";
import admin from "firebase-admin";
import { createRequire } from "module";

dotenv.config();

// Carregando o JSON de credenciais (maneira compatível com ES Modules)
const require = createRequire(import.meta.url);
const serviceAccount = require("../../serviceAccountKey.json"); // Ajuste o caminho se necessário

// Inicializa o Firebase Admin apenas se ainda não foi inicializado
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // 1. Verifica se o header existe e começa com "Bearer "
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Token não fornecido ou formato inválido.",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);

    req.user = decodedToken;

    next();
  } catch (error) {
    console.error("Erro na validação do token Firebase:", error);
    return res.status(403).json({
      success: false,
      message: "Token inválido ou expirado.",
    });
  }
};
