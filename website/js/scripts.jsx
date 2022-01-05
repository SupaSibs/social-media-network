"use strict";
//fetch to get a JSON file
fetch("data/posts.json")
.then(response => response.json())
.then(data => postsData = JSON.parse(data))
.then(() => console.log(postsData));
fetch("data/users.json")
.then(response => response.json())
.then(data => usersData = JSON.parse(data))
.then(() => console.log(usersData))
const posts = postsData;
const users = usersData;
//(will soon) handle a post using a function
posts.forEach(handlePostData);
function handlePostData(post, index, data, users = usersData) {

}
