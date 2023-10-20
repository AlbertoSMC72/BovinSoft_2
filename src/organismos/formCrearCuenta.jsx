import React, { useState } from 'react';
import EntradaTexto from '../atomos/entradaTexto';
import BotonGrande from '../atomos/botonGenerico';
import TextoExplicativo from '../atomos/textoExplicativo';
import TextoGrande from '../atomos/textoGrande';
import "../css/formCrearCuenta.css"

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function FormCuentaNueva(params) {
    const [selectedOption, setSelectedOption] = useState('');
    const handleButtonClick = (id) => {
        setSelectedOption(id);
    };

    return (
        <div className="Formulario">
            <div className="FormaColor">
                <section>

                    <hr />
                    <TextoGrande texto="Información Personal" />
                    <TextoExplicativo texto=" Es recomendable rellenar estos campos para tener una mejor experiencia, pero no es obligatorio" nomClass="form-text" />
                    <hr />

                    <EntradaTexto id="nombre" placeholder="Nombre" type="text" textoEsp="Nombre:" />
                    <EntradaTexto id="apellidoP" placeholder="Apellido Paterno" type="text" textoEsp="Apellido Paterno:" />
                    <EntradaTexto id="apellidoM" placeholder="Apellido Materno" type="text" textoEsp="Apellido Materno:" />
                    <EntradaTexto id="curp" placeholder="CURP" type="text" textoEsp="CURP:" />
                    <EntradaTexto id="numeroSeguroSocial" placeholder="No. Seguro Social" type="text" textoEsp="No. Seguro Social:" />

                    <hr />
                    <TextoGrande texto="Credenciales Necesarias" />
                    <TextoExplicativo texto="  Es necesario rellenar estos campos para poder guardar la información de su cuenta" nomClass="form-text" />
                    <hr />

                    <EntradaTexto id="email" placeholder="Email" type="email" textoEsp="Email:" />
                    <EntradaTexto id="password" placeholder="Contraseña" type="password" textoEsp="Contraseña:" />
                    <EntradaTexto id="password" placeholder="Repetir Contraseña" type="password" textoEsp="Repetir Contraseña:" />
                </section>

                <div>

                    <hr />
                    <TextoExplicativo texto="Para crear su cuenta es necesario que seleccione una de las opciones, de lo contrario no se podrá crear su cuenta" nomClass="form-text" />
                    <Form>

                        <InputGroup style={{ padding: '1%', justifyContent: 'center' }}>

                            <BotonGrande texto="Crea Una Finca" variant={selectedOption === 'radio-1' ? 'success' : 'outline-success'} accion={() => handleButtonClick('radio-1')} />
                            <BotonGrande texto="Unirse A Una Finca" variant={selectedOption === 'radio-2' ? 'success' : 'outline-success'} accion={() => handleButtonClick('radio-2')} />

                        </InputGroup>
                        {selectedOption === 'radio-2' && (
                            <div>
                                <hr />

                                    <TextoGrande texto="Unirse a una Finca" />
                                    <TextoExplicativo texto="Al unirte a una finca puedes trabajar para la misma." nomClass="form-text" />
                                    <TextoExplicativo texto="Para poder unirte a una finca necesitas el código y contraseña de la misma." nomClass="form-text" />

                                <hr />
                                <EntradaTexto id="codigoU" placeholder="Código de la Finca" type="text" textoEsp="Código de la Finca:" />
                                <EntradaTexto id="passwordU" placeholder="Contraseña de la Finca" type="password" textoEsp="Contraseña de la Finca:" />


                                    <BotonGrande texto="Unirse a la Finca" variant="success" nomClass="btn btn-primary btn-lg" />
                            </div>
                        )}
                        {selectedOption === 'radio-1' && (
                            <div>
                                <hr />

                                <div >
                                    <TextoGrande texto="Crear Una Finca" />
                                    <TextoExplicativo texto="Al crear una finca eres el dueño de la misma." nomClass="form-text" />
                                    <TextoExplicativo texto="Para que otros usuarios se unan es necesario que les proporciones el código y contraseña para ingresar." nomClass="form-text" />
                                </div>

                                <hr />
                                <EntradaTexto id="nombreF" placeholder="Nombre de la Finca" type="text" textoEsp="Nombre de la Finca:" />
                                <EntradaTexto id="contraseñaIngreso" placeholder="Contraseña de Ingreso" type="password" textoEsp="Contraseña de Ingreso:" />
                                <EntradaTexto id="ubicacion" placeholder="Ubicación" type="text" textoEsp="Ubicación:" />
                                <EntradaTexto id="tipoClima" placeholder="Tipo de Clima" type="text" textoEsp="Tipo de Clima:" />

                                <BotonGrande texto="Crear una Finca" variant="success" nomClass="btn btn-primary btn-lg" />
                            </div>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default FormCuentaNueva; 
