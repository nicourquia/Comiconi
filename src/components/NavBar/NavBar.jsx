import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import './NavBar.css';
// import Link from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import { useState } from 'react';
import useCartContext from '../../store/CartContext.jsx';



function NavBar(props) {
  const [expanded, setExpanded] = useState(false);
  const { contextFunction  } = useCartContext();
  contextFunction();
    return (
<header>
<nav>
<Navbar expanded={expanded} className="headlogbg" bg="light" expand="lg">
  <Container>
  <LinkContainer to="/"><Navbar.Brand className="swirl-in-fwd">Comiconi</Navbar.Brand></LinkContainer>
  
    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <LinkContainer onClick={() => setExpanded(false)} to="/inicio"><Nav.Link href="#home">Inicio</Nav.Link></LinkContainer>
        <NavDropdown title="Menú" id="basic-nav-dropdown">
          <LinkContainer onClick={() => setExpanded(false)} to="/"><NavDropdown.Item>Todo</NavDropdown.Item></LinkContainer>  
          <LinkContainer onClick={() => setExpanded(false)} to="/category/spiderman"><NavDropdown.Item>Spider-Man</NavDropdown.Item></LinkContainer>
          <LinkContainer onClick={() => setExpanded(false)} to="/category/avengers"><NavDropdown.Item>Avengers</NavDropdown.Item></LinkContainer>
          <LinkContainer onClick={() => setExpanded(false)} to="/category/ironman"><NavDropdown.Item>Iron-Man</NavDropdown.Item></LinkContainer>
        </NavDropdown>
        <LinkContainer onClick={() => setExpanded(false)} to="/acercade"><Nav.Link href="/acercade">Acerca</Nav.Link></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/contacto"><Nav.Link href="/contacto">Contacto</Nav.Link></LinkContainer>
        
      </Nav>
      
    </Navbar.Collapse>
    <CartWidget />
  </Container>
  
  </Navbar>
  </nav>
  </header>
    );
}

export default NavBar;