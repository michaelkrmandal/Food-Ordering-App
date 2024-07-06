import React from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import Logo from "../assets/Images/logo.png"
import './style.css'

const Header = () => {
  return (
    <Navbar bg="warning" navbar="dark" variant="warning" expand="lg" sticky="top" className="rounded">
    <Container>
    <Navbar.Brand href="#home">
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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#menu">Menu</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          <Button variant="warning" className="ml-2"><a href="#"><i className="bi bi-cart-fill cart-icon"></i></a></Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header