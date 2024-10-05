import React from 'react'
import './Trends.css'
import { TrendData } from '../../Data/TrendsData'
function Trends() {
    return (
       <div className="trends">
          <div class="bg-t"></div>
          <div class="blob"></div>
        <div className="t-content">
        <h3>Top trending subjects</h3>
       {TrendData.map((trend)=>{
        return(
            <div className="trend">
                <span>#{trend.name}</span>
                <span>{trend.shares}k shares</span>
            </div>
            
        )
       })}
        </div>
       </div>
    )
}

export default Trends
