/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />

        <p className="github-link">
          This is an open-sourced project built by{" "}
          <a
            href="https://github.com/MaxYeats/react-weather-app"
            title="link to Melissa's GitHub project page"
            target="_blank"
            rel="noreferrer"
            className="active"
          >
            Melissa Tseng
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
