import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Home from './../../img/home.png';
import gear from './../../img/settings.png';
import Ring from './../../img/ringgg.png';
import chat from './../../img/22.png';
import "./Chat.css";
import { useEffect } from "react";
import { userChats } from "../../Api/ChatRequest";
import { useDispatch, useSelector } from "react-redux";
import {io} from 'socket.io-client'
import Left from "../Left-side/Left";
import Session from "../Session/Session";
import ChatArea from "../ChatArea/ChatArea";

const Chat = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
      navigate('/');
  };
  const handleChatClick = () => {
      navigate('/chat');
  };
  const dispatch = useDispatch();
  const socket = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        
        console.log(data)
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage!==null) {
      socket.current.emit("send-message", sendMessage);}
  }, [sendMessage]);


  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    }

    );
  }, []);


  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
      <div className="searchbar-left-chat">
           
           
           <div className="input-container">
 <input type="text" name="text" className="input" placeholder="search..." />
 <span className="icon">
   <svg
     width="19px"
     height="19px"
     viewBox="0 0 24 24"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
   >
     <g id="SVGRepo_bgCarrier" strokeWidth={0} />
     <g
       id="SVGRepo_tracerCarrier"
       strokeLinecap="round"
       strokeLinejoin="round"
     />
     <g id="SVGRepo_iconCarrier">
       {" "}
       <path
         opacity={1}
         d="M14 5H20"
         stroke="#000"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
       />{" "}
       <path
         opacity={1}
         d="M14 8H17"
         stroke="#000"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
       />{" "}
       <path
         d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
         stroke="#000"
         strokeWidth="2.5"
         strokeLinecap="round"
         strokeLinejoin="round"
       />{" "}
       <path
         opacity={1}
         d="M22 22L20 20"
         stroke="#000"
         strokeWidth="3.5"
         strokeLinecap="round"
         strokeLinejoin="round"
       />{" "}
     </g>
   </svg>
 </span>
</div>


           </div>
        <div className="Chat-container">
          <h2 style={{color:"white", fontSize:"1.8rem"}}>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div
            
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <Session
                  data={chat}
                  currentUser={user._id}
                  online={checkOnlineStatus(chat)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>


<div className="icons-cont">

 <div className="icons">
 <img src={Home} alt="Home" onClick={handleHomeClick} style={{ cursor: 'pointer' }} />
                <img src={chat} alt="chat"
                onClick={handleChatClick}  style={{ cursor: 'pointer' }}/>
                <img src={Ring} alt="Ring" />
                <img src={gear} alt="Settings" />
                
            </div>

            </div>

        </div>
        <ChatArea
          chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
  );
};

export default Chat;