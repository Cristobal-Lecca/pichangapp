import React from 'react';
import './App.css';
import Home from'./Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage'
import Calendar from './calendar'

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header /> 
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>


      {/* DRAFT BEFORE CREATING CLONE*/}
      {/* Home */}
        {/* Header */}

        {/* Banner */}
          {/* Search Date */}

        {/* Cards */}

        {/* Footer */}

      {/* SearchPage */}
        {/* ... */}
    </div>
  );
}

export default App;
