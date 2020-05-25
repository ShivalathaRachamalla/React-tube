import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage.js";

import ResultsPage from './ResultsPage.js';


function App() {

  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/' exact component={HomePage}/>
         <Route path='/video/:id' component={ResultsPage}/>
       </Switch>
       </Router>
    </div>
  );
}

export default App;
