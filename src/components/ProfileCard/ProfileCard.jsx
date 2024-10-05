import React from 'react'
import cover from './../../img/tense-handsome-guy-with-good-body-workout-morning-stadium-he-wears-sport-clothes-listening-music-through-headphones-push-ups-with-one-hand.jpg'
import profile from './../../img/image1.jpg'
import { useSelector } from 'react-redux';

import './ProfileCard.css'
function ProfileCard() {
    const { user } = useSelector((state) => state.authReducer.authData);
    const posts = useSelector((state)=>state.postReducer.posts)
    const serverPublic = `http://localhost:5000/images/`;
    return (
        <div className="leftcard-profile">

        <div className="card-profile" >
        
      <div class="bg-profile" ></div>
      <div class="blob-profile" ></div>
    
    <div className="content">
    
            <div className="profile-images-profile">
            <img src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "cover.jpg"} alt="" />
                <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "meow.jpg"} alt="" />
            </div>
            <div className="profile-name-profile" >
            <span>{user.firstname} {user.lastname}</span>
            <span>{user.worksAt ? user.worksAt : "Write about your occupation!"}</span>
            </div>
            <div className="follow-status" >
                <hr />
                <div>
                <div className="followers-profile"  >
                <span>{ posts.filter((post)=>post.userId === user._id).length}</span>
                    <span>Posts</span>
                </div>
                
                <div className="line-profile"></div>
                <div className="followers-profile">
                <span>{user.followers.length}</span>
                    <span>Followers</span>
                </div>
                
    
                <div className="second-line"></div>
                    <div className="followers-profile" >
                    <span>{user.following.length}</span>
                    
                        <span>Following</span>
                    </div>
    
                </div>
                
                <hr/>
            </div>
            
          
            </div>
           </div>
        </div>
    )
}

export default ProfileCard
