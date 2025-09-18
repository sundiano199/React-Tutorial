import React from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import react from "../assets/react.svg";
import { useAppContext } from '../hooks/useAppContext';



const Nav = () => {
  
  const { user, setUser} = useAppContext();
  const redirect = useNavigate();
  const handleLogout = () => {
    setUser(null);
    redirect("/signin")
  }
  return (
    <div className="bg-black text-white flex items-center justify-between shadow">
      <Link to="/">
        <img src={react} alt="logo" />
      </Link>
      <div className="flex gap-2" items-center>
        <Link to="/about">ABOUT</Link>
        <Link to="/dashboard">DASHBOARD</Link>
        {user ? (
          <button onClick={handleLogout} className="btn btn-error">
            logout
          </button>
        ) : (
          <Link to="/signin">LOGIN</Link>
        )}
      </div>
    </div>
  );
}

export default Nav