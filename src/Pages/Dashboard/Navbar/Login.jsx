import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutIcon from '@mui/icons-material/Logout';

const LoginButton = () => {
    const { isAuthenticated ,loginWithRedirect,logout} = useAuth0();
    return(
            isAuthenticated ? (
                <div className='login'>    
            <button className="btn" onClick={() => logout({ returnTo: window.location.origin })}>
            <LogoutIcon/>
           </button> 
           <p>log out</p>
           </div> 
            ) : (
           <div className='login'>    
           <button className="btn" onClick={() => loginWithRedirect()}><LoginIcon/>
           </button>
           <p>log in</p>
           </div> 
            )
    )
};  
  
export default LoginButton;
