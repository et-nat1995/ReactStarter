import React from 'react';
import logo from './logo.svg';
import './App.scss';
import SnackBarCentered from "./components/Snackbar"
import Grid from "./components/Grid";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SnackBarCentered />
      </header>
      <div className="app-body">
        <Grid/>
      </div>
    </div>
  );
}

export default App;
