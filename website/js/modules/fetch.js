"use strict";
//Fetches posts
fetch("../../data/posts.json")
.then(response => response.json())                                                                                                  .then(data => postsData = JSON.parse(data))
.then(() => console.log(postsData));
//Fetches users
fetch("../../data/users.json")
.then(response => response.json())
.then(data => usersData = JSON.parse(data))
.then(() => console.log(usersData));


export {postsData, usersData}
