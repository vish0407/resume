import React,{useState} from 'react'
import './Mainpage.css'
import Button from './Button'

const Model = () => {

  const [showModel,setShowModel] = useState(true);
  
  
  const MyModel = () => {
    return(
    <>
    <div className='al-main'>
    <div className='al-box'>   
    <Button/>
    </div> 
    </div>
    <button onClick={() => setShowModel(false)}>okay</button>
    </>
    )
  }
  return (
    <>
        {/*<button onClick={() => setShowModel(true)}>Show</button>*/}
        {showModel && <MyModel />}
    </>
  )
}

export default Model