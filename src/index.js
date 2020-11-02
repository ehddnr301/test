import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import Cap from "./cap"

const app = express();

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

const handleListening = () => console.log(`✅ Hi`);

app.listen(PORT, handleListening);

app.get("/", (req, res) => res.send("hi"));
app.get("/fromRaspberry", (req, res) => {
  res.status(200).json("Raspberry success");
});
app.get("/fromApp", (req, res) => {
  res.status(200).json("fromApp success");
});
app.get("/test",(req,res)=> {
  res.status(200).json('test')
})
// app.get("/makeData", async(req, res) => {
//   try{
//     const a = await Cap.create({
//       isHelmet:True,
//     })
//     res.status(200).json(a)
//   }catch{
//     res.status(400)
//   }
// })