import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Slider.css'
import Data from './Products.js'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'


const PreviousBtn=(props)=>{
  const {className,onClick,currentSlide} = props
  return(
    <>
    {currentSlide !== 0 && (<div className={className} onClick={onClick}>
      <ArrowBackIos style={{color:'white'}}/>
    </div>
    )}
    </>
  )
}
const NextBtn=(props)=>{
  const {className,onClick,slideCount,currentSlide} = props
  return(
    <>
    {currentSlide !== slideCount - slidesToShow && (
      <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{color:'white'}}/>
    </div>
    )}
    </>
  )
}

let slidesToShow = 9;

export const Slider2 = () => {
  return (
    <Slider style={{width:"80vw",background:"rgb(237, 229, 229)",padding:"20px 20px",borderRadius:"5px"}}
     slidesToShow={slidesToShow}
     slidesToScroll={3}
     infinite={false}
     prevArrow={<PreviousBtn/>}
     nextArrow={<NextBtn/>}>
        { 
         Data.map((api) =>{
          return(
            <div className='items'>
            <div className='imgstore'>
            <div className='imgstore-2'><img src={api.image} alt="flower images"></img></div>
            </div>
            <p className='Name'>{api.name}</p>
            </div>
         )
        })
      }
    </Slider>    
  )
}

export default Slider2