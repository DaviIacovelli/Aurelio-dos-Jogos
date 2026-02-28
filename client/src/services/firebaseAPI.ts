import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import {
  AppCheck,
  initializeAppCheck,
  ReCaptchaV3Provider,
} from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyBgEJCdOtr9yWlbErgag5zqcyfo5M85zzA",
  authDomain: "aurelio-dos-jogos.firebaseapp.com",
  projectId: "aurelio-dos-jogos",
  storageBucket: "aurelio-dos-jogos.firebasestorage.app",
  messagingSenderId: "798254371098",
  appId: "1:798254371098:web:3a701a841abfce1fae1ca3",
  measurementId: "G-DWRM23VW3G",
};

const app: FirebaseApp =
  getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

let appCheck: AppCheck | undefined;

if (typeof window !== "undefined") {
  appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(
      "6LfVSHosAAAAAM6hhMSg8EthMPQ2oXdy8hZ2UnyT",
    ),
    isTokenAutoRefreshEnabled: true,
  });
}

export { app, appCheck };
