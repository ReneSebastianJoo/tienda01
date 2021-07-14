import React, {useState,setState} from 'react';
import Modal from "./Modal";

const Card = (props) => {

    const [modalInfo,setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Destructurar: Sacar las propiedades del objeto y guardarlas en variables
    // const {titulo, descripcion, imagen, precio, identificador} = props;
    const {titulo, descripcion, imagen, precio, identificador,} = props;

    return (
        <div className="card my-2 " style={{width: "18rem", backgroundColor: "LightGoldenrodYellow"}}>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text crop-text-2" >{descripcion}</p>
                <img className="card-img-top" src={imagen} alt="Card image cap"/>
                <p className="card-text precio" style={{fontSize: "larger", backgroundColor: "mediumseagreen", fontWeight: "bold"}} >${precio}</p>
                <button className="card-button skyNeon" >Comprar</button>
                <button ClassName="btn btn-danger" onClick={handleShow}> Mas detalles</button>

                <Modal show={show} onHide={handleClose}></Modal>

            </div>
        </div>
    )
}

export default Card ;
