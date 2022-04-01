import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Logar from './pages/Logar'
import Usuario from './pages/Usuario'
import Autent from './context/Autent';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Address from './pages/Address';
import CreateUser from './pages/CreateUser';
import UserProvider from './context/UserContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Autent>
        <UserProvider>
        <Header/>
        <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/logar" element={<Logar/>}/>
          <Route path="/usuario" element={<Usuario/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path='/create-user' element={<CreateUser/>}>
            <Route path=':id' element={<CreateUser/>}/>
          </Route>
        </Routes>
        <Footer/>
        </UserProvider>
        </Autent>
      </BrowserRouter>
    </div>
  );
}

export default App;
