import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './Pages/Home';
import NavBar from "./components/Navbar";
import './App.scss';

const CurencyConverter = React.lazy(() => import('./Pages/CurencyConverter'))
const History = React.lazy(() => import('./Pages/History'))

function App() {

  return (
    <Router>
        <NavBar/>
        <div className="App">
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <Route exact path="/curency-converter" component={CurencyConverter}/>
        </Suspense>
        <Suspense fallback={<h1>Still Loading…</h1>}>
            <Route exact path="/history" component={History}/>
          </Suspense>
          <Route exact path="/" component={HomePage} />
        </div>
    </Router>
  );
}

export default App;
