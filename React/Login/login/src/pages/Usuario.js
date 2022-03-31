import React,{useEffect, useContext, useState} from 'react';
import moment from 'moment';

import {useNavigate} from 'react-router-dom'
import Loading from '../components/loading/Loading'
import Error from '../components/error/Error'
import api from "../api";
import {Autent} from '../context/Autent';

import '../style/User.css'
 
function Users() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const {settLogout, takToken } = useContext(Autent)

  const formatCpf = (cpf) => {
    cpf = cpf.toString()
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}


async function peoples(){
  try{
    const {data} = await api.get('/pessoa');
    setPeople(data);
    setLoading(false)
  }
  catch (error){
    console.log(error)
    setError(true)
    setLoading(false)
  }
}

  function config() {
    if(!takToken){
      navigate('/Logado')
    }
    if(takToken){
      peoples()
    }
  }

useEffect(() => {
    config();
  },[])
  
if(loading){
  return (<Loading/>)
}
if(error) {
  return (<Error/>)
}


  return (
    <div className='usuario'>
      <h1 className='color'>Usuario</h1>
      {people.map(pessoa =>(
        <div key={pessoa.idPessoa}>
          <h3>{pessoa.nome}</h3>
          <p>{formatCpf(pessoa.cpf)}</p>
          <p>{moment(pessoa.dataNascimento).format('DD/MM/YYYY')}</p> 
        </div>
      ))}
    </div>
  )
}
export default Users;