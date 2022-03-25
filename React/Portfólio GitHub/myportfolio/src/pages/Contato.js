//Terceira Página recebendo o input
import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from "axios";

import TextoInsira from "../components/TextoInsira";
import Insira from "../components/Insira";
import styles from "../style/Input.css"

 function Contato() {
const [nome,setNome] = useState('');
const [email,setEmail] = useState('');
const [options, setOptions] = useState('');
const [message, setMessage] = useState('');
  return(
    <div className="Contato">
      <h1>Contato</h1>
      <TextoInsira setNome={setNome} setIdade={setEmail} setOptions={setOptions} setMessage={setMessage}/>
      <Insira nome={nome} idade={email} options={options} message={message}/>
    </div>
  )
}

export default Contato