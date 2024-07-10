import React, {useState} from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Cart from './Cart.jsx'
import Logo from "../assets/Images/logo.png"
import './style.css'

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <Navbar bg="warning" navbar="dark" variant="warning" expand="lg" sticky="top" className="rounded">
    <Container>
    <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src= {Logo}
              width="30"
              height="30"
              className="d-inline-block align-top rounded"
            />{' '}
            Food APP
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-bar">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/menu">Menu Feature</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Button variant="warning" className="ml-2" onClick={handleShowCart}>
            <i className="bi bi-cart-fill cart-icon"></i>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <Cart show={showCart} handleClose={handleCloseCart} />
  </Navbar>
  )
}

export default Header;