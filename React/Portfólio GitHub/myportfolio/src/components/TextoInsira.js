//recebe os insira e manda para contato
import styles from "../style/Input.css"

function TextoInsira({nome, email, options,message}) {
  return(
    <div>
    <p>{options}</p>
    <p>{nome}</p>
    <p>{email}</p>
    <p>{message}</p>
    </div>
  )
}

export default TextoInsira