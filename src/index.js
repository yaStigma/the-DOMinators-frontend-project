import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/APP/App';
import { Provider } from "react-redux"; // импрортировала и использовала Provider
import store from "./redux/store"; // импортировала store
import { Toaster } from "react-hot-toast"; //импортировала для всплывающих окон
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* обернула App */}
    <BrowserRouter basename="/the-DOMinators-frontend-project">
      {/* <BrowserRouter> */}
      <App />
      {/* добавила для всплывающих окон */}
      <Toaster />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
