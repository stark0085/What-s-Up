import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-topicons navbar-icons">
          <button className="navbar-icon">Chats</button>
          <button className="navbar-icon">Status</button>
          <button className="navbar-icon">Community</button>
        </div>
        <div className="navbar-bottomicons navbar-icons">
          <button className="navbar-icon">Profile</button>
          <button className="navbar-icon">Settings</button>
        </div>
      </div>
    </div>
  )
}