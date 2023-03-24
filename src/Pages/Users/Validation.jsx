import React, { useState } from 'react'
import './Validation.css'

const Valid = () => {

  const [popup,SetPopup] = useState(false);
  const openPop = () =>{
    SetPopup(true);
  }
  const closePop = () => {
    SetPopup(false);
  }

  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');

  const handleString = event => {
    const result = event.target.value.replace(/[^a-z ]/gi, '');
    setValue(result);
  };
  
  const [phoneError,SetPhoneError] = useState(false);
  const phoneno = /^\d{10}$/;
  const handleNumber = event => {
    let phone = event.target.value
    const result = event.target.value.replace(/[^0-9]/gi, '');
    setValue2(result);
    if(!phone.match(phoneno))
    {
      SetPhoneError(true);
      document.getElementById("vs2").style.borderColor= "red"
    }  
    else{
      SetPhoneError(false);
      document.getElementById("vs2").style.borderColor = "black";
    }
  };
  
  const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [emailError, SetEmailError] = useState(false);
  const [email, SetEmail] = useState()
  const handleEmail = (e) => {
    let email = e.target.value;
    if (!email.match(emailReg)) {
      SetEmailError(true);
      document.getElementById("vs1").style.borderColor= "red"
    }
    else {
      SetEmailError(false);
      document.getElementById("vs1").style.borderColor = "black";
    }
    SetEmail(email);
  }
  const handleSubmit = h => {
    h.preventDefault();
    let name = h.target[0].value;
    let email = h.target[1].value;
    let phone = h.target[2].value;

    if ((name.length > 3 && (email.match(emailReg))
      && (phone.match(phoneno)))) {
      document.getElementById('popdiv').style.display = "flex";
      document.getElementById('v-box').style.display = "none";
      setTimeout(function() {
        window.location.replace('/');
      }, 3000);
    }
    
  return (
    <div className='main-box'>
      <div id='v-box'>
        <h2>Contact us</h2>
        <form onSubmit={handleSubmit} method="post">
          <table>
            <tr id='tr1'>
              <td><input value={value} onChange={handleString} placeholder="Enter your name" />
              </td>
            </tr>
            <tr>
              <td><input id="vs1" value={email} onChange={handleEmail} autoComplete="off" placeholder='Enter your Email' /></td>
            </tr>
            <tr>
              <td><input id="vs2" value={value2} onChange={handleNumber} autoComplete="off" placeholder="Enter mobile number" /></td>
            </tr>
            <tr>
              <td><textarea placeholder="Type a message" /></td>
            </tr>
            <tr>
              <td>
                {emailError ? <p>&ensp;** Email id is not valid</p> : <p id='test'></p>}
                {phoneError ? <p>&ensp;** phone number is not valid</p> : ""}
              </td>
            </tr>
            <tr><td><div className='btn'>
              <button onClick={openPop}>send</button>
            </div></td>
            </tr>
          </table>
        </form>
      </div>
  <div id='popdiv'>
    <div className='pop-img'><img src= "https://cdn-icons-png.flaticon.com/128/5709/5709755.png" alt="."/>
    <div><p>Your request has been submitted successfully</p></div>
    </div>
 
  </div>
    </div>
  )
}

  }
export default Valid;