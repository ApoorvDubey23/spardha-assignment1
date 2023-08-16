import React from 'react'
import "./sign_up.css"
import IMG from './bgvdo/padlock_2889676.png'
import { Link } from 'react-router-dom'
function sign_up() {
  return (
    <div className='signup'>
    \
      <form>
       <span>Sign Up</span>
        <div className='form-floating'>
            <input className='form-control' id='username' type='text' placeholder='enter username' required></input>
            <label htmlFor='username'>Username👤</label>
        </div>
        <div className='form-floating'>
            <input className='form-control' id='username' type='text' placeholder='enter E-mail' required></input>
            <label htmlFor='username'>E-mail</label>
        </div>
        <div className='form-floating'>
            <input className='form-control' id='username' type='text' placeholder='enter password' required></input>
            <label htmlFor='username'>Password <img className='lock' src={IMG}/></label>
        </div>
        <div className='form-floating'>
            <input className='form-control' id='username' type='text' placeholder='confirm password' required></input>
            <label htmlFor='username'>Confirm Password <img className='lock' src={IMG}/></label>
        </div>
      <button className='btn'>Submit</button>
      <div className='loginlnk'>
      already signed up?
      <Link  to='/login'>
              login
            </Link></div>
      </form>
    </div>
  )
}

export default sign_up
