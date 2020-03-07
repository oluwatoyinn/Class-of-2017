import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="app">

        <Navbar title="Class Of 2017" />
        <Route to="/" render={() =><Home title="Physics Graduate 2017" />} />
        {/* <Home  title="Physics Graduate 2017"/> */}

    </div>
    </BrowserRouter>
  );
}

export default App;
