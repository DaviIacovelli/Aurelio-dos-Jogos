import { openDb } from "../database/db.js";

export const getAllGames = async (req, res) => {
  const { search, page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;
  const db = await openDb();

  // Exemplo de query com busca básica
  let query = "SELECT * FROM games";
  const params = [];

  if (search) {
    query += " WHERE titulo LIKE ?";
    params.push(`%${search}%`);
  }

  query += ` LIMIT ? OFFSET ?`;
  params.push(limit, offset);

  const games = await db.all(query, params);

  // Nota: Para trazer as categorias/plataformas, você precisaria de um JOIN
  // ou uma segunda query, pois o SQL não guarda arrays nativamente como JS.

  res.json({ success: true, data: games });
};

export const createGame = async (req, res) => {
  // Lógica de inserção...
  const { titulo, description, imageUrl, release } = req.body;
  const db = await openDb();

  const result = await db.run(
    `INSERT INTO games (titulo, description, image_url, release_date) VALUES (?, ?, ?, ?)`,
    [titulo, description, imageUrl, release],
  );

  res.status(201).json({ id: result.lastID, ...req.body });
};
