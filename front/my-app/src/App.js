import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Routes from './Routes';
import AppHeader from './components/AppHeader.js';
import AppFooter from './components/AppFooter.js';


function App() {
  return (
    <Router>
      <div className="App">
      <AppHeader />
      <Routes />
      <AppFooter />
    </div>
    </Router>
    
  )
}

export default App;