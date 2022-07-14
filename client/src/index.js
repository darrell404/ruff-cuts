import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ContextProvider from './context/Context';
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

