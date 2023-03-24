import React from 'react'
import Home from './Navbar/Home'
import SimpleSlider from './MiniSlider/Slider'
import Slider from './ImageSlider/Slider'
import Cards from './Cards/Cards'
import './Dashboard.css'

export const Dashboard = () => {
  return (   
    <> 
      <Home/>
      <br/><br/>
      <SimpleSlider/>
      <Cards/>
    </>
  )
}

export default Dashboard;