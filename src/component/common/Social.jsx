import React from 'react'
import {SocialData} from '../Data/social'
import './social.css'
function Social() {
    const data= SocialData;
  return (
    <div  className="social-container">
        {data.map((item, i) =>{
            return (
                <a href={item.link} target="_blank">
                    <div className="social-icon-div">
                        <img src={item.icon} className='social-icon' />
                    </div>
                </a>
            )
        })}
    </div>
  )
}

export default Social