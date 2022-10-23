import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from './root';
import 'antd/dist/antd.min.css'
import { Context } from './context';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Root />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);

