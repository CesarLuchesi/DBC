import React,{useEffect, useContext, useState} from 'react';
import moment from 'moment';
import {useNavigate,Link} from 'react-router-dom'
import Swal from "sweetalert2";

import '../style/User.css'

import {Autent} from '../context/Autent';
import {UserContext} from '../context/UserContext';
import Loading from '../components/loading/Loading'
import Error from '../components/error/Error'
import api from '../api';


function Users() {
  const navigate = useNavigate();
  const {settLogout, takToken } = useContext(Autent)
  const {people,peoples, loading, error} = useContext(UserContext);
  

  const formatCpf = (cpf) => {
    cpf = cpf.toString()
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: 'Deseja remover o trabalhador?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Não Deletar',
        denyButtonText: `Deletar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {{  await api.delete(`/pessoa/${id}`)
          Swal.fire('Saved!', '', 'success')
        } if (result.isDenied) {
          Swal.fire('Usuario não foi deletado', '', 'info')
        }}
      })
    } catch{
      console.log("Erro ao tentar acessar a api usuario" );
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
      <Link to='/create-user'>Cadastrar Usuario</Link>
      {people.map(pessoa =>(
        <div key={pessoa.idPessoa}>
          <h3>{pessoa.nome}</h3>
          <p>{formatCpf(pessoa.cpf)}</p>
          <p>{moment(pessoa.dataNascimento).format('DD/MM/YYYY')}</p> 
          <button onClick={handleDelete}>Deletar</button>
          <button onClick={() => navigate(`/creat-user/${pessoa.idpessoa}`)}>Atualizar</button>
        </div>
      ))}
    </div>
  )
}
export default Users;