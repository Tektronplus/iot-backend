import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  timestamp: {
    type: Number,
  },
  hum: {
    type: Number,
  },
  value: {
    type: Number,
  },
  free_ram: {
    type: Number,
  },
  total_ram: {
    type: Number,
  },
  sensorCode: {
    type: String,
  },
});

const Message = mongoose.model("Message", MessageSchema);
export { Message };
