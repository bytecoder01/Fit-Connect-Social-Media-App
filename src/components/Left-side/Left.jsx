import React from 'react'
import Leftcard from '../Left-Card/Leftcard'
import Leftlist from '../Leftlist/Leftlist'

import './Left.css'
function Left() {
    return (
        <div className="left">
            <div className="searchbar-left">
           
           
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
            <Leftcard/>
          <Leftlist/>
        </div>
    )
}

export default Left
