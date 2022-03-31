import React from 'react'
import { useContext} from 'react';


import Logo from './Logo'
import Menu from './Menu'
import {Autent} from '../../context/Autent';
import '../../style/Header.css'

export default function Header() {
  const {settLogout } = useContext(Autent)
  return (
    <>
    <header className='Header'>
      <Logo/>
      <Menu/>
      <button className='botaoSair' onClick={settLogout}>Sair</button>
      </header>
      </>
  )
}
