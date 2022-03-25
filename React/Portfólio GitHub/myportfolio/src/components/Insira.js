//pagina com o input

function Insira({setNome, setEmail, setOptions,setMessage}) {
  return(
    <div>
      <div>
      <label htmlFor="options">Qual o motivo do contato:
              <select value={setOptions} onChange={e => setOptions(e.target.value)}>
                <option value="">Gostaria de Cotar o valor para um Site</option>
                <option value="">Proposta de Emprego</option>
                <option value="">Tirar Dúvidas</option>
              </select>
            </label>
        </div>
      <label>Nome Completo</label>
      <div> <input type="text" placeholder="Insira seu Nome?" onChange={e => setNome(e.target.value)} /></div>
      <label>Email</label>
      <div>
        <input type="email" placeholder="Insira o E-mail?" onChange={e => setEmail(e.target.value)} />
      </div>
       <div>
        <label htmlFor="message">Escreva sua mensagem de contato
        <div></div>
        <textarea type="message" value={setMessage} onChange={(e) => setMessage(e.target.value)} cols="50" rows="5" placeholder="Digite o motivo do seu contato" /> </label>
     </div>
      <div>
            <input type="submit" value="Enviar Mensagem"  />
          </div>
    </div>
  )
}

export default Insira