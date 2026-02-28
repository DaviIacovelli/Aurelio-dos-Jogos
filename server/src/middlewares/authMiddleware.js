import dotenv from "dotenv";
import admin from "firebase-admin";

dotenv.config();

// Configuração das credenciais do Firebase Admin
const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
    : undefined,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
};

// Inicializa o Firebase Admin apenas se ainda não foi inicializado
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

/**
 * Middleware para validar o App Check Token
 * Substitui a validação de ID Token de usuário para permitir acesso deslogado.
 */
export const verifyAppCheckToken = async (req, res, next) => {
  // Captura o token enviado pelo front-end no header customizado
  const appCheckToken = req.header("X-Firebase-AppCheck");

  if (!appCheckToken) {
    return res.status(401).json({
      success: false,
      message: "Acesso negado: App Check token não fornecido.",
    });
  }

  try {
    // Verifica se o token de atestação do app é válido
    await admin.appCheck().verifyToken(appCheckToken);

    // Se for válido, o Express segue para a rota principal
    next();
  } catch (error) {
    console.error("Erro na validação do App Check:", error);
    return res.status(403).json({
      success: false,
      message: "Acesso negado: Origem não autorizada ou token inválido.",
    });
  }
};
