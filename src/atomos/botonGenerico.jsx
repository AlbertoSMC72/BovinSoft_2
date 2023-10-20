import React from 'react';
import { Button } from 'react-bootstrap';

function botonGrande(props) {
    const { texto, variant, nomClass ,accion } = props;

    return (
        <Button variant={variant} className={nomClass} onClick={accion} style={{margin: '1%', fontSize: '1.5rem', width: '16rem' , alignItems:"center" }} >
            {texto}
        </Button>
    );
}

export default botonGrande;
