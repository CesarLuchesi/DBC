import {React, useContext, useEffect} from 'react'

import { Autent } from '../context/Autent';


export default function Home() {
  const {okLogged,settLogout} = useContext(Autent);

  useEffect(() =>{
    okLogged()
  },[])


  return (
    <div>
      <h1>Bença de Deus</h1>
      <button className='botaoSair' onClick={settLogout}>Sair</button>
      </div>
  )
}
