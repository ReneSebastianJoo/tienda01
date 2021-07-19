import React, {useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Modal} from '../../node_modules/react-bootstrap';


export default function InfoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Transitioning...");

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setTitle("Transitioning...");
  };

  const modalLoaded = () => {
    setTitle("Modal Ready");
  };

  return (
    <>
      <button onClick={showModal}>Mas Detalles</button>
      <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>The body</Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cerrar</button>
          <button>Agregar al carrito</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};