function Lista({itens}){
  return(
    <> 
    <h3>Lista de tecnologias</h3>
    {itens.lenght ? itens.map((item, index) => (
      <p key={index}>{item}</p>
    )) : (<h1>Lista Vazia</h1>)}
    </>
  )

}

export default Lista;