import React, { useEffect } from 'react'
import Game from "../../assets/images/Images-Maestro/Gamescreen-Yellow.png"
const index = () => {
  document.title = " Game- Young Maestro";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
}, []);
  return (
    <div><img src={Game} className='mw-100 h-auto'/></div>
  )
}

export default index