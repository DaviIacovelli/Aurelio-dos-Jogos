"use client";

import { useEffect, useState } from "react";
import Container from "./_components/container";
import { fetchDailyGame } from "./hooks/fetchDailyGame";
import { Game } from "./interfaces/Game";

export default function Page() {
  // CORREÇÃO 1: O estado agora é um único Game ou null (não um array)
  const [dailyGame, setDailyGame] = useState<Game | null>(null);

  useEffect(() => {
    // fetchDailyGame retorna apenas 1 objeto, então setDailyGame recebe esse objeto
    fetchDailyGame().then((data) => {
      if (data) setDailyGame(data);
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <Container>
        {/* Cabeçalho da Seção */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sua dose diária de <span className="text-indigo-600">Games</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Descubra o destaque selecionado para você hoje.
          </p>
        </div>

        {dailyGame ? (
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100">
                <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                  <div className="flex h-full w-full items-center justify-center bg-indigo-100 text-indigo-400">
                    <svg
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-indigo-600 rounded-full shadow-sm">
                    Jogo do Dia
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-2 text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {dailyGame.titulo}
                  </h2>

                  <p className="mb-6 text-gray-500">
                    Explore este jogo incrível. Clique abaixo para ver todos os
                    detalhes desta recomendação diária.
                  </p>

                  <div className="mt-auto">
                    <button className="w-full rounded-lg bg-indigo-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300">
                      Ver Detalhes do Jogo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-full max-w-md h-96 rounded-2xl bg-gray-200 animate-pulse"></div>
          </div>
        )}
      </Container>
    </main>
  );
}
