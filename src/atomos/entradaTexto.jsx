import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function EntradaTexto(props) {
    const { id, placeholder, type, textoEsp } = props;

    return (
        <div>

            <InputGroup className="mb-3">
                <InputGroup.Text className="Input">{textoEsp}</InputGroup.Text>
                <Form.Control type={type} id={id} placeholder={placeholder} />
            </InputGroup>

        </div>
    );
}

export default EntradaTexto;
