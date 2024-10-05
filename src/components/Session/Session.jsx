import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../Api/UserRequest";
import './Session.css'
const Session = ({ data, currentUser, online }) => {

  const [userData, setUserData] = useState(null)
  const dispatch = useDispatch()
  const serverPublic = `http://localhost:5000/images/`;

  useEffect(()=> {

    const userId = data.members.find((id)=>id!==currentUser)
    console.log(userId)
    const getUserData = async ()=> {
      try
      {
          const {data} =await getUser(userId)
         setUserData(data)
         dispatch({type:"SAVE_USER", data:data})
      }
      catch(error)
      {
        console.log(error)
      }
    }

    getUserData();
  }, [])
  return (
    <>
      <div className="follower conversation">
        <div className="chat-profile">
          {online && <div className="online-dot"></div>}
          <img
            src={userData?.profilePicture? serverPublic+ userData.profilePicture : serverPublic + "defaultProfile.png"}
            alt="Profile"
            className="followerImage"
            style={{ width: "60px", height: "60px" , borderRadius:"50%" }}
          />
          <div className="name" style={{fontSize: '0.8rem', color: 'white' }}>
            <span style={{fontSize: '0.9rem', fontWeight: "bold" }}>{userData?.firstname} {userData?.lastname}</span>
            <span style={{color: online?"#51e200":""}}>{online? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Session;