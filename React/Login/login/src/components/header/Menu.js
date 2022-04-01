import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/Header.css'

export default function Menu() {
  const token = localStorage.getItem('token');
  return (
    <div>
      <nav className='headerMenu'>
        <ul>
        { token ?
           <>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
          <Link to={"/Usuario"}>User</Link>
          </li>
          <li>
            <Link to={"/address"}>Endereço</Link>
          </li>
          </>
          :
          null
          }
        </ul>
      </nav>
    </div>
  )
}
