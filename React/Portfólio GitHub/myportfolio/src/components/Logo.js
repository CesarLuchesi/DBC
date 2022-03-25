
 import styles from "../style/Header.css"
 
 function Logo({dados}) {
   
  const {avatar_url, name, bio} = dados;

  return (
      <div className={styles.menus}>
      <img src={avatar_url} alt="Imagem de Perfil" style={{height: '120px', width: '120px', borderRadius: '100px', paddingLeft: '20px', paddingTop:'10px'}} />
      <p  style={{paddingLeft: '20px'}}>Olá me chamo {name} e sou {bio} </p>
      </div>
  )
}

export default Logo
