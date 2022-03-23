import Navigation from "./Li-Itens";
import "../styles/Menu.module.css"

 const Menu = () => {
  return( 
    <nav>
      <ul>
      <Navigation Link='Home'/>
      <Navigation Link='About'/>
      <Navigation Link='Contato'/>
      </ul>
     </nav>
  )
}

export default Menu