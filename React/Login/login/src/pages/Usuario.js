import React,{useEffect, useContext, useState} from 'react';
import moment from 'moment';
import {useNavigate,Link} from 'react-router-dom'
import Swal from "sweetalert2";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import { Navbar,Container,Nav, Button,Stack} from 'react-bootstrap';

import '../style/User.css'

import {Autent} from '../context/Autent';
import {UserContext} from '../context/UserContext';
import Loading from '../components/loading/Loading'
import Error from '../components/error/Error'
import api from '../api';


function Users() {
  const navigate = useNavigate();
  const {settLogout, takToken } = useContext(Autent)
  const {people,peoples, loading, error,isAtualizar, setIsAtualizar} = useContext(UserContext);
  

  const formatCpf = (cpf) => {
    cpf = cpf.toString()
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}




const deletaAPI = async (id) => {
  await api.delete(`pessoa/${id}`).then((result1) => {
    if (result1.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    }
    if (result1.isDenied) {
      Swal.fire("Usuario não foi deletado", "", "info");
    }
  });
};

const handleDelete = async (id) => {
  try {
    Swal.fire({
      title: "Deseja remover o trabalhador?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Deletar",
      denyButtonText: "Não Deletar",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deletaAPI(id);
      }
      if (result.isDenied) {
        Swal.fire("Usuario não foi deletado", "", "info");
      }
    });
  } catch {
    console.log("Erro ao tentar acessar a api usuario");
  }
};


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

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  } else {
  return (
    <div className='usuario'>
      <h1 className='color'>Usuario</h1>
      <><Button variant="info"><Link to='/create-user'>Cadastrar Usuario</Link></Button></>
      {people.map(pessoa =>(
        <div className='usercadastro' key={pessoa.idPessoa}>
          <h3>{pessoa.nome}</h3>
          <p>{formatCpf(pessoa.cpf)}</p>
          <p>{moment(pessoa.dataNascimento).format('DD/MM/YYYY')}</p> 
          <button onClick={() => handleDelete(pessoa.idPessoa)}>Deletar</button>
          <button onClick={() => (pessoa.idPessoa, pessoa)}>Atualizar</button>
        </div>
      ))}
    </div>
  )
}
}
export default Users;