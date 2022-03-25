import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contato from "./components/Contato";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./components/Home";
import Inicial from './components/Inicial';

function App(){

  
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Inicial/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/contato' element={<Contato/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}
export default App;





//usando Sttate lift
// import {useState} from 'react'

// import SeuNome from './components/SeuNome';
// import Saudacao from './components/Saudacao';

// function App () {
// const [nome,setNome] = useState();
// const [idade,setIdade] = useState();
//   return(
//     <div className="App">
//       <h1>State Lift</h1>
//       <SeuNome setNome={setNome} setIdade={setIdade}/>
//       <Saudacao nome={nome} idade={idade}/>
//     </div>
//   );
// }

// export default App;


// usando array e destruturação com .map
// import Lista from "./components/Lista";
// function App() {
//   const meusItens = ['React', 'Vue', 'Angular']
//   return (
//     <div className="App">
//       <h1>Trabalhando com Listas</h1>
//       <Lista itens={meusItens} />
//     </div>
//   );
// }

// export default App;
