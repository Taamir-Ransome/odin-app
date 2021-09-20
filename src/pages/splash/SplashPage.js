import React from 'react';
import { useHistory } from "react-router-dom";
import './Splash.css';
import '../../components/odinbutton/button.css'



const SplashPage = () => {

  const history = useHistory()

  const toLogin = () => {
    history.push('/login');
  }

  return (
    <div className="splash-container">
      <div className='header-text'>
        <p>Ordnance Detection</p>
        <p>Inference Node</p>
      </div>
      <div  className='enter-div'>
        <button type="button" className='odin-btn' onClick={toLogin}>Enter!!!</button>
      </div>
      <div className="welcome">
        <div className="welcome-text">
          <p className='bottom-text'>The Odin Interface</p>
          <p className='bottom-text'>Is Ready</p>
        </div>
      </div>
    </div>
    

  )
}

export default SplashPage
