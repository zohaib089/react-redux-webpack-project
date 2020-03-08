import React from 'react';
import Reactdom from 'react-dom';
import App from './app.jsx';
import { BrowserRouter as Router } from 'react-router-dom'
import '../../node_modules/bootstrap/scss/bootstrap.scss'

Reactdom.render(

  <Router>
    <App />
  </Router>



  , document.getElementById("app"))