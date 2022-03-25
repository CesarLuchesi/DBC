// Contém foto linkdin, Nome, menu lateral para as paginas, e icones com redes Sociais.

//imports
import React from 'react'
import { IconName } from "react-icons/fa";


//imports links
import Logo from "./Logo"
import Menu from "./Menu"
import styles from "../style/Header.css"


 function Header({dados}) {
  return (
    <div >
    <header> 
      <div>
      <Logo dados={dados} className={styles.left}/>
      </div>
      <div >
      <Menu className={styles.menus}/>
      </div>
    </header>
    </div>
  )
}

export default Header
