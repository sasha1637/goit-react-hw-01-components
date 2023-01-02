import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Reset } from 'styled-reset'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Reset/>
    <App />
  </React.StrictMode>
);
