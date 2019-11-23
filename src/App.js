import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SearchHero from "./components/pages/SearchHero";
import CreateHero from "./components/pages/CreateHero";
import NavBar from "./components/pages/NavBar";
import './App.css';

function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SearchHero" component={SearchHero} />
        <Route exact path="/CreateHero" component={CreateHero} />
      </React.Fragment>
    </Router>
  );
}

export default App;
