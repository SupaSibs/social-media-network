"use strict";
import {postsData, usersData} from "modules/fetch.js";
//make worker
let retriever = new Worker(workers/retriever.js)
//variables for DOM handling and data hansling
const posts = postsData;
const users = usersData;
const elements = "placeholder";
//document name
const documentName = window.location.pathname.split("/").pop();
//checks if document name is index.html (where the posts will be) to check whether or not to load the posts or not
if (documentName == "index.html") {
window.onload(retriever.postMessage(posts, users, elements));
}

