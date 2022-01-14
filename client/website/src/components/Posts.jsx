import React, {lazy, Suspense} from "react"
const Post = lazy(() => import("./components/Post.jsx"))
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