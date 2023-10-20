import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import VistaCrearCuenta from './pages/crearCuentaVista.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div>
      <VistaCrearCuenta />
    </div>

  </React.StrictMode>
);


reportWebVitals();
