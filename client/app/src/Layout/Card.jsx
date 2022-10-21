function Card(props) {
    return (
        <div>
            <h1>Modelo: {props.modelo}</h1>
            <p>Identificação: {props.id}</p>
            <p>Marca: {props.marca}</p>
            <p>Tipo: {props.tipo}</p>
            <p>Disponibilidade: {props.disponibilidade}</p>
        </div>
    )
}

export default Card