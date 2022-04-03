import React from 'react'
import './web.css'
import {AiOutlineEdit, AiOutlineLaptop} from "react-icons/ai";
import {MdWorkOutline} from "react-icons/md"
import {BsPerson} from "react-icons/bs"
function Web  () {
  return (
    <div className="web">
      <div className="web-option">
        <a href='#projects'>
          <AiOutlineEdit className="option_icon"/>
          Projects 
        </a>
      </div>

      <div className="web-option">
        <a href='#skils'>
          <AiOutlineLaptop className="option_icon" />
          Skills
        </a>
      </div>

      <div className="web-option">
        <a href='#work'>
          <MdWorkOutline className="option_icon" />
          Work
        </a>
      </div>

      <div className="web-option">
        <a href='#contact'>
          <BsPerson className="option_icon" />
          Contact
        </a>
      </div> 

    </div>
  )
}

export default Web  