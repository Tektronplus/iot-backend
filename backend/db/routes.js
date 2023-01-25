import express from "express";
import cors from "cors";
import { Message as messageModel, Alarm as alarmModel } from "./model.js";

const app = express();

app.use(cors());

// GET endpoints
app.get("/messages", async (request, response) => {
  const message = await messageModel.find().sort({ _id: -1 }).limit(50);

  try {
    response.send(message);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/alarms", async (request, response) => {
  const alarm = await alarmModel.find().sort({ _id: -1 }).limit(100);

  try {
    response.send(alarm);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Funcions
async function saveMessage(messageObj) {
  const message = new messageModel(messageObj);

  if (messageObj.value > 20) {
    saveAlarm({ timestamp: messageObj.timestamp, isAlarm: true });
  } else {
    saveAlarm({ timestamp: messageObj.timestamp, isAlarm: false });
  }

  try {
    await message.save();
    console.log("Message saved!");
  } catch (error) {
    console.log(error);
  }
}
async function saveAlarm(alarmObj) {
  const alarm = new alarmModel(alarmObj);

  try {
    await alarm.save();
    console.log("Alarm saved!");
  } catch (error) {
    console.log(error);
  }
}

export { app, saveMessage };
