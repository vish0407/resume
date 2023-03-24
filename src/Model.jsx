import React, { useState } from 'react'

const Model = () => {
  
  const [popup,SetPopup] = useState(false);

  const openPop = () =>{
    SetPopup(true);
  }
  const closePop = () => {
    SetPopup(false);
  }
  return (
    <>
      <div className='al-main' style={{
        left: 0,
        bottom: 0,
        right: 0,
        top: 0,
        position: "fixed",
        backgroundColor: "rgba(189, 189, 189, 0.8)"
      }}>
      
      <div><button onClick={openPop}>click</button></div>
      {popup ?
      <div className='popdiv'> 
          hello this is a popup
          <button onClick={closePop}>close</button>
      </div> : ""}
      </div>
      </>
  )
}

export default Model