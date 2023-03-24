import React from 'react';
import ImageSlider, { Slide } from "react-auto-image-slider";

function Slider() {
  return (
      <>
      <div style={{"width":"20vw"}}>
      <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img1" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FmZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      </Slide>
      <Slide>
        <img alt="img2" src="https://t3.ftcdn.net/jpg/01/40/64/48/360_F_140644889_bfLXQR3n4hSJgdDrs2gCzWdLhAVJ3osU.jpg" />
      </Slide>
      <Slide>
        <img alt="img3" src="landscape.JPG" />
      </Slide>
    </ImageSlider>
    </div>
      </>
)}; 

export default Slider;