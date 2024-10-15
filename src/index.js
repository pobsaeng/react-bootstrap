import React from 'react';
import ReactDOM from 'react-dom/client';
import CssComponent from './components/CssComponent';
import ReactComponent from './components/ReactComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssComponent />
    <ReactComponent />
  </React.StrictMode>
);

reportWebVitals();
