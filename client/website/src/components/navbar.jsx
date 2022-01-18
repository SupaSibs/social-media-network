import React from "react"
export default function Navbar(props) {
return (
<nav className="navbar">
 <span><a href="posts">Posts</a></span>
 <span><a href="friends">Friends</a></span>  
 <span><a href="dashboard">Dashboard</a></span>  
 <span><input type="text" className="Search" placeholder="search" /> </span>
 <span><a href="profile">Profile</a></span> 
 <span><a href="settings">Settings</a></span>  
 {/* <span><img src={props.image} alt="Profile"/></span>       */}
</nav>

)
}
