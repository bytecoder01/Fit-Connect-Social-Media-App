import React from 'react'
import './MyProfile.css'
import Left from '../Left-side/Left'

import Post from '../Post/Post'
import Right from '../Right-side/Right'
import ProfileCard from '../ProfileCard/ProfileCard'
function MyProfile() {
    return (
        <div className='my-profile'>
            <Left/>
            
            <div className="profile-center">
                <ProfileCard/>
                <Post/>
                
            </div>
            <Right/>
          
        </div>
    )
}

export default MyProfile
