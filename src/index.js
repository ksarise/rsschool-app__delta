import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Plot from './Plot.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id = 'plot'>
      <Plot/>
    </div>
  </React.StrictMode>
);

reportWebVitals();
