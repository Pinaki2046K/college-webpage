import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../img/next-icon.png'
import back_icon from '../img/back-icon.png'
import user_1 from '../img/user-1.png'
import user_2 from '../img/user-2.png'
import user_3 from '../img/user-3.png'
import user_4 from '../img/user-4.png'


const Testimonials = () => {

    const slider = useRef();
    let tx=0;

    const slideForward = () => {
      if(tx > -50){
        tx -= 25;
      }
        slider.current.style.transform = `translateX(${tx}%)`;
      
    }
    const slideBackward = () => {
      if(tx < 0){
        tx += 25;
      }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn'onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>NVidia,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod dolorem sunt, perspiciatis iste amet maxime nesciunt corporis eos quos perferendis, iusto unde exercitationem ea.</p>
            </div>
          </li>
         
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Andrew Robertson</h3>
                  <span>Boeing,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod dolorem sunt, perspiciatis iste amet maxime nesciunt corporis eos quos perferendis, iusto unde exercitationem ea.</p>
            </div>
          </li>
          
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Steve Harvey</h3>
                  <span>Walmart,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod dolorem sunt, perspiciatis iste amet maxime nesciunt corporis eos quos perferendis, iusto unde exercitationem ea.</p>
            </div>
          </li>
          
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Andrew Garfield</h3>
                  <span>Apple,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod dolorem sunt, perspiciatis iste amet maxime nesciunt corporis eos quos perferendis, iusto unde exercitationem ea.</p>
            </div>
          </li>
        </ul>
      </div>
      
      
      
      
      

    </div>
  )
}


export default Testimonials
