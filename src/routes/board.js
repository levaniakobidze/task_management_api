import express from "express";
import { getBoards, createBoard } from "../controllers/board.js";
const router = express.Router();

router.get("/", getBoards);
router.post("/", createBoard);

export default router;
