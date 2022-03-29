import {useContext} from 'react'
import { Formik, Field, Form } from 'formik';

import { Autent } from '../context/Autent';


function Login() {

  const {settLogin} = useContext(Autent);

  return (
    <div>
      <p>Login</p>
         <Formik
      initialValues={{
        usuario: '',
        senha: '',
        
      }}
      onSubmit={settLogin}
    >
      <Form>
        <label htmlFor="usuario">First Name</label>
        <Field id="usuario" name="usuario" placeholder="Digite seu login" />

        <label htmlFor="senha">Last Name</label>
        <Field id="senha" name="senha" placeholder="Digite sua senha" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
      </div>
  )
}

export default Login;
