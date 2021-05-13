import logo from "../logo.svg";
import "./App.css";
import Clock from "../Clock/Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock />
        <Clock timeZone="Asia/Tokyo" />
        <a
          className="App-link"
          href="https://github.com/MathieuCouette/tokyo-clock"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
