import React from 'react';
import ImagenLogo from '../img/logoA.png';

function LogoAtom({  width, height, className }) {
    return (
        <img
            alt="logo sin texto"
            src={ImagenLogo}
            width={width}
            height={height}
            className={className}
        />
    );
}

export default LogoAtom;
