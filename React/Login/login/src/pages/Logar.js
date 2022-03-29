import {useContext} from 'react'
import { Formik, Field, Form } from 'formik';

import { Autent } from '../context/Autent';
import '../style/Form.css'


function Login() {

  const {settLogin} = useContext(Autent);

  return (
    <div className='bloco'>
      <h1 className='color'>Login</h1>
         <Formik
      initialValues={{
        usuario: '',
        senha: '',
        
      }}
      onSubmit={settLogin}
    >
      <Form className='formulario'>
        <label htmlFor="usuario">User</label>
        <Field id="usuario" name="usuario" placeholder="Digite seu user" />

        <label htmlFor="senha">Senha</label>
        <Field type='password' id="senha" name="senha" placeholder="Digite sua senha" />

        <button type="submit">Enviar</button>
      </Form>
    </Formik>
      </div>
  )
}

export default Login;
