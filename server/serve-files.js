const fs = require("fs");
const { IncomingMessage, ServerResponse } = require("http");

/**
 * 
 * @param {string} file 
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 */

function serve (file, req, res) {

    if (file.includes(".html") || file.includes(".htm")) {

        if (fs.existsSync(file)) {

            console.log(`the file ${file} was existed.`);

            const f = fs.readFileSync(file, "utf8");

            console.log("---HTML---");

            console.log(f);

            const headers = {

                "Content-Type" : "text/html"

            }

            res.writeHead(200, headers);

            res.write(f);

            res.end();

        } else {

            console.log(`the file ${file} was NOT existed!`);

        }

    } else if (file.includes(".css")) {

        if (fs.existsSync(file)) {

            console.log(`the file ${file} was existed.`);

            const f = fs.readFileSync(file, "utf-8");

            console.log("---CSS---");

            console.log(f);

            const headers = {

                "Content-Type" : "text/css"

            }

            res.writeHead(200, headers);

            res.write(f)

            res.end();

        }

    }

}


module.exports = {serve}