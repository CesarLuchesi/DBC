import React from 'react';
import {Link} from 'react-router-dom';
import { FaRegAddressBook } from "react-icons/fa";
import { FaGitAlt} from "react-icons/fa";
import { FaMailBulk} from "react-icons/fa";

import styles from "../style/Header.css"


 function Menu() {
  return (
    <div className={styles.menuLista}>
    <nav>
      <ul >
        <div style={{listStyle: 'none', display:'flex'}}>
        <li style={{marginRight:'20px'}}>
      <Link to="/">Bio {<FaRegAddressBook />}</Link>
        </li>
        <li style={{marginRight:'20px'}}>
        <Link to="/repository">Repositórios {<FaGitAlt/>}</Link>
        </li>
        <li style={{marginRight:'20px'}}>
        <Link to="/contact">Contato {<FaMailBulk/>}</Link>
        </li>
        </div>
      </ul>
    </nav>
    </div>
  );
}

export default Menu