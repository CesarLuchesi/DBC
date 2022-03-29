import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api";

export const Autent = createContext();

function Autentica({children}){
const [token, setToken] = useState('');
const [login, setLogin] = useState(false);
const navegar = useNavigate();

async function settLogin(values){
  try{
  const {data} = await api.post('/auth', values);
  setToken(data);
  localStorage.setItem('token', JSON.stringify(data));
  setLogin(true);
  api.defaults.headers.Authorization = data;
  navegar('/Usuario')
} catch (error){
  console.log(error)
}
}

function settLogout(){
  localStorage.removeItem('token')
  setLogin(false);
  navegar('/')
}
  return(
    <Autent.Provider value={{token, login, settLogin,settLogout}}>
    {children}
    </Autent.Provider>
  )
}

export default Autentica
