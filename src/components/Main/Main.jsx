import React from 'react'
import './Main.css'
import Left from '../Left-side/Left'
import Post from'./../Post/Post'
import Right from '../Right-side/Right'
function Main() {
    return (
        <div className="main">
            <Left/>
           <Post/>
           
        <Right/>
                
                 
               
        </div>
    )
}

export default Main
