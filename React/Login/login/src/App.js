import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Logar from './pages/Logar'
import Usuario from './pages/Usuario'
import Autent from './context/Autent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Autent>
        <Routes>
          <Route path="/" element={<Logar/>}/>
          <Route path="/Usuario" element={<Usuario/>}/>
        </Routes>
        </Autent>
      </BrowserRouter>
    </div>
  );
}

export default App;
