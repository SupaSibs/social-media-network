"use strict";
import {postsData, usersData} from "modules/fetch.js";
//make worker
let retriever = new Worker(workers/retriever.js)
//variables for DOM handling and data hansling
const posts = postsData;
const users = usersData;
const elements = "placeholder";
const documentName = window.location.pathname.split("/").pop();
if (documentName == "index.html") {
window.onload(retriever.postMessage([posts, users], elements));
}

