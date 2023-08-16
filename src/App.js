import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'  // Import BrowserRouter

import Content from './content'
import Login from './login'
import Sign_up from './sign_up'
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Content/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign_up' element={<Sign_up/>}/>
    </Routes>
    </Router>
  )
}

export default App
