import React from 'react'
import './mobile.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {AiOutlineEdit, AiOutlineLaptop} from "react-icons/ai";
import {MdWorkOutline} from "react-icons/md"
import {BsPerson} from "react-icons/bs"

function mobile({isOpen, setIsOpen}) {
  return (
    <div className="mobile">
      <div className="close_icon" onClick={() => setIsOpen(!isOpen)}> 
        <AiOutlineCloseCircle />
      </div>
      <div className="mobile_options">
      <div className="mobile-option">
        <a href='#projects'>
          <AiOutlineEdit className="option_icon"/>
          Projects 
        </a>
      </div>

      <div className="mobile-option">
        <a href='#skils'>
          <AiOutlineLaptop className="option_icon" />
          Skills
        </a>
      </div>

      <div className="mobile-option">
        <a href='#work'>
          <MdWorkOutline className="option_icon" />
          Work
        </a>
      </div>

      <div className="mobile-option">
        <a href='#contact'>
          <BsPerson className="option_icon" />
          Contact
        </a>
      </div> 
      </div>
    </div>
  )
}

export default mobile