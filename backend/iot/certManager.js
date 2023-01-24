import { secretMasterName, secretMasterUrl } from '../config.js';

import * as fs from 'fs';
import * as os from 'os';
import * as http from 'https';

// this part check if the server has the master cert or download it from the remote secure source
export function checkMasterCertificate() {
    return new Promise((resolve, reject) => {
        try {
            const file = fs.readFileSync(`${os.tmpdir()}/${secretMasterName}.pem.crt`);
            resolve();
        } catch (err) {
            const finishedActions = [];

            const cert = fs.createWriteStream(`${os.tmpdir()}/${secretMasterName}.certificate.pem.crt`);
            const privateKey = fs.createWriteStream(`${os.tmpdir()}/${secretMasterName}.private.pem.key`);
            const amazonRoot = fs.createWriteStream(`${os.tmpdir()}/AmazonRootCA1.pem`)

            http.get(`${secretMasterUrl}/${secretMasterName}.certificate.pem.crt`, function (response) {
                response.pipe(cert);
            });

            http.get(`${secretMasterUrl}/${secretMasterName}.private.pem.key`, function (response) {
                response.pipe(privateKey);
            });

            http.get(`${secretMasterUrl}/AmazonRootCA1.pem`, function (response) {
                response.pipe(amazonRoot);
            });

            cert.on('finish', function () {
                console.log('finish download remote cert')
                finishedActions.push(true)

                if (finishedActions.length === 3) {
                    resolve();
                }
            });

            cert.on('error', function () {
                reject();
            });

            amazonRoot.on('finish', function () {
                console.log('finish download amazon cert')
                finishedActions.push(true)

                if (finishedActions.length === 3) {
                    resolve();
                }
            });

            amazonRoot.on('error', function () {
                reject();
            });

            privateKey.on('finish', function () {
                console.log('finish download private key')
                finishedActions.push(true)

                if (finishedActions.length === 3) {
                    resolve();
                }
            });

            privateKey.on('error', function () {
                reject();
            });
        }
    });
}

