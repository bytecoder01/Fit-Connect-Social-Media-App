import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Right.css';
import Home from './../../img/home.png';
import gear from './../../img/settings.png';
import Ring from './../../img/ringgg.png';
import chat from './../../img/22.png';
import Trends from '../Trends/Trends';
import main from './../../img/Gym Center (1)_pages-to-jpg-0001.jpg';

function Right() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };
    const handleChatClick = () => {
        navigate('/chat');
    };

    return (
        <div className="right">
            <div className="icons">
                <img src={Home} alt="Home" onClick={handleHomeClick} style={{ cursor: 'pointer' }} />
                <img src={chat} alt="chat"
                onClick={handleChatClick}  style={{ cursor: 'pointer' }}/>
                <img src={Ring} alt="Ring" />
                <img src={gear} alt="Settings" />
             
            </div>
            <Trends />
            <div className="trend-button-container">
                <button className='trend-btn'>
                    Share
                </button>
            </div>
            <div className='main-logo'>
                <img src={main} alt="Main" />
            </div>
        </div>
    );
}

export default Right;
