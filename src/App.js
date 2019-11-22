import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SearchHero from "./components/pages/SearchHero";
import NavBar from "./components/pages/NavBar";
import './App.css';

function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SearchHero" component={SearchHero} />
      </React.Fragment>
    </Router>
  );
}

export default App;
