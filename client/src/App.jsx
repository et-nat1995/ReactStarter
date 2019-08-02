import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './Pages/Home';
import HelloWorld from './Pages/Hello world'
import NavBar from "./components/Navbar";
import './App.scss';

function App() {

  return (
    <Router>
        <NavBar/>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hello-world" component={HelloWorld}/>
      </div>
    </Router>
  );
}

export default App;
