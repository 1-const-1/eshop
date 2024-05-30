"use strict";

const { WorkspaceLogin } = require("./_WorkspaceLogin.js");

function PostRouter (url, req, res) {

    if (url === "/login/index.html/auth") {

        WorkspaceLogin(req, res);

    }

}

module.exports = {PostRouter};