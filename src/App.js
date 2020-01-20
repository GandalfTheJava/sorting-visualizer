import React from 'react';
import './App.css';
import Body from "./components/Body/Body.utils";
import Toolbar from "./components/Toolbar/Toolbar.utils";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Body />
    </div>
  );
}

export default App;
