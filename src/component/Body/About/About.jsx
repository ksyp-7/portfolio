import React from 'react'
import './about.css'
import Social from '../../common/Social'
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am
          <br /><span className="info-name">Random Guy.</span><br />
           I love experimenting with the web.
        </div>
        <div className="about-photo">
          <img src={require('./../assest/B.png')} className="picture" />
        </div>
      </div>
      <Social />
    </div>
  )
}

export default About