import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
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
    return (_jsx("nav", Object.assign({ className: "navbar" }, { children: _jsxs("ul", { children: [_jsx("li", Object.assign({ className: "li" }, { children: _jsx(Link, Object.assign({ to: "/" }, { children: "Social Website" }), void 0) }), void 0), _jsx("li", Object.assign({ className: "li" }, { children: _jsx(Link, Object.assign({ to: "/register" }, { children: "Register" }), void 0) }), void 0), _jsx("li", Object.assign({ className: "li" }, { children: _jsx(Link, Object.assign({ to: "/login" }, { children: "Login" }), void 0) }), void 0)] }, void 0) }), void 0));
};
export default Navbar;
