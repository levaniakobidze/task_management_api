import Board from "../models/board.js";

// Get ALL BOARDS

export const getBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    if (boards.length === 0) {
      return res.status(404).json({ message: "No board found" });
    }
    console.log(boards);
    return res.status(200).json(boards);
  } catch (error) {
    return res.status(501).json({ message: "there is an error on the server" });
  }
};

// CREATE BOARD

export const createBoard = async (req, res) => {
  const newBoard = req.body;
  try {
    const create = new Board(newBoard);
    await create.save();
    return res.status(200).json({ message: "new board successfully created" });
  } catch (error) {
    return res.status(501).json({ message: "there is an error on the server" });
  }
};
