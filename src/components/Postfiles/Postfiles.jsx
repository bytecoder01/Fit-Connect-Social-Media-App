import React, { useState } from 'react'
import './Postfiles.css'
import Heart from './../../img/hearttt.png'
import Comment from './../../img/comment.png'
import notlike from './../../img/=white.png'
import Share from './../../img/share.png'
import { likePost } from "./../../Api/PostRequest";
import { useDispatch, useSelector } from 'react-redux'

const Postfiles = ({ data }) => {
  
    const { user } = useSelector((state) => state.authReducer.authData);
    const [Liked, setLiked] = useState(data.likes.includes(user._id));
    const [Likes, setLikes] = useState(data.likes.length);
    
    const handleLike = () => {
        setLiked((prev) => !prev);
        likePost(data._id, user._id);
        Liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
    };
   
  console.log(data)
   
    return (
        <div className="postfiles">
            <img
                className='post-image'
                src={data.image ? `http://localhost:5000/images/`  + data.image : ""}
                alt=""
            />
            <div className="reactions">
                <img
                    src={Liked ? Heart : notlike}
                    alt=""
                    className='heart'
                    style={{ cursor: "pointer" }}
                    onClick={handleLike}
                />
                <img src={Comment} alt="" className='heart' />
                <img src={Share} alt="" className='heart' />
            </div>
            <span className='likes-text'>{Likes} Likes</span>
            <div className="details">
                <span>
                    <b>
                    {data.firstname}  {data.lastname} :
                    </b>
                </span>
                <span> {data.desc} </span>
            </div>
        </div>
    )
}

export default Postfiles;
