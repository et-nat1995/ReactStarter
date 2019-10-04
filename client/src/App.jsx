import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './Pages/Home';
import NavBar from "./components/Navbar";
import './App.scss';

const CurencyConverter = React.lazy(() => import('./Pages/CurencyConverter'))

function App() {

  return (
    <Router>
        <NavBar/>
        <div className="App">
          <Route exact path="/history" render={() => <h2>Not Found</h2>} />
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <Route exact path="/curency-converter" component={CurencyConverter}/>
          </Suspense>
          <Route exact path="/" component={HomePage} />
        </div>
    </Router>
  );
}

export default App;
