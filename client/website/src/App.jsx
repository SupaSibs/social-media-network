import navbar from "./components/navbar";
import axios from "axios";
export default class Posts {
    constructor() {
this.props = {
signedUp: axios.get("/")
.then(res => this.props.res = res)
.catch(err => console.error(err)),
}
    }
}