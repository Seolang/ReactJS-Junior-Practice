import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CoinTracker from './CoinTracker';
//import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CoinTracker />
  </React.StrictMode>
);
