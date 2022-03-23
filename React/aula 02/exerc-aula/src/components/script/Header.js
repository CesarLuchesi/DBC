import Menu from "./Menu";
import Logo from "./Logo"


 const Header = () => {
  return( 
    <header style={{display: 'flex', backgroundColor: 'gray'}}>
    <Logo/>
    <h1>Melhores alunos do Vemser de todos os tempos</h1>
    <Menu style={{display: 'flex', justifyContent: 'flex-end'}} />
    
    </header>
  )
}

export default Header