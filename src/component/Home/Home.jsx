import React from 'react'
import Header from '../Header/Header'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import './H.css'
function Home() {
  return (
    <div className="home">
        <div><Header /></div>
        <div><Body /></div>
        <div><Footer /></div>
    </div>

  )
}

export default Home