import LogoImg from '../images/Logo.jpeg';
import styles from '../styles/Logo.module.css';

const Logo = () => {
  return(
    
      <img src={LogoImg} alt="logo" className={styles.widht}/>
  )
};

export default Logo;