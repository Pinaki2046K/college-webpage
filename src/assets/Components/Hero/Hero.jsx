import React from 'react'
import "./Hero.css"
import darkarrow from "../img/dark-arrow.png"
const Hero = () => {
  return (
    <div className='hero container '> 
      <div className="hero-text">
        <h1>We ensue better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur in accusamus dolor maxime fuga, est saepe id necessitatibus. Corporis eaque doloremque alias sint vero obcaecati doloribus nobis animi blanditiis, repellendus similique reiciendis nesciunt. </p>
        <button className='btn'>Explore More <img src={darkarrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
