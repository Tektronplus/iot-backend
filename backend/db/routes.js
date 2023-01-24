import express from "express";
import cors from "cors"
import { Message as messageModel } from "./model.js";

const app = express();
app.use(cors())
app.get("/message", async (request, response) => {
  const message = await messageModel.find().sort({_id:-1}).limit(50);

  try {
    response.send(message);
  } catch (error) {
    response.status(500).send(error);
  }
});

async function saveMessage(messageObj) {
  const message = new messageModel(messageObj);
  
  try {
    await message.save();
    console.log("Save!")
  } catch (error) {
    console.log(error);
  }
}

export { app, saveMessage };