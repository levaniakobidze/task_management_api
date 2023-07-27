import { Schema, model } from "mongoose";

const boardSchema = new Schema({
  board_name: {
    type: String,
    required: true,
  },
});

const Board = model("board", boardSchema);
export default Board;
