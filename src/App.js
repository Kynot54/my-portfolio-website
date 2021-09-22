import logo from './logo.svg';
import './fonts.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <p class="hero-cta" className="load-hidden">
          <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about"
            >Know More About Me</a>

        </p>
      </header>
    </div>
  );
}

export default App;
