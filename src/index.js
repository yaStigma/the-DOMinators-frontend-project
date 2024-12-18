import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/APP/App';
import { Provider } from "react-redux"; // импрортировала и использовала Provider
import store from "./redux/store"; // импортировала store
import { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react"; //Ініціалізація PersistGate
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* обернула App */}
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/the-DOMinators-frontend-project">
      {/* <BrowserRouter> */}
      <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
