import React, {useState} from 'react'
import './Mainpage.css'
import Model from './Model'
import Popup from 'reactjs-popup'

export const Mainpage = () => {
  
  const [isShown, setIsShown] = useState(false);
  const loginClick = event => {
    setIsShown(current => !current);
  };

  return (
    <>
    <nav>
    <Popup trigger={<button className='btn-p'> Trigger</button>} position="center"
    open={true}> 
    <Model/>
    </Popup>
    <button className='btn' onMouseOver={loginClick}>login</button>

    {isShown && (
        {/*<Button/>*/}
      )}
    </nav>
    </>
  );
}

export default Mainpage;
