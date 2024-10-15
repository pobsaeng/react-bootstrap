import React from 'react';
import ReactDOM from 'react-dom/client';
import CssComponent from './components/CssComponent';
import ReactComponent from './components/ReactComponent';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssComponent />
    <br/><hr/>
    <ReactComponent />
  </React.StrictMode>
);

reportWebVitals();
