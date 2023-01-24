import { saveMessage } from "../db/routes.js";
function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
}

function createFakeMessage() {
  let fakeMessage = {
    timestamp: Date.now(),
    hum: getRandomFloat(35, 45, 6),
    value: getRandomFloat(19, 21, 6),
    free_ram: 159020,
    total_ram: 236996,
    sensorCode: "esp32_9C9D1C",
  };
  return fakeMessage;
}

export function fakeMessageEmitor() {
  setInterval(async () => {
    let message = createFakeMessage();
    saveMessage(message);
    console.log(message);
  }, 5000);
}

/*
Example of Message
{
  timestamp: 1674475785406,
  hum: 54.599998,
  value: 20.299999,
  free_ram: 159020,
  total_ram: 236996,
  sensorCode: 'esp32_9C9D1C'
}
*/
