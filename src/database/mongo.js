import mongoose from "mongoose";

export const connect = () => {
  const url = process.env.MONGO_URL;

  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(url);
    console.log("Database running...");
  } catch (err) {
    console.log(err);
  }
};
