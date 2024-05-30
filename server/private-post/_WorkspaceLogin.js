"use strict";

const {IncomingMessage, ServerResponse} = require("http");
const https = require("https");
const { FormParser } = require("../../modules/form-parser");

/**
 * 
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 */

function WorkspaceLogin (req, res) {

    let body = Buffer.from([]);

    req.on("data", chunk => {

        body = Buffer.concat([body, chunk]);

    });

    req.on("end", () => {

        const form = FormParser(body);

        form.show();

        const agent = new https.Agent({rejectUnauthorized:false});

        const options = {

            hostname: "192.168.43.124",

            port: 4002,
            
            path: "/auth",

            method: "post",

            headers: {

                "Content-Type" : "application/json",

            },

            agent: agent

        };

        const search_request = https.request(options, (res) => {

            let incoming_body = Buffer.from([]);

            res.on("data", chunk => {

                console.log("chunk: ", chunk);

                incoming_body = Buffer.concat([incoming_body, chunk]);

            });

            res.on("end", () => {

                console.log(incoming_body.toString());

            });

        });

        search_request.write(JSON.stringify(form));

        search_request.end();

    });

    res.writeHead(200, {

        "Content-Type" : "text/plain"

    });

    res.end("the data was gotten!");

}

module.exports = {WorkspaceLogin};