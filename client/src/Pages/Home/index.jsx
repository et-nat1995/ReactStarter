import React from 'react';
import SnackBarCentered from "../../components/Snackbar";
import Grid from "../../components/Grid";
import logo from '../../logo.svg';

export default function HomePage() {
  return (
    <div>
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
  )
}
