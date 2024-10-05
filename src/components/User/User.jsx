import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { followUser, unfollowUser } from '../../actions/UserAction'
function User({person}) {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData);
    const[following,setFollowing] =useState(person.followers.includes(user._id))
    
    const serverPublic =`http://localhost:5000/images/` 
    const handleFollow = () => {
        following?
       dispatch(unfollowUser(person._id, user)):
       dispatch(followUser(person._id, user))
       setFollowing((prev)=>!prev)
    }
    return (
        <div className="follower">
        <img src={person.profilePicture? serverPublic + person.profilePicture : serverPublic + "meow.jpg"} alt="" className='f-image'/>
        <div className="name">
            <span className='first-text'>{person.firstname} {person.lastname}</span>
            <span className='second-text'>{person.username}</span>
        </div>
        <button className='followers-btn' onClick={handleFollow}>{following? "Unfollow": "Follow"}</button>
    </div>
    )
}

export default User
