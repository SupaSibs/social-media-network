import ReactDOM from "react-dom"
import React, {lazy, Suspense} from "react"
import axios from "axios";
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Posts from "./components/Posts"
import "./css/styles.css"

export default class PostsSite extends React.Component {
constructor(props) {
    super(props);
this.state = {
    /* commented out for testing user: axios.get("/api/auth")
    .then(res => this.state.user = res.user)
    .catch(err => console.error(err)),
    img: this.state.user.profile.img
    */
}
}
render() {
return(
<div>
<Navbar /* image={ this.state.img } *//>
<Sidebar>
    <span className="filterBar">
     
    </span>
</Sidebar>
<Posts />
</div>
)
}
    }

ReactDOM.render(<PostsSite />, document.getElementById("root"));
