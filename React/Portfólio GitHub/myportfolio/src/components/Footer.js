// Footer normal com icones para as redes sociais 

import React from 'react';
import styles from '../style/Footer.css'

import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import MenuIcons from './MenuIcons';

function Footer () {
    return(
      <footer>
        <p>SOCIAL MEDIA</p>
        <nav>
            <ul>
            <div className={styles.Footer} >
                <MenuIcons link='https://www.instagram.com/cesarluchesi/' text={<FaInstagram />} />
                <MenuIcons link='https://www.linkedin.com/in/cesarluchesi/' text={<FaLinkedinIn />} />
                <MenuIcons link='https://github.com/CesarLuchesi' text={<FaGithub />} />
            </div>
            </ul>
        </nav>
        </footer>
    )
}

export default Footer