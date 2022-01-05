"use strict";
//Fetches posts
fetch("../../data/posts.json")
.then(response => response.json())
.then(data => postsData = JSON.parse(data))
.then(() => console.log(postsData);

//Fetches users
fetch("../../data/users.json")
.then(response => response.json())
.then(data => usersData = JSON.parse(data))
.then(() => console.log(usersData))
//variables for DOM handling and data hansling
const posts = postsData;
const users = usersData;
//(will soon) handle a post using a function
posts.forEach(handlePostData);
function handlePostData(post, index, data, users = usersData) {

}
