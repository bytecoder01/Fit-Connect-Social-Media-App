import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import cover from './../../img/tense-handsome-guy-with-good-body-workout-morning-stadium-he-wears-sport-clothes-listening-music-through-headphones-push-ups-with-one-hand.jpg';
import profile from './../../img/image1.jpg';
import pencil from './../../img/draw.png';
import './Leftcard.css';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../Api/UserRequest.js";
import { logout } from "../../actions/AuthAction.js";

import Update from '../Update/Update'; // Import Update component

function Leftcard() {
  const dispatch = useDispatch()
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});

  const { user } = useSelector((state) => state.authReducer.authData);
  const navigate = useNavigate();
  const location = useLocation();
  const serverPublic = `http://localhost:5000/images/`;

  const [modalOpened, setModalOpened] = useState(false); // State to manage modal visibility

  // Check if the current path is the profile page
  const isProfilePage = location.pathname === `/profile/${user._id}`;
console.log(user,"user hei ye");
  const handleProfileClick = () => {
    navigate(`/profile/${user._id}`);
    
  };

  const handleLogout = () => {
    dispatch(logout())
  };
  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
        
     
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
      
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);
  
  return (
    <div className="leftcard">
      <div className="card">
        <div className="bg"></div>
        <div className="blob-t"></div>
        <div className="content">
          {isProfilePage ? (
            <div className="infocard">
              <div className="infoHead">
                <h4>Your Info</h4>
                <div className='pencil-container' onClick={() => setModalOpened(true)}>
                  <img src={pencil} alt="" className='pencil' />
                </div>
              </div>
              <div className="all-info">
                <div className="info-profile-card">
                  <span>
                    <b>Status: </b>
                  </span>
                  <span>{user.relationship || 'Not specified'}</span>
                </div>
                <div className="info-profile-card">
                  <span>
                    <b>Lives In: </b>
                  </span>
                  <span>{user.livesIn || 'Not specified'}</span>
                </div>
                <div className="info-profile-card">
                  <span>
                    <b>Profession: </b>
                  </span>
                  <span>{user.worksAt || 'Not specified'}</span>
                </div>
              </div>
              <div className="info-btn-container">
                <button className='info-btn' onClick={handleLogout}>LOG OUT</button>
              </div>
            </div>
          ) : (
            <>
              <div className="profile-images">
              <img src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "cover.jpg"} alt="" />
                <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "meow.jpg"} alt="" />
              </div>
              <div className="profile-name">
                <span>{user.firstname} {user.lastname}</span>
                <span>{user.worksAt || "Write about your occupation!"}</span>
              </div>
              <div className="follow-status">
                <hr />
                <div>
                  <div className="followers">
                    <span>{user.followers.length}</span>
                    <span>followers</span>
                  </div>
                  <div className="line"></div>
                  <div className="followers">
                    <span>{user.following.length}</span>
                    <span>following</span>
                  </div>
                </div>
                <hr />
              </div>
              <div className='myprofile' onClick={handleProfileClick}>
                <span>My Profile</span>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Include the Update component and pass necessary props */}
      <Update modalOpened={modalOpened} setModalOpened={setModalOpened} data={user} />
    </div>
  );
}

export default Leftcard;
