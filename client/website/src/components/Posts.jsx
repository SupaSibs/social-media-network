import React, {lazy, Suspense} from "react"
import Post from "./Post"

export default function Posts(props) {
    return (
<div className="posts">
<Post />
<Post />
<Post />
<Post />
<Post />
</div>
    )
}