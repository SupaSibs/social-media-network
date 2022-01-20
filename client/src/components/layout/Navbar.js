import React from "react";
import { Link } from "react-router-dom";
import axios from "axios"
const Navbar = props => {
	// If logged in
  //NOT YET IMPLEMENTED, JUST A TEST
  /*
  return this.props.loggedIn === true ? (
    <nav className="navbar">
     <ul>
<li>
        <Link to="/">Posts</Link>
</li>
     
    <li>
    <Link to="/friends">Friends</Link>
    </li>
    <li>
<Link to="/dashboard">Dashboard</Link>
    </li>
    <li>
    <input className="search" type="text" placeholder="Search" />
    </li>
    <li>
    <Link to="/profile">Profile</Link>
    </li>
    <li>
    <Link to="/settings">Settings</Link>
    </li>
    </ul>
    </nav>
  ) : bottom code for if not logged in
  */


  // If not Logged in
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">Social Website</Link>
      </h1>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
