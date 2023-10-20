import React from 'react';
import Logo from '../atomos/logoSimple.jsx';
import Texto from '../atomos/textoGenerico.jsx';

function BrandMolecule({logoWidth, logoHeight, logoClassName, text, textStyle }) {
    return (
        <div>
            <Logo
                width={logoWidth}
                height={logoHeight}
                className={logoClassName}
            />
            <Texto
                text={text}
                style={textStyle}
            />
        </div>
    );
}

export default BrandMolecule;
