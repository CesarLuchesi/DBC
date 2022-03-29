import {useEffect, useContext} from 'react';

import {Autent} from '../context/Autent';
import {useNavigate} from 'react-router-dom'

import '../style/Form.css'
 
function Users() {

  const {settLogout} = useContext(Autent)
  const navegar = useNavigate();

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if(!localToken){
      navegar('/login')
    }
  },[])
  return (
    <div className='usuario'>
      <h1 className='color'>Usuario</h1>
      <button className='botaoSair' onClick={settLogout}>Sair</button>
    </div>
  )
}
export default Users;