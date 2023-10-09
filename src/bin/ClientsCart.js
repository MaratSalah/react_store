/* eslint-disable react/prop-types */

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

const ClientsCart = (props) => {
  const { showCaseVision, setShowCaseVision, children, products } = props;

  let show = false;

  if (showCaseVision === 'true') {
    show = true;
  } else {
    show = false;
  }

  return (
    <>
      <Modal show={show} fullscreen={true} onHide={setShowCaseVision}>
        <Modal.Header closeButton>
          <Modal.Title>Your cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <span>Total sum: {products.reduce((acc, product) => product.cost + acc, 0)}</span>
          <Button variant="outline-secondary">
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ClientsCart;
