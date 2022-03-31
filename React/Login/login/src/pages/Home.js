import {React, useContext, useEffect} from 'react'

import { Autent } from '../context/Autent';


export default function Home() {
  const {okLogged,settLogout,takToken,navigate} = useContext(Autent);

  function config() {
    if(!takToken){
      navigate('/Logado')
    }
  }
  useEffect(() =>{
    okLogged()
  },[])


  return (
    <div>
      <h1>Home</h1>
      </div>
  )
}
