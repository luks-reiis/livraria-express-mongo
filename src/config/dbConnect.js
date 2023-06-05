import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://lucao:lucao@alura.y5g4ji9.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
