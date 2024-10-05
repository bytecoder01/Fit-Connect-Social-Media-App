import React from 'react'
import './Post.css'
import Share from '../Share/Share'
import PostArea from '../PostArea/PostArea'
function Post() {
    return (
      <div className="post">
       <Share/>
       <PostArea/>
      </div>
    )
}

export default Post
