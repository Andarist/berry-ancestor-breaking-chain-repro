import logo from "./logo.svg";
import "./App.css";
import { css } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";

const styles = css`
  color: hotpink;
`;
const Div = styled.div`
  border: 1px solid black;
`;
console.log(styles, Div);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
