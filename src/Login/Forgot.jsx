import React from 'react'
import { useState } from 'react';

export const Forgot = () => {

    const WS = /^\w[a-zA-Z@#0-9.]*$/;
    const [uname,setuname] = useState();
    const [nameError,SetNameError]= useState(false);
  
    const handleName = (e) =>{
        let name = e.target.value;
  
        if(!name.match(WS))
        {
          SetNameError(true);
        }
        else if(name.length < 3 )
        {
          SetNameError(true);
        }
        else{
          SetNameError(false);
        }
        setuname(name);
    }
    const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [email,SetEmail] = useState();
    const [emailError,SetEmailError] = useState(false);

    const handleEmail = (e) =>{
        let email = e.target.value;
        if(!email.match(emailReg))
        {
            SetEmailError(true);
        }
        else{
            SetEmailError(false);
        }
        SetEmail(email);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      
      let name = e.target[0].value;
  
      if((name.length > 3) && (name.match(WS)) && (email.match(emailReg)))
      {
          alert('submitted')
      }
  
  }

    return(
        <>
        <h2>Forgot password</h2>
        <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td>Username</td>
                </tr>
                <tr> 
                <td><i class="fa-solid fa-user"></i><input type={"text"} value={uname} onChange={handleName}
                    placeholder="enter username"/>
                {nameError ? <p> ** enter a valid username</p>: ""}</td>
                </tr>
                <tr><td><br/></td></tr>
                <tr>
                    <td>Email id</td>
                </tr>
                <tr> 
                    <td><i class="fa-solid fa-envelope"></i><input onChange={handleEmail}
                    placeholder="enter email"/>
                    {emailError ? <p> ** enter a valid email</p>: ""}
                    </td>
                </tr>
            </table>
            <button className='btns'>submit</button>
        </form>
        </>
    )
}

export default Forgot;