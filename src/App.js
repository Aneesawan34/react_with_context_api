import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Component from "./component/Component";
import { PageContext } from "./pagecontext/PageContext";

function App() {
  const { state, dispatch } = useContext(PageContext);
  return (
    <div className="App">
      <header className="App-header">
        <Component />
      </header>
    </div>
  );
}

export default App;
