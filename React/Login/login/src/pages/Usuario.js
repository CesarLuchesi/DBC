import {useEffect, useContext} from 'react';

import {Autent} from '../context/Autent';
import {useNavigate} from 'react-router-dom'
 
function Users() {

  const {settLogout} = useContext(Autent)
  const navigate = useNavigate();

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if(!localToken){
      navigate('/login')
    }
  },[])
  return (
    <div>
      <h1>Usuario</h1>
      <button onClick={settLogout}>sair</button>
    </div>
  )
}
export default Users;