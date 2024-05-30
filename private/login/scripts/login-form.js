"use strict";

const submit = document.getElementById("subbtn_#1_form");

/**
 * 
 * @param {Event} event 
 */

function submition (event) {

    event.preventDefault();

    const form = new FormData(document.querySelector("form"));

    const postID = "auth";

    const newurl = window.location.pathname + "/" + postID;

    console.log(form);

    fetch(newurl, {

        method : "post",

        body : form

    }).then(res => res.text()).then(data => console.log(data)).catch(err => console.log(err));

}

submit.onclick = submition;