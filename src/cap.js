import mongoose from "mongoose";


const CapSchema= new mongoose.Schema({
  time: String,
  isHelmet:Boolean,
  createdAt: {
    default: Date.now,
    type: Date,
  },
});

const model = mongoose.model("Cap", CapSchema);

export default model;
