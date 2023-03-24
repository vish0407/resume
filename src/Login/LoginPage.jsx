import React, { useState } from 'react'

export const LoginPage = () => {

  const wsps = /\s/;
  const [uname,setuname] = useState();
  const [pass,setpass] = useState();
  const [spcError,SetSpcError]= useState(false);

  const handleName = (e) =>{
      let name = e.target.value;
      setuname(name);

      if(name.match(wsps)){
        SetSpcError(true);
      }
      else{
        SetSpcError(false);
      }
  }
  const handlePass = (e) =>{
    let pass = e.target.value;
    setpass(pass);
  }

  const handleSubmit = (e) => {
    let name = e.target[0].value;
    
    e.preventDefault();
    if((!name.match(wsps)) && (!pass.match(wsps)) && (name.length > 2) && (pass.length > 7)){
        alert('submitted');
    }

}
  return (
    <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Username  </td>
                    </tr>
                    <tr>
                    <td>
                      <i class="fa-solid fa-user"></i><input type={"text"} autocomplete="off" value={uname} onChange={handleName} 
                          placeholder="enter username"/>
                        {spcError ? <p>&emsp;white space are not allowed</p>: ""}</td>
                    </tr>
                    <tr>
                        <td><br></br></td>
                    </tr>
                    <tr>
                        <td>Password </td>
                    </tr>
                    <tr>
                    <td><i class="fa-solid fa-lock"></i>
                    <input type={"password"} autocomplete="off" value={pass} onChange={handlePass}
                    placeholder="enter password"/>
                        </td>
                    </tr>
                </table>
                <button className='btns'>login</button>
            </form>
            <button className='google'><i class="fa-brands fa-google"></i>&emsp;sign-up with Google</button>
            </>
  )
}
export default LoginPage;
