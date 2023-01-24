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

const AlarmSchema = new mongoose.Schema({
  timestamp: {
    type: Number,
  },
  isAlarm: {
    type: Boolean,
  }
})

const Message = mongoose.model("Message", MessageSchema);
const Alarm = mongoose.model("Alarm", AlarmSchema)
export { Message, Alarm };
