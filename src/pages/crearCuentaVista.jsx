import FomrCuenta from '../organismos/formCrearCuenta.jsx';
import React from 'react';
import NavSimple from '../organismos/navbarSimple.jsx';

function vistaCrearCuenta(params) {
    return (
        <div>
            <NavSimple />
            <body>
                <FomrCuenta />
            </body>
        </div>
    );
}

export default vistaCrearCuenta;