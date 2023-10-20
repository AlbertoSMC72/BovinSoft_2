
function textoGrande(props) {
    const { texto, nomClass  } = props;
    return(
        <h2 className={nomClass} >            
                {texto}
        </h2>
    );
    
}

export default textoGrande;    