import { Router } from "express";
import { createGame, getAllGames } from "../controllers/GameController.js";
import { verifyAppCheckToken } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", getAllGames);
router.post("/", verifyAppCheckToken, createGame);

export default router;
