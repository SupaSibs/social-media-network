import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./store";
//Components
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./styles/index.css";
function App() {
    return (_jsx(Provider, Object.assign({ store: store }, { children: _jsx(Router, { children: _jsxs(Fragment, { children: [_jsx(Navbar, {}, void 0), _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(Landing, {}, void 0) }, void 0) }, void 0), _jsx("section", Object.assign({ className: "container" }, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(Login, {}, void 0) }, void 0), _jsx(Route, { path: "/register", element: _jsx(Register, {}, void 0) }, void 0)] }, void 0) }), void 0)] }, void 0) }, void 0) }), void 0));
}
export default App;
