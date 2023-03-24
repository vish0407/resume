import React from 'react';
import './Home.css';
import MoodIcon from '@mui/icons-material/Mood';
import LoginButton from './Login';
import { Auth0Provider } from "@auth0/auth0-react";
import Slide from './Slide';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';

export default function Home() {
  return (
    <>
    <nav>
    <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <h2 className='tst'>Smile</h2>
    </div>
    <div class="flip-box-back">
      <MoodIcon style={{ color: "rgb(233, 186, 17)",
                fontSize:"40px",float:'right' }} />
    </div>  
  </div>   
</div>    
        <div className='name'> CAfe<span id='S2'> Point</span></div>
        <Slide/>
        <div class="filter">
          <button className='btn'><FilterAltIcon/>
          </button>
          </div>
        <div class="bell">
          <button className='btn'><NotificationsTwoToneIcon/>
          </button>
          </div>
        <Auth0Provider
      domain="dev-243t7ytqydaapcez.us.auth0.com"
      clientId="GgbIYGTlYb0YGU0LRLr9Sso6fSQUFyG6"
      redirectUri={window.location.origin}
    >  
    <LoginButton/> 
    </Auth0Provider>
    </nav>
    </>

  )
}
