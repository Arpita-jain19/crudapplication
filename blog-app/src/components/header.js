import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Header = () => {
  useEffect(() => {
    console.log("Skjdshk")
    fetch('http://localhost:4000/profile',{
      credentials:'include',
    })
  
    
  }, [])
  
  return (
    <div>
        <header>
        <Link to="/" className="logo">MyBlog</Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/Register">Register</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header;