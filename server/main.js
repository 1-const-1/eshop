"use strict";

const https = require("https");
const path = require("path");
const fs = require("fs");
const { serve } = require("./serve-files");
const { PostRouter } = require("./private-post/post-router");

const HTTPSport = 4000;

const agent = new https.Agent({rejectUnauthorized : false});

const options = {

    cert: fs.readFileSync(path.join(__dirname, "../ssl-cer/server.cert.pem")),

    ca: fs.readFileSync(path.join(__dirname, "../ssl-cer/ca.cert.pem")),

    key: fs.readFileSync(path.join(__dirname, "../ssl-cer/server.key.pem")),

    agent: agent,

};

const HTTPSserver = https.createServer( options, (req, res) => {

    const method = req.method.toLowerCase();

    const url = req.url;

    console.log(url, method);

    if (method === "get") {

        serve(path.join(__dirname, "../public" , url), req, res);

        serve(path.join(__dirname, "../private", url), req, res);

    } else if (method === "post") {

        PostRouter(url, req, res);

    }

    res.end();

});

HTTPSserver.listen(HTTPSport, () => {

    console.log(`The HTTPS server is running on the port: ${HTTPSport}`);

});

