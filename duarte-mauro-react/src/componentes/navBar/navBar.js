import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';




function NavBar() {
    return (
      <Navbar className='row navBar' bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="../../index.js">DaMia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="../../index.js">Inicio</Nav.Link>
              <Nav.Link href="../../index.js">Destacados</Nav.Link>
              <Nav.Link href="../../index.js">Ofertas</Nav.Link>
              <Nav.Link href='../../index.js' className="CarritoIcon"><i className='bi bi-cart-plus-fill'></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;