import React, {useState, useEffect} from "react"
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar"
import axios from "axios";
export default function Posts(props) {
this.props = { signedUp: useEffect(() => axios.get("/api/auth"), [] ) }
return(
<div>
<Navbar/>
<Sidebar>
</Sidebar>
</div>
)

    }

