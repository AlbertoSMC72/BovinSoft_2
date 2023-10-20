import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoYNombew from '../moleculas/logo_Nombre.jsx';
import "../css/colorNav.css"

function NavbarConten({ bgColor}) {
    return (
        <Navbar className='color'>
            <Container>
                <LogoYNombew
                    logoWidth="30"
                    logoHeight="30"
                    logoClassName="30"
                    text="Bovinsoft"
                />
            </Container>
        </Navbar>
    );
}

export default NavbarConten;
