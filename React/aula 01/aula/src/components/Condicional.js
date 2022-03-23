import React from "react";
import styles from './Condicional.module.css'


function Condicional(){
  const isBolean = true
  return(
    <div>
      {isBolean ? <h1>Condicional</h1> : <h1>Sem Condicional</h1>}
      </div>
  )
  }
  export default Condicional