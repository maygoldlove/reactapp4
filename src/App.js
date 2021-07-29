import logo from './logo.svg';
import './App.css';
import React from "react";
import {useState} from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'

function App() {
    const [State, setState]=useState(0);

    return(
      <div className="App">
          <nav>
           
            <Link to="/about">About</Link>
      
            <Link to="/contact">Contact</Link>
            
            <Link to="/">Home</Link>
            </nav>       
          <h1>Hello My World</h1>
          <button onClick={() => setState(State + 1)}>Click</button>
          {State}
    
            <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          </Switch>
       
      </div>
  );
}

export default App;
