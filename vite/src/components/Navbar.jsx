import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <header className="header">
        <div className="header-content">
            <div className="logo">
             <Link to="/" className="nav-link">
                <div className="logo-icon"></div>
             </Link>

            </div>
            <nav className="navigation">
                <Link to="/upload" className="nav-link">Upload Resume</Link> 
                <Link to="/pricing" className="nav-link">Pricing</Link> 
                <Link to="/contact" className="nav-link">Contact</Link> 
            </nav>
            <div className="header-actions">
                <button className="action-btn primary">Account</button>
            </div>
        </div>
    </header>
  )
}

export default Navbar