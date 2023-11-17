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
        <Navbar.Brand className="text-info">AutoStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Button onClick={onClickButton} className="d-flex justify-content-end" variant='outline-info'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </Button>
        {/* <i onClick={onClickButton} className="d-flex justify-conent-end bi bi-bag"></i> */}
      </Container>
    </Navbar>
  );
}

export default MainNav;
