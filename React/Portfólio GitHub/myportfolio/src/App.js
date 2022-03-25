//imports
import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from "axios";

//links imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import Repositorio from "./pages/Repositorio";
import Biografia from "./pages/Biografia";
import Contato from "./pages/Contato";
import MenuIcons from "./components/MenuIcons";


function App() {
  
  const [dados, setDados] = useState({});
  const [repos, setRepos] = useState([]);

  async function setup(){
    try{
    const {data} = await axios.get('https://api.github.com/users/CesarLuchesi');
    setDados(data);
    }catch (error){
      alert(`Desculpe, houve um erro inesperado`)
    }
    try{
      const {data} = await axios.get('https://api.github.com/users/CesarLuchesi/repos');
      setRepos(data);
      }catch (error){
        alert(`Desculpe, houve um erro inesperado`)
      }
  }

  useEffect(() => {
   setup()
 }, []);



  return (
    <div className="App">
    <BrowserRouter>
    <Header dados={dados}/>
    <Routes>
    <Route path='/' element={<Biografia dados={dados}/>} />
    <Route path='/repository' element={<Repositorio repos={repos}/>}/>
    <Route path='/contact' element={<Contato/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;
