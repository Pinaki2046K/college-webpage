import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../img/college.mp4'

const Videoplayer = ({playstate, setplaystate}) => {

    const player = useRef(null);
    const closePlayer = (e) => {
        if(e.target === player.current){
            setplaystate(false);
    }}

  return (
    <div className={`video-player ${playstate?``:`hide`}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
