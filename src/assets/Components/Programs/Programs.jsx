import React from 'react'
import "./Programs.css"
import PROGRAM_1 from "../img/program-1.png"
import PROGRAM_2 from "../img/program-2.png"
import PROGRAM_3 from "../img/program-3.png"
import PROGRAM_ICON_1 from "../img/program-icon-1.png"
import PROGRAM_ICON_2 from "../img/program-icon-2.png"
import PROGRAM_ICON_3 from "../img/program-icon-3.png"

const Programs = () => {
  return (
    <div className='Programs'>
        <div className="program">
            <img src={PROGRAM_1} alt="" />
            <div className="caption">
                <img src={PROGRAM_ICON_1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={PROGRAM_2} alt="" />
            <div className="caption">
                <img src={PROGRAM_ICON_2} alt="" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={PROGRAM_3} alt="" />
            <div className="caption">
                <img src={PROGRAM_ICON_3} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
      
    </div> 
  )
}

export default Programs
