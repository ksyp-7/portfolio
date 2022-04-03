import React from 'react';
import './skils.css'
import {skils} from '../../Data/skils'
import Sap from '../../common/Saparater/Saprater'
import SkilCard from './SkilCard';
function Skils() {
  const data = skils;
  return (
    <div className='skils'>
      <Sap />
      <label className="section-title">SKills</label>
      <div className="skils-container">
      {
        data.map((item, i) =>{
            return(
              <div className="skil-section">
                <label className="skils-section-title">{item.type}</label>
                <div className="skil-list">
                  {
                    item.list.map((skil) => {
                      return(
                        <SkilCard skil={skil} />
                      )
                    })
                  }
                </div>
              </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default Skils