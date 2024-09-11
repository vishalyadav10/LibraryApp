import React, { useState } from 'react'
import './Header.css'
function Header() {
    const token = localStorage.getItem('name');
    console.log(localStorage);

  return (
        <div className="topnav">
        <a className="active" href="/books">{token}</a>
        </div>
  )
}

export default Header