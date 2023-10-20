import React from 'react';

function TextoAtom({ text, style }) {
    return (
        <span style={style}>
            {text}
        </span>
    );
}

export default TextoAtom;
