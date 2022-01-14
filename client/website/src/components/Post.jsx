import React from "react";
import axios from "axios";

export default class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          /* commented for testing postData: axios.get("placeholder")
            .then(res => this.state.postData = res.post)
            .catch(err => console.error(err)) */
        }
    }
    
        render() {
            return(
                <section className="postSection">
                <span className="body">
                {this.state.postData.textBody}
                </span>
                <span className="actions">
                <span>
                <img className="like" src="/client/website/src/images/like" alt="" />
                Like
                </span>
                <span>
                <img className="dislike" src="/client/website/src/images/dislike" alt=""/>
                Dislike
                </span>
                <select name="dropdown" className="dropdown">
                <option value="happy"><img className="happy" src="/client/website/src/imges/happy"  alt=""/> Happy</option>
                <option value="sad"><img className="sad" src="/client/website/src/imges/happy"  alt=""/> Sad</option>
                <option value="angry"><img className="angry" src="/client/website/src/imges/happy"  alt=""/> Angry</option>
                </select>
                </span>
                <span className="comment">
                <input className="input" placeholder="Type your comment here"/>
                </span>
                </section>
            )
            }
    }