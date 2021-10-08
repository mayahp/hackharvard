import logo from './logo.svg';
import './App.css';
import Scope1 from './components/Scope1.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Scope1/>
      </header>
    </div>
  );
}

export default App;
