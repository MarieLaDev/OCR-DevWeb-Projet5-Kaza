import React from 'react';
import './index.css';
import Router from './utils/router.jsx';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode Révèle les erreurs
  <React.StrictMode>
      <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
