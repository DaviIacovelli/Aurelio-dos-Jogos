import { Router } from "express";
import { createGame, getAllGames } from "../controllers/GameController.js";
import { verifyFirebaseToken } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", getAllGames);
router.post("/", verifyFirebaseToken, createGame);

export default router;
