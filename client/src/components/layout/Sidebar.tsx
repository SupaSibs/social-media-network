import React, {Fragment} from "react"
const hamburger = require("../../images/hamburger.svg") as string;

//function comp
export default function Sidebar(props) {
return (
<Fragment>
<img src={hamburger} onClick={openMenu} alt="Open menu" className="hamburger" />
<aside id="aside">

</aside>
</Fragment>
);
}

function openMenu() {
    document.getElementById("aside").style.display = document.getElementById("aside").style.display === "flex" ? "none" : "flex"
    document.getElementById("main").style.width = document.getElementById("aside").style.display === "none" ? "98vw" : "72vw"
}

