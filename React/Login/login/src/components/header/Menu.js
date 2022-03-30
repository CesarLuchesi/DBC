import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  const token = localStorage.getItem('token');
  return (
    <div>
      <nav>
        <ul>
        { token ?
           <>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
          <Link to={"/Usuario"}>User</Link>
          </li>
          </>
          :
          <li>
          <Link to={"/Logar"}>Login</Link>
          </li>}
        </ul>
      </nav>
    </div>
  )
}
