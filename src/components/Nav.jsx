import React from 'react'
import { Link } from 'react-router-dom'
import react from '../assets/react.svg'


const Nav = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between shadow">
      <Link to="/">
        <img src={react} alt="logo" />
      </Link>
      <div>
        <Link to="/about">ABOUT</Link>
        <Link to="/signin">LOGIN</Link>
        
      </div>
    </div>
  );
}

export default Nav