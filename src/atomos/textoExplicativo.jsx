
function textoExplicativo(props) {
    const { texto, nomClass  } = props;
    return(
        <div className={nomClass} >            
                {texto}
        </div>
    );
    
}

export default textoExplicativo;    