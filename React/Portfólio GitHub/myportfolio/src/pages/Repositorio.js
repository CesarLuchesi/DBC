//Segunda página
import React from "react";

import "../style/Repo.css";
import { FaGithub } from "react-icons/fa";


 function Repositorio({repos}) {

  console.log(repos)
  return (
    <div className='repoall'>
      <h1><FaGithub/> Projetos </h1>
      {repos.length && repos.map(item => (
        <div key={item.id} className='repoproj'>
        <h3>{item.name}</h3>
        <a href={item.html_url}>{item.html_url}</a>
        </div>
      ))}
    </div>
  )
}

export default Repositorio
