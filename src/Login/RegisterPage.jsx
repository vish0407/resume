import React from 'react'
import { useState } from 'react'

export const RegisterPage = () => {
    const [name,SetName] = useState();
    const [nameError,SetNameError] = useState(false);
    const [stringError,SetStringError] = useState(false);
    const [Name2Error,SetName2Error] =  useState(false);
    const string = /^[A-Za-z]+$/;
    const WP = /\s/;

    const handleName = (e) =>{
       let name = e.target.value;
       SetName(name);
       if((name.length < 3))
       {
          SetNameError(true);
       }
       else{SetNameError(false);}
       if(!name.match(string))
       {
          SetStringError(true);
          SetNameError(false);
       }
       else{SetStringError(false);}
       if(name.match(WP))
       {
          SetName2Error(true);
          SetStringError(false);
       }
       else{SetName2Error(false);}
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

    const phoneno = /^\d{10}$/;
    const [phone,SetPhone] = useState();
    const [phoneError,SetPhoneError] = useState(false);

    const handlePhone = (e) =>{
        let phone = e.target.value;
        if(!phone.match(phoneno))
        {
            SetPhoneError(true);
        }
        else{
            SetPhoneError(false);
        }
        SetPhone(phone);
    }
    
    const [password,SetPassword] = useState();
    const [PassError,SetPassError] = useState();
    const [CpassError,SetCpassError] = useState();
    const num = /[0-9]/;
    const CL = /[A-Z\s]+/;
    const SL = /[a-z\s]+/;
    const SC =  /[@#$%^&+=]/;
    const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const [numError,SetNumError] = useState(false);
    const [CLError,SetCLError] = useState(false);
    const [SLError,SetSLError] = useState(false);
    const [SCError,SetSCError] = useState(false);

    const handlePass = (e) => {
        let password = e.target.value;
        SetPassword(password);
        if(password.length < 8)
        {
            SetPassError(true);
            SetNumError(false);
            SetCLError(false);
            SetSLError(false);
            SetSCError(false);
        }
        else{
            SetPassError(false);
        }
        if(!password.match(num)){
            SetNumError(true);
            SetPassError(false);
            SetCLError(false);
            SetSLError(false);
            SetSCError(false);
        }
        else{
            SetNumError(false);
        }
        if(!password.match(CL)){
            SetCLError(true);
            SetNumError(false);
            SetPassError(false);
            SetSLError(false);
            SetSCError(false);
        }
        if(!password.match(SL)){
            SetSLError(true);
            SetCLError(false);
            SetNumError(false);
            SetPassError(false);
            SetSCError(false);
        }
        else{
            SetSLError(false);
        }
        if(!password.match(SC)){
            SetSCError(true);
            SetSLError(false);
            SetCLError(false);
            SetNumError(false);
            SetPassError(false);
        }
        else{
            SetSCError(false);
        }
    }

    const handlePass2 = (e) => {
        let Cpassword = e.target.value;

        if(Cpassword !== password){
            SetCpassError(true);
        }
        else{
            SetCpassError(false);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let name = e.target[0].value;
        let email = e.target[1].value;
        let password = e.target[3].value;
        let Cpassword = e.target[4].value;

        if((name.length > 3) && (name.match(string)) && (email.match(emailReg))
            && (phone.match(phoneno)) && (password.match(pass)) && (Cpassword === password))
        {
            alert('submitted')
        }

    }
    return (
        <>
            <h2>Register form</h2>
            <form onSubmit={handleSubmit}>    
                <table>
                    <tr>
                        <td><input type="text" autocomplete="off" value={name} onChange={handleName}
                             title="Name" placeholder="enter your name"/>
                             {nameError?<p>&ensp;name should be 3 to 20 charcters</p>:""}
                             {stringError ?<p>&ensp;please enter only characters</p> :""}
                             {Name2Error ?<p>&ensp;whitespace are not allowed</p> :""}
                        </td>
                    </tr>
                    <tr>
                        <td><input type="text" autocomplete="off" value={email} onChange={handleEmail}
                        title="Email Address" placeholder="enter your email"/>
                        {emailError ? <p>&ensp;Email id is not valid</p> : ""}
                        </td>
                    </tr>
                    <tr>
                        <td><input type={"tel"}autocomplete="off" value={phone} onChange={handlePhone}
                        title="Mobile Number" placeholder="enter your mobile number"/>
                        {phoneError ? <p>&ensp;Enter a valid mobile number </p> : ""} 
                        </td>
                    </tr>
                    <tr>
                        <td><input type={"password"}autocomplete="off" value={password} onChange={handlePass}
                        title="Create Password" placeholder="Create a password"/>
                        {PassError ? <p>&ensp;password must between 8 to 20 </p> : ""} 
                        {numError ? <p>&ensp;Enter aleast one number</p> : ""}
                        {CLError ? <p>&ensp;Enter atlect one Capital character</p> : ""}
                        {SLError ? <p>&ensp;Enter atlect one small character</p> : ""}
                        {SCError ? <p>&ensp;enter atlect one special like '@ $' </p> : ""}
                        </td>
                    </tr>
                    <tr>
                        <td><input type={"password"}onChange={handlePass2}
                        title="Confirm Password" placeholder="Confirm password"/>
                        {CpassError ? <p>&ensp;** Password not match </p> : ""}
                        </td>
                    </tr>
                </table><button  className='btns btns-r'>SIGN UP</button>
            </form>
        </>
    )
}

export default RegisterPage
