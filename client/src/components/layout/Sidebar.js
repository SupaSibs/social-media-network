import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
const hamburgerURL = require("./../../images/hamburger.svg");
//function comp
export default function Sidebar(props) {
    return (_jsxs(Fragment, { children: [_jsx("img", { src: hamburgerURL, onClick: openMenu, alt: "Open menu", className: "hamburger" }, void 0), _jsx("aside", { id: "aside" }, void 0)] }, void 0));
}
function openMenu() {
    document.getElementById("aside").style.display = document.getElementById("aside").style.display === "flex" ? "none" : "flex";
    document.getElementById("main").style.width = document.getElementById("aside").style.display === "none" ? "98vw" : "72vw";
}
