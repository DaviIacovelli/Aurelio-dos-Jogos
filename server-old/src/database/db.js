// server/src/database/db.js
import { open } from "sqlite";
import sqlite3 from "sqlite3";

// Abre conexão com o banco (cria o arquivo se não existir)
export const openDb = async () => {
  return open({
    filename: "./data/database.sqlite", // Caminho do arquivo
    driver: sqlite3.Database,
  });
};

// Função para criar as tabelas iniciais
export const initDb = async () => {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      email TEXT UNIQUE,
      password TEXT,
      role TEXT DEFAULT 'user',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS games (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      description TEXT,
      image_url TEXT,
      release_date TEXT,
      created_by INTEGER,
      FOREIGN KEY(created_by) REFERENCES users(id)
    );
    
    -- Tabela auxiliar para lidar com Arrays (Platform/Categories) no SQL
    CREATE TABLE IF NOT EXISTS game_platforms (
      game_id INTEGER,
      platform TEXT,
      FOREIGN KEY(game_id) REFERENCES games(id)
    );
  `);
  console.log("Banco de dados inicializado!");
};
