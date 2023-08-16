import React from 'react'
import { Link } from 'react-router-dom'
import './content.css'
import PIC from './bgvdo/initial.jpg'
function content() {
  return (
    <div className='body'>
        <img src={PIC} />
            <span className='spardha'>
                SPARDHA'23
                </span>
        <div className='midbody'>

<Link to='/login'>
    <button>Login</button>
</Link>
<Link to='/sign_up'>
    <button>Sign Up</button>
</Link>
        </div>
      
    </div>
  )
}

export default content
