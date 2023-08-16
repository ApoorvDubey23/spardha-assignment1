import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import VDBG from './bgvdo/video (540p).mp4';
import { Link } from "react-router-dom";
import IMG from './bgvdo/padlock_2889676.png'
function Login() {
  return (
    <div className='main'>
      <video src={VDBG} autoPlay muted loop />
      
      <span className='logo'>space for logo</span>
      <div className='login'>
        <span className='head'>-LOGIN-</span> 
        <form>
          <div className='form-floating'>
            <input id='username' type='text' className='form-control' placeholder='enter your username' required />
            <label htmlFor='username'>Username👤</label>
          </div>
          <div className='form-floating'>
            <input id='password' type='password' className='form-control' placeholder='enter your password' required />
            <label htmlFor='password'>Password <image className='lock' src={IMG}/> </label>
          </div>
          <div className='last1'>

            <button className='btn'>Submit</button>
            
      
            <Link className='signuplnk' to='/sign_up'>
              sign up?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
