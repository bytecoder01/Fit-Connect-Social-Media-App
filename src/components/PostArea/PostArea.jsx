import React, { useEffect } from 'react';
import './PostArea.css';

import Postfiles from '../Postfiles/Postfiles';
import {useDispatch, useSelector} from 'react-redux'
import {getTimelinePosts} from './../../actions/PostAction.js'
import { useParams } from "react-router-dom";
function PostArea() {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    

    let {posts, loading} = useSelector((state)=>state.postReducer)
    const params = useParams()
useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
},[])

if(!posts) return "No Posts";
if(params.id) posts = posts.filter((post) =>post.userId === params.id)
    return (
        <div className="postarea">
            {loading?  <div style={{ color: 'white' }}>
        Loading your feed, one moment...
    </div>
            :posts.map((post, id) => (
                <Postfiles data={post} key={id} />
            ))}
        </div>
     );
}

export default PostArea;

