import './App.css';
import logo from './img/logo.png';
import raptor from './img/raptor.jpg'
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <nav className='App-nav'>
        <Navbar />
      </nav>
      <body className="App-body">
        <div>
          <img src={raptor} className="App-slika" alt="raptor" />
          <div className='App-tekst'>
            <p>Raptor X bend nastao je u Trilju 2021. godine. 
              Misao vodilja bila nam je vratiti na scenu najveće hitove ex-yu pop/rock scene.
            </p>
            <ul className='popis-clanova'> Bend se sastoji od 4 aktivna člana:
              <li>Ivan Peso Kozina - električna gitara i vokal</li>
              
              <li>Luka Botica - bass gitara i lead vokal</li>
              
              <li>Dominik Dugi - klavijature</li>
              
              <li>Danijel Stojan - bubnjevi</li>
              </ul>
          
          </div>
        </div>

      </body>
      <footer className="App-footer">
        <a href='https://www.facebook.com/RaptorXband'>Facebook</a>
        <a href='https://instagram.com/raptorxband?igs...'>Instagram</a>
        <a href='https://www.youtube.com/@RaptorX-band'>Youtube</a>

      </footer>
    </div>
    
  );
}

export default App;
