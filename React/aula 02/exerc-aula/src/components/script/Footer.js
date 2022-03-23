 import styles from '../styles/Footer.css'


const Footer = () =>{
  return (
    <footer className={styles.footer}>
      <div className={styles.enderecoFooter} style={{ backgroundColor: 'gray'}}>
        <address>Av. Andaraí, 531 Bairro Passo D’Areia Porto Alegre/RS CEP 91350-110</address>
      </div>
    </footer>
  )
}

export default Footer;