import {React, useContext, useEffect, useState} from 'react'
import {  Formik, Form, Field } from 'formik';
import api from '../api';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import {useLocation, useNavigate} from 'react-router-dom'
import { Autent } from '../context/Autent';
import 'react-toastify/dist/ReactToastify.css';
import {UserContext} from '../context/UserContext';
import Loading from '../components/loading/Loading'
import Error from '../components/error/Error'
import '../style/CreateUser.css'

function CreateUser() {
  const {settLogout,takToken,navigate,config, } = useContext
  (Autent);
  const {people,peoples, loading, error, isAtualizar, setIsAtualizar,} = useContext(UserContext);
const location = useLocation();

  const positiveAlert = () => toast("Usuário cadastrado.");
  const negativeAlert = () => toast("Usuário alterado.");


  function howSubmit(values) {
    if (!isAtualizar) {
      createNewUser(values);
    } else {
      atualizarUsuario(values);
    }
  }

  
  async function createNewUser(values) {
    try {
      values.dataNascimento = moment(
        values.dataNascimento,
        "DD/MM/YYYY"
      ).format("YYYY-MM-DD");
      const { data } = await api.post("/pessoa", values);
      if (data) {
        positiveAlert();
        navigate("/users");
      } else {
        alert("Algum valor está errado. Tente novamente");
      }
    } catch (error) {
      console.log(error);
      Error(true);
    }
  }


  async function atualizarUsuario(values) {
    const userAlt={
      cpf: values.cpf,
      dataNascimento: moment(values.dataNascimento, "DD/MM/YYYY").format(
        "YYYY-MM-DD"
      ),
      email: values.email,
      nome: values.nome,
    };
    const idUsuario = location.pathname.substring(13);
    try {
      if (
        userAlt.cpf.length !== 11 ||
        userAlt.dataNascimento.length !== 10
      ) {
       negativeAlert();
      } else {
       await api.put(`/pessoa/${idUsuario}`,userAlt);
        alert("usuário alterado!");
        setIsAtualizar(false);
        navigate("/usuario");
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  function okLogged() {
    if(!takToken){
      navigate('/Logado')
    }
  }
  useEffect(() =>{
    okLogged()
  },[])

  // if (loading) {
  //   return <Loading />;
  // } else if (error) {
  //   return <Error />;
  // } else {
  return (
    <div >
      {isAtualizar ? (
                 <h1>Atualizar</h1>
              ):(<h1>Cadastrar</h1>)}
      <Formik
      initialValues={{
        cpf: '',
        dataNascimento:'',
        data: '',
        email: '',
      }}
      onSubmit={async (values) => {
        howSubmit(values);
      }}
    >
    {(props) => (
      <Form className='cadastroUsuario'>
        <label htmlFor="nome">Nome</label>
        <Field id="nome" name="nome" placeholder="Digite seu Nome:" />

        <label htmlFor="email">Email</label>
        <Field type="email" id="email" name="email" placeholder="Digite seu e-mail" />

        <label htmlFor="dataNascimento">Data Nascimento</label>
        <Field
          id="dataNascimento"
          name="dataNascimento"
          placeholder="Digite sua data de nascimento:"
        />

      <label htmlFor="cpf">CPF</label>
      <Field id="cpf" name="cpf" placeholder="Digite seu CPF:" />

      <div>
              {!isAtualizar && <button type="submit">Cadastrar</button>}
              <ToastContainer />
              {isAtualizar && (
                <button
                  type="submit"
                >
                  Atualizar
                </button>
              )}
            </div>
      </Form>
        )}

    </Formik>

    </div>
  )
}
// }

export default CreateUser