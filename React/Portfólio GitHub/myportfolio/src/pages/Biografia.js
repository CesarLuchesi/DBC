//Pagina principal

import React from 'react'
import "../style/Bio.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import {  } from "react-icons/fa";

function Biografia({dados}) {
  return (
    <>
    {Object.keys(dados).length ? (
    <div className='Bio'>
    <h2> Bem vindo ao meu perfil</h2>
    <p> Hi! I am César Luchesi and welcome to my profile  🤗 </p>
    <p> Oi! Eu sou César e atualmente trabalho na DBC company e estou estudando a área de front-end 💻</p>
 <p> - 🔭 Hoje trabalho/estudo front-end </p>
<p> - 🌱 Estudando HTML;CSS;JavaScript e React </p>
<p> - 📫 Contato pelo e-mail: cesarfluchesi123@gmail.com  </p>

<h4>Experiências</h4>
      <span className='linguagens'><FaHtml5/> - <FaCss3Alt/> - <FaReact/></span>

    </div>
      ) : <p>erro!</p>}
    </>
)
}
export default Biografia
