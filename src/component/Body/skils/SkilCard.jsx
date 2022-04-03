import React from 'react'
import './skilcard.css'
function SkilCard({skil}) {
  return (
    <div className='skil-card'>
        <div className='skil-icon'>{skil.icon ? skil.icon : <img className="skil-img" width="1rem" src={skil.img} />}</div>
        <label className='skil-name'>{skil.name}</label>
    </div>
  )
}

export default SkilCard