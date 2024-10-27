import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Programs from './assets/Components/Programs/Programs'
import Title from "./assets/Components/Title/title"
import About from "./assets/Components/About/about"
import Campus from "./assets/Components/Campus/campus"
import Testimonials from './assets/Components/Testimonials/Testimonials'
import Contact from './assets/Components/Contact/Contact'
import Footer from './assets/Components/Footer/Footer'
import Videoplayer from './assets/Components/Videoplayer/Videoplayer'
import { useState } from 'react'

const App = () => {
    const [playstate, setplaystate] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
          <Title subTitle="OUR PROGRAM" title="What we offer"/>
         <Programs />
         <About setplaystate={setplaystate} />
         <Title subTitle="Gallery" title="Campus Photos "/>
         <Campus />
         <Title subTitle="TESTIMONIALS" title="What Student Says"/> 
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in touch"/>
        <Contact /> 
        <Footer />
      </div>
      <Videoplayer playstate={playstate} setplaystate={setplaystate} /> 
    </div>
  )
}

export default App
