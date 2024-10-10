import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App'; // Assuming App.js is in the same directory
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom'; // Place the Router here

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
