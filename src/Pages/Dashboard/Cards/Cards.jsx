import React from 'react'
import './Cards.css'
import data from './Data.js'

export default function Cards() {
  return (
    <div className='main'>
        {
            data.map(function(use) {
             return(
                <div className='card'>
                <div className='imgdiv'><img src={use.image}/>
                <h1>{use.name}</h1>
                <p>{use.text}</p>
                </div>
            </div>
             )
            })
        }
    </div>
  )
}
