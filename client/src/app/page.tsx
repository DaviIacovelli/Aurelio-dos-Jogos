"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "./_components/container";
import { fetchDailyGame } from "./hooks/fetchDailyGame";
import { Game } from "./interfaces/Game";

export default function Page() {
  const [dailyGame, setDailyGame] = useState<Game | null>(null);

  useEffect(() => {
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col bg-white rounded-lg shadow">
              <div className="flex-shrink-0">
                <Image
                  className="w-full h-48 object-cover"
                  src={dailyGame.imageUrl}
                  alt={dailyGame.titulo}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {dailyGame.categories}
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {dailyGame.titulo}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {dailyGame.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10 text-lg font-semibold ">
            Carregando jogo do dia...
          </p>
        )}
      </Container>
    </main>
  );
}
