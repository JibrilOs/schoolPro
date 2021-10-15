import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ModalC(props) {
  const { modalShow, setModalShow } = props;

  const handleClose = () => setModalShow(!modalShow);
  const handleShow = () => modalShow;

  return (
    <>
      <Modal
        show={modalShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank You for sending Me a message</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalC;
