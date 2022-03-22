const Sum = ({valor1, valor2}) => {
  const somar = (valor1+valor2)
  const subtrair = (valor1-valor2)
  const multiplica = (valor1*valor2)
  const divisao = (valor1/valor2)
  return ( 
    <div>
      <h1>{somar}</h1>
      <h1>{subtrair}</h1>
      <h1>{multiplica}</h1>
      <h1>{divisao}</h1>
    </div>
  )    
}

export default Sum