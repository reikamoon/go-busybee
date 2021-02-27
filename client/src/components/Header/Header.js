import React from 'react'
import './Header.css';

function Header() {
  return (
        <div className="Header">
      <div className="logo">
       <img src={`${process.env.PUBLIC_URL}Images/busybeelogo.png`} width="70" height="50" alt="Image" /> 
       </div>
       <header>
       <h1>Busybee Go!</h1>
      </header>
    </div>

  )
}

export default Header