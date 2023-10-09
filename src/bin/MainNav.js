/* eslint-disable react/prop-types */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const MainNav = (props) => {
  const { showCaseVision, setShowCaseVision } = props;

  const onClickButton = () => {
    if (showCaseVision === 'true') {
      setShowCaseVision('false'); 
    } else {
      setShowCaseVision('true');
    }
  }

  return (
    <Navbar expand="lg" bg='primary'>
      <Container>
        <span className='text-info'>AutoStore</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Button onClick={onClickButton} className="d-flex justify-content-end" variant='outline-info'>Your Cart</Button>
      </Container>
    </Navbar>
  );
}

export default MainNav;
