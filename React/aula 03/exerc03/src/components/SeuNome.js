function SeuNome({setNome, setIdade}) {
  return(
    <div>
      <p>Digite Seu Nome</p>
      <input type="text" placeholder="Qual é o seu nome?" onChange={e => setNome(e.target.value)} />
      <input type="text" placeholder="Qual a sua idade?" onChange={e => setIdade(e.target.value)} />
    </div>
  )
}

export default SeuNome