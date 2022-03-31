import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api";

export const Autent = createContext();

function Authenticate({children}){
const [token, setToken] = useState('');
const [login, setLogin] = useState(false);
const navigate = useNavigate();
const takToken = localStorage.getItem('token');

useEffect(() => {
  const takToken = localStorage.getItem('token');
  if (takToken){
    api.defaults.headers.common['Authorization'] = takToken
  }setLogin(true)
},[])

async function settLogin(values){
    try{
        const {data} = await api.post('/auth', values);
        setToken(data);
        localStorage.setItem('token', data);
        navigate('/Usuario')
    } 
    catch (error){
      console.log(error)
    }
}

function settLogout(){
      localStorage.removeItem('token')
      navigate('/Logar')
}

function okLogged(){
  const token = localStorage.getItem('token')
  if(!login){
    navigate('/Logar')
  }
}
  if(!login){
    return(
      <>
      Loading...
      </>
    )
  }
  return(
    <Autent.Provider value={{token, login, settLogin,settLogout,okLogged,Authenticate,navigate,takToken}}>
        {children}
    </Autent.Provider>
  )
}
export default Authenticate
