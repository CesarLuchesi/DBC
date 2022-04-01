import {React, useContext, useEffect} from 'react'

import { Autent } from '../context/Autent';


export default function Home() {
  const {settLogout,takToken,navigate,config} = useContext(Autent);

  function okLogged() {
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
