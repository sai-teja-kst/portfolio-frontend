import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider dir="rtl">
    <SSRProvider>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </SSRProvider>
  </ThemeProvider>
);

reportWebVitals();
