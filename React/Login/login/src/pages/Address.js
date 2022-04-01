import {React, useContext, useEffect} from 'react'
import { Autent } from '../context/Autent';
import { useState } from 'react';
import {  Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as yup from 'yup';

function Address() {
  const {settLogout,takToken,navigate,config} = useContext(Autent);
  const [dataCep, setDataCep] = useState([])

  function okLogged() {
    if(!takToken){
      navigate('/Logado')
    }
  }
  useEffect(() =>{
    okLogged()
  },[])

  function onSubmit(values){
    alert(JSON.stringify(values, null, 2))
  }


  async function getCep(value, ...values) {
    const cep = value?.replace(/[^0-9]/g, '');
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      setDataCep(data)
      values.forEach(via => {
        via.bairro = data.bairro;
        via.cidade = data.localidade;
        via.logradouro = data.logradouro;
        via.complemento = data.complemento;
        via.estado = data.uf;
        via.ddd = data.ddd;
      })
    }
    catch (erro) {
      console.log("Erro ao acessar a API")
    }
  }


  const addressSchema = yup.object().shape({
   cep: yup
        .string()
        .required("Campo Obrigatório!, insira um valor..."),
  logradouro: yup
        .string()
        .required("Campo Obrigatório!, insira um valor..."),
  bairro: yup
        .string()
        .required("Campo Obrigatório!, insira um valor..."),
  cidade: yup
        .string()
        .required("Campo Obrigatório!, insira um valor..."),
  estado: yup
        .string()
        .required("Campo Obrigatório!, insira um valor..."),
  ddd: yup
        .number()
        .positive()
        .integer()
        .required("Campo Obrigatório!, insira um valor..."),
  telefone: yup
        .number()
        .positive()
        .integer()
        .required("Campo Obrigatório!, insira um valor..."),
     })



  return (
    <div>
<Formik
onSubmit={onSubmit}
validationSchema={addressSchema}
        initialValues={{
          cep: '',
          logradouro: '',
          complemento: '',
          bairro: '',
          cidade: '',
          estado: '',
          ddd: '',
          telefone: '',
        }}
        >
        {values => (
          <Form >

            <div>
              <div><label htmlFor="cep">CEP</label></div>
              <div><Field pattern='(\d){5}-?(\d){3}' id="cep" name="cep" placeholder="00000-000"  onBlur={(e) => getCep(e.target.value, values.values)} /></div>
            </div>

            <div>
              <div>
                <div><label htmlFor="logradouro">Logradouro</label></div>
                <div><Field id="logradouro" name="logradouro" placeholder="Logradouro" /></div>
              </div>

              <div>
                <div><label htmlFor="complemento">Complemento</label></div>
                <div><Field   id="complemento" name="complemento" placeholder="Complemento" /></div>
              </div>

              <div>
                <div><label htmlFor="bairro">Bairro</label></div>
                <div><Field id="bairro" name="bairro" placeholder="Bairro" /></div>
              </div>

              <div>
                <div><label htmlFor="cidade">Cidade</label></div>
                <div><Field pattern='[A-Za-z]{3,}' id="cidade" name="cidade" placeholder="Cidade" /></div>
              </div>

              <div>
                <div><label htmlFor="estado">Estado</label></div>
                <div><Field pattern='[A-Za-z]{2,2}' id="estado" name="estado"  placeholder="Estado" /></div>
              </div>

              <div>
                <div><label htmlFor="ddd">DDD</label></div>
                <div><Field pattern='(\d{2})' id="ddd" name="ddd"  placeholder="DDD" /></div>
              </div>

              <div>
                <div><label htmlFor="telefone">Telefone</label></div>
                <div><Field pattern='(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$' id="telefone" name="telefone" placeholder="Telefone" /></div>
              </div>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
        </Formik>
    </div>
  )
}

export default Address