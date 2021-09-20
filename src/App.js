import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/header/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Centauri.eot'
import './fonts/Centauri.otf'
import './fonts/Centauri.svg'
import './fonts/Centauri.woff'
import './fonts/Centauri.woff2'

/**
 * Component holding the basic web application
 * @returns {JSX}
 */

function App() {
  return (
    <div className="app">
      
        <Header />
      
        <Router>
          <Routes />
        </Router>
    
    </div>
  );
}

export default App;
