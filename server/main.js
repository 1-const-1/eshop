const http = require("http");
const { serve } = require("./serve-files");
const path = require("path");

const port = 4000;

const server = http.createServer((req, res) => {

    const url = req.url;

    console.log(url);

    serve(path.join(__dirname, "../public" , url), req, res);

    res.end();

});

server.listen(port, () => {

    console.log(`The server is running in the port: ${port}`);

});

