import React from 'react'
import "./about.css"
import about_img from "../img/about.png"
import play_icon from "../img/play-icon.png"

const about = ({setplaystate}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setplaystate(true)}}/>
        </div>
        
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi odit totam dolore ratione officia, dolorem, ullam facilis quidem recusandae, vel quos quod cumque ipsum sit perferendis quasi assumenda? Illo, ut veniam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cum ut, ipsam, harum sint eos fugiat perspiciatis atque accusantium quia sed in autem enim nisi consectetur illum ad blanditiis quaerat aperiam vitae rem hic dignissimos! Beatae laborum natus asperiores, optio, nam a tempore quos eum magni in, vel ex. Blanditiis delectus ratione quis. Quasi?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, aut quae? Expedita alias voluptatibus pariatur dolorum totam sed aliquid magnam non laboriosam, illo, ut unde tempore eveniet, sequi reiciendis quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor tenetur similique, ex animi facere minima quo quasi delectus, voluptates eaque consectetur esse rerum.</p>
        </div>
      
    </div>
  )
}

export default about
