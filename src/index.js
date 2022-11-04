import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wknd from './Wknd';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Wknd />
  // </React.StrictMode>
);

reportWebVitals();
