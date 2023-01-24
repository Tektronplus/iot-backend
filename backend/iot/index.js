import { secretMasterName, host } from '../config.js';
import awsIot from 'aws-iot-device-sdk';
import AWS from 'aws-sdk';
import { saveMessage } from '../db/routes.js';

import * as os from 'os';

// setting aws region to connect
AWS.config.update({ region: 'eu-central-1' });

const iot = new AWS.Iot();

let device;

export function initDevice() {
    device = awsIot.device({
        keyPath: `${os.tmpdir()}/${secretMasterName}.private.pem.key`,
        certPath: `${os.tmpdir()}/${secretMasterName}.certificate.pem.crt`,
        caPath: `${os.tmpdir()}/AmazonRootCA1.pem`,
        host: host
    });


    device.on('connect', function () {
        console.info('system connected to aws iot...');
        device.subscribe('machines');
        console.info('mqtt parser ready...');
    });

    device.on('error', function (e) {
        console.info({ e });
    });

    device.on('message', function (topic, payload) {
        console.info('message received');
        parser(payload.toString());
    });
}

function parser(message) {
    let objectMessage;
    try {
        objectMessage = JSON.parse(message);
        saveMessage(objectMessage);
    } catch (err) {
        console.error(`error parsing message: ${message}`);
    }

    console.log(objectMessage);
}
