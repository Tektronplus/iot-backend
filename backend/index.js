import { checkMasterCertificate } from "./iot/certManager.js";
import { initDevice } from "./iot/index.js";
import { initMongoDB } from "./db/mongodb.js";
import { fakeMessageEmitor } from "./iot/fake-iot.js";
import { app as Router } from "./db/routes.js";

import express from "express";

const app = express();

// downloading remote cert to connect
await checkMasterCertificate();

// connect to mqtt queue
await initMongoDB();

/*
    Use fakeMessageEmitor() to simulate the logs of ESP32.
    When there is a real sensor on AWS Iot use initDevice.
*/
//await initDevice();
fakeMessageEmitor();

app.use(Router);
app.listen(9000, () => {
  console.log("Server listening on port 9000");
});
