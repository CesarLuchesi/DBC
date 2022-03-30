import React,{useEffect, useContext} from 'react';
import moment from 'moment';
import {useNavigate} from 'react-router-dom'

import {Autent} from '../context/Autent';

import '../style/Form.css'
 
function Users() {
 
  const navigate = useNavigate();
  const {settLogout,peoples,people, takToken } = useContext(Autent)

  const formatCpf = (cpf) => {
    cpf = cpf.toString()
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
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
  

  return (
    <div className='usuario'>
    
      <h1 className='color'>Usuario</h1>
      <button className='botaoSair' onClick={settLogout}>Sair</button>
      {people.map(pessoa =>(
        <div key={pessoa.idPessoa}>
          <h3>{pessoa.nome}</h3>
          <p>{formatCpf(pessoa.cpf)}</p>
          <p>{moment(pessoa.dataNascimento).format('DD/MM/YYYY')}</p> 
        </div>
      ))}
    <button className='botaoSair' onClick={settLogout}>Sair</button>
    </div>
  )
}
export default Users;