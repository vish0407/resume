import React from 'react'
import { useState } from 'react';

export const Form = () => {

    const [user,Setuser] = useState({
       fname:"",lname:"",email:""
    });

    const handleInputs = (e) => {
       console.log(e);
    }
    return (
        <div>
            <h1 className='heading'>Fill form details</h1>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <form>
                <table>
                    <tr>
                        <td>First Name:</td>
                        <td><input  style={{margin:"20px", padding:"5px 10px", outline:"none"}}
                             value={user.fname}/></td>
                    </tr>
                    <tr>
                        <td>Last name:</td>
                        <td><input  style={{margin:"20px", padding:"5px 10px", outline:"none"}}
                          value={user.lname}/></td>
                    </tr>
                    <tr>
                        <td>Email Address:</td>
                        <td><input  style={{margin:"20px", padding:"5px 10px", outline:"none"}}
                          value={user.email}/></td>
                    </tr>
                    <tr>
                        <td><button type='submit'>Submit</button></td>
                    </tr>
                </table>
              </form>
            </div>
        </div>    
  )
}

export default Form;