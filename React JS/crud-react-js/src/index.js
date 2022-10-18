import React, { Fragment, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AppRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);