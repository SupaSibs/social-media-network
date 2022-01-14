import ReactDOM from "react-dom"
import React, {lazy, Suspense} from "react"
import axios from "axios";
const Sidebar = lazy(() => import("./components/Sidebar"))
const Navbar= lazy(() => import("./components/Navbar"));

export default class Posts extends React.Component {
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
<Navbar image={ this.state.img }/>
<Sidebar>
    <span className="filterBar">
     
    </span>
</Sidebar>
<Posts />
</div>
)
}
    }

ReactDOM.render(<Posts />, document.getElementById("root"));