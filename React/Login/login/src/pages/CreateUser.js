import {React, useContext, useEffect} from 'react'
import {  Formik, Form, Field } from 'formik';
import api from '../api';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import {useLocation} from 'react-router-dom'
import { Autent } from '../context/Autent';

function CreateUser() {
  const {settLogout,takToken,navigate,config} = useContext(Autent);
const location = useLocation();

function okLogged() {
  if(!takToken){
    navigate('/Logado')
  }
}
useEffect(() =>{
  okLogged()
},[])


  async function createNewUser(values){
    try{
      values.dataNascimento = moment(values.dataNascimento, 'DD-MM-YYY').format('YYYY-MM-DD')
  const {data} = await api.post('/pessoa', values);
      console.log(data);
      toast.success("Cadastrado com sucesso !", {
        position: toast.POSITION.TOP_CENTER
      });
    }catch(error){
      console.log(error)
    }
  }


  return (
    <div>
      <h1>CreateUser</h1>
      <Formik
      initialValues={{
        cpf: '',
        dataNascimento:'',
        data: '',
        email: '',
      }}
      onSubmit={async (values) => {
        createNewUser(values);
      }}
    >
      <Form>
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

        <button type="submit">Submit</button>
      </Form>
    </Formik>

    </div>
  )
}

export default CreateUser