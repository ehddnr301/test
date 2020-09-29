import express from "express";
import mongoose from "mongoose";
import path from "path";

const app = express();

mongoose.connect("mongodb://localhost:27017/cap", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:4000`);

app.listen(4000, handleListening);

app.get("/", (req, res) => res.send("hi"));
app.get("/fromRaspberry", (req, res) => {
  res.status(200).json("Raspberry success");
});
app.get("/fromApp", (req, res) => {
  res.status(200).json("fromApp success");
});
