import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./redux/store"
import App from './App';
// import reportWebVitals from './reportWebVitals';
import "./firebase"
import './styles/index.scss';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// reportWebVitals();
