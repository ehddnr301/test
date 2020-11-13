import "@babel/polyfill";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Cap from "./cap";

const app = express();

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
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
app.get("/test", async (req, res) => {
  const {
    query: { date },
  } = req;
  // await Cap.findOne({
  //   createdAt:
  // })
  if (date) {
    if (date.length === 8) {
      const aa = await Cap.find({});
      const b = aa.filter((a) => {
        const getDate = JSON.stringify(a.createdAt)
          .split("T")[0]
          .substring(1)
          .split("-")
          .join("");
        if (getDate === date) {
          return getDate;
        } else {
          return null;
        }
      });
      res.status(200).json(b);
    } else {
      res.status(400).send("worng date input");
    }
  } else {
    res.status(400).send("give me date");
  }
});
app.get("/seeAllData", async (req, res) => {
  const a = await Cap.find({});

  res.status(200).json(a);
});
app.get("/helmetTrue", async (req, res) => {
  try {
    const {
      query: { password },
    } = req;
    if (password === "capston") {
      // await Cap.create({
      //   isHelmet: true,
      // });
      res.status(200).send("data created");
    } else {
      res.status(400).send("wrong password");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
app.get("/helmetFalse", async (req, res) => {
  try {
    const {
      query: { password },
    } = req;
    if (password === "capston") {
      // await Cap.create({
      //   isHelmet: false,
      // });
      res.status(200).send("data created");
    } else {
      res.status(400).send("wrong password");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
