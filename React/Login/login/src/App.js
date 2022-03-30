import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Logar from './pages/Logar'
import Usuario from './pages/Usuario'
import Autent from './context/Autent';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Autent>
        <Header/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route path="/Logar" element={<Logar/>}/>
          <Route path="/Usuario" element={<Usuario/>}/>
        </Routes>
        <Footer/>
        </Autent>
      </BrowserRouter>
    </div>
  );
}

export default App;
