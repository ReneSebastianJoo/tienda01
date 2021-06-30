import React from 'react'
const Card = (props) => {

    // Destructurar: Sacar las propiedades del objeto y guardarlas en variables
    // const {titulo, descripcion, imagen, precio, identificador} = props;
    const {titulo, descripcion, imagen, precio, identificador,} = props;

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <img className="card-img-top" src={imagen} alt="Card image cap"/>
                <p className="card-text">{precio}</p>
                {/* <div className="d-flex justify-content-between">
                    <button className="btn btn-danger">{seleccionado}</button>
                </div> */}
            </div>
        </div>
    )
}

export default Card ;
