import React from 'react'
import Sap from './../../common/Saparater/Saprater'
import './work.css';
import Wcard from './WorkCard'
import {data} from '../../Data/work'
function Work() {
  const workData = data;
  return (
    <div className='work'>
      <Sap />
      <label className="section-title">Work</label>
      <div className="work-list">
      {
        workData.map((item) =>{
          return(
            <Wcard item={item} />
          )
        })
      }
      </div>
    </div>
  )
}

export default Work