import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learn React. Let's get Started.</p>
      </header>
      <Expenses></Expenses>
      
      
    </div>
  );
}

export default App;
