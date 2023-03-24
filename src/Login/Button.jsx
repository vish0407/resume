import React, { Component } from 'react'
import Login from './LoginPage'
import RegisterPage from './RegisterPage'
import Forgot from './Forgot'

export class Button extends Component{
    constructor(props){
        super(props)
    
        this.state = {
            tabType:'login'
      }
    }
    toggleMe=(value)=>{
        this.setState({
            tabType:value
        })
}

    render() {
      return (  
        <div className='check'>
          {
            this.state.tabType==='login' && <div className='main'>
              <div className='box1'>
            <Login/>
                <div className='BTNS'>
                  <button className='BTN' onClick={()=>this.toggleMe('forgot')}>
                    Forgot</button>
                  <button className='BTN' onClick={()=>this.toggleMe('register')}>
                  Register</button>
                  </div>
            </div>
            </div>
          }    
          {
            this.state.tabType==='register' && <div className='main'>
            <div className='box'>
            <RegisterPage/>
            <div className='BTNS'><button className='BTN' onClick={()=>this.toggleMe('login')}>
                  login</button>
            </div></div></div>
          }
          {
            this.state.tabType==='forgot' && <div className='main'>
              <div className='box1'>
              <Forgot/>
                <div className='BTNS'>
                  <button className='BTN BTNF' onClick={()=>this.toggleMe('login')}>
                  back to login</button>
            </div>
            </div>
              </div>
          }
          </div>
          
      )
}
}

export default Button
