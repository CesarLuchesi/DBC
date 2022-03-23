//imports
import {useState} from 'react';

//imports links
import styles from '../styles/Contato.module.css';

function Contact() {
  const [options, setOptions] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [opcao, setOpcao] = useState('');
  const [message, setMessage] = useState('');
  return (
    <section className={styles.forms}>
      <form>
        <div>
          <div>
            <label htmlFor="name"> Digite seu nome completo
              <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
          </div>
          <div>
            <label htmlFor="email">Digite seu email:
              <input type="email" placeholder="digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div>
            <label htmlFor="options">Qual o motivo do contato:
              <select value={options} onChange={e => setOptions(e.target.value)}>
                <option value=""></option>
                <option value="">Estou com duvida em React </option>
                <option value="">Estou com duvida em JavaScrip</option>
                <option value=""> Estou com somente mais uma duvida</option>
                <option value="">Entendi nada </option>
                <option value="">Outra Opção </option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="name"> Digite a outra opção
              <input type="text" placeholder="Digite seu nome" value={opcao} onChange={(e) => setName(e.target.value)} />
            </label>
          </div>
          <div>
            <label htmlFor="message">Escreva sua mensagem de contato
              <textarea type="message" value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="10" placeholder="Digite o motivo do seu contato" />
            </label>
          </div>
          <div>
            <input type="submit" value="Cadastrar" />
          </div>
        </div>
      </form>
    </section>
  )
}
export default Contact;