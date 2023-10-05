import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ClientsCart = (props) => {
  const { showCaseVision, setShowCaseVision } = props;

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
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary">
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ClientsCart;
