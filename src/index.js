import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
import { connect } from "./database/mongo.js";
import dotenv from "dotenv";
import boardRoutes from "./routes/board.js";

dotenv.config();
connect();

const app = express();
app.get("/", (req, res) => {
  res.send("Running ... ... ... ");
});

app.use(express.json());

// Routes
app.use("/api/v1/boards", boardRoutes);

app.listen(3000, () => console.log("App running..."));
