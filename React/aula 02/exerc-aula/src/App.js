//imports 


// imports das pastas
import './App.css';
import Header from './components/script/Header'
import Footer from './components/script/Footer';
import Home from './components/script/Home';
import About from './components/script/About';
import Contact from './components/script/Contact';

//parte principal

  const App = () => {
  return (
  <>
    <Header/>
    <div className="App">  
      <Home/>
      <About/>
      <Contact/>
    </div>
    <Footer />
    </>
  );
}

export default App;
