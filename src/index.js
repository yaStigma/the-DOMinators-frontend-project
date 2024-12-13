import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/APP/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/the-DOMinators-frontend-project">
      {/* <BrowserRouter> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
