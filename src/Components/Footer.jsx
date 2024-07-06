import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./footer.css";
import Facebook from '../assets/Images/facebook.png'
import Instagram from '../assets/Images/instagram.jpeg'
import Twitter from '../assets/Images/twitter.png'


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 footer">
    <Container>
      <Row>
        <Col md={4}>
          <h5>About Us</h5>
          <ul className="list-unstyled">
            <li><a href="#about" className="text-white">About Us</a></li>
            <li><a href="#privacy" className="text-white">Privacy Policy</a></li>
            <li><a href="#terms" className="text-white">Terms of Service</a></li>
            <li><a href="#contact" className="text-white">Contact Us</a></li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Follow Us</h5>
          <ul className="list-unstyled d-flex anchor">
            <li className="mr-3"><a href="https://www.facebook.com/"><img src={Facebook} alt="Facebook" className="img-fluid rounded" style={{width: '2.5rem'}}/></a></li>
            <li className="mr-3"><a href="https://x.com/?lang=en"><img src={Twitter} alt="Twitter" className="img-fluid rounded" style={{width: '2.5rem'}}/></a></li>
            <li className="mr-3"><a href="https://www.instagram.com/"><img src={Instagram} alt="Instagram" className="img-fluid rounded" style={{width: '2.41rem'}}/></a></li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Contact Information</h5>
          <ul className="list-unstyled">
            <li>Email: info@foodapp.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Food Street, Bengaluru City</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3">
          <p>&copy; 2024 FoodApp. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer