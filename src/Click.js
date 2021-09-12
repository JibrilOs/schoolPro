import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const Click = (props) => {
  const { buttonLabel, className, modal, setState } = props;

  const toggle = () => setState();

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Message Sent</ModalHeader>
        <ModalBody>
          <div className="thankyou_details">
            <div className="alert alert-success mt-3">
              Thank for your message. We will contact you soon.
            </div>
            {/* <ul className="list-group">
            <li className="list-group-item">Name: {this.state.name}</li>
            <li className="list-group-item">Email: {this.state.email}</li>
            <li className="list-group-item">contact: {this.state.contact}</li>
            <li className="list-group-item">Message: {this.state.message}</li>
          </ul> */}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default Click;
