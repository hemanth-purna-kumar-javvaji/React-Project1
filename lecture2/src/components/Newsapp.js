import React from 'react'
import './Newsapp.css';
import {Link}from 'react-router-dom';
function Newsapp() {
  return (
    <div className='navbar1'>
      <ul>
        <li> <h1>MyNews</h1></li>
        {/* <li><Link to="/">Home</Link></li> */}
        <li><Link to="/business">Business</Link></li>
        <li><Link to='/entertainment'>Entertainment</Link></li>
        <li><Link to='/general'>General</Link></li>
        <li><Link to='/health'>Health</Link></li>
        <li><Link to='science'>Science</Link></li>   
        <li><Link to='sports'>Sports</Link></li>
        <li><Link to='technology'>Technology</Link></li>
      </ul>
    </div>
  )
}

export default Newsapp
