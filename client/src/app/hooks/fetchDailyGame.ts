import { appCheck } from "@/services/firebaseAPI";
import { getToken } from "firebase/app-check";
export const fetchDailyGame = async () => {
  let appCheckToken = "";

  if (appCheck) {
    try {
      const result = await getToken(appCheck);
      appCheckToken = result.token;
    } catch (error) {
      console.error("Erro ao obter o token do App Check:", error);
    }
  }

  try {
    const response = await fetch(
      "https://aurelio-dos-jogos.onrender.com/api/games",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${appCheckToken}`,
        },
      },
    );
    const data = await response.json();

    const today = new Date().toDateString();

    // Pega o jogo armazenado
    const storedData =
      typeof window !== "undefined" ? localStorage.getItem("dailyGame") : null;
    let previousIndex = null;

    if (storedData) {
      const { index, date } = JSON.parse(storedData);
      if (date === today) {
        // Mesmo dia, retorna o mesmo jogo
        return data[index];
      }
      // Dia diferente, armazena o índice anterior
      previousIndex = index;
    }

    // Seleciona um jogo aleatório diferente do anterior
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * data.length);
    } while (randomIndex === previousIndex && data.length > 1);

    // Armazena o jogo do dia
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "dailyGame",
        JSON.stringify({
          index: randomIndex,
          date: today,
        }),
      );
    }

    return data[randomIndex];
  } catch (error) {
    console.log(error);
  }
};
