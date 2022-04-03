import Sap from './../../common/Saparater/Saprater'
import Soc from './../../common/Social'
import React from 'react'
import {AiOutlineCloudDownload} from 'react-icons/ai'
import './contact.css'
function Contact() {
  return (
    <div className="contact">
      <Sap />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
        <p>Want to get in touch? Contact me on any of the platform</p>
        <Soc />
        </div>
        <div className="download">
          <a download href={require('./../assest/ksypcv.pdf')} >
            <AiOutlineCloudDownload />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact