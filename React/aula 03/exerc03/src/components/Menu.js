import React from 'react'
import {Link} from 'react-router-dom'

 function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicial</Link>
        </li>
        <li>
        <Link to="/home">Home</Link>
        </li>
        <li>
        <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
