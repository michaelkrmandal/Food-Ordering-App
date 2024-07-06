import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const DownloadApp = () => {
  return (
    <Container className="my-5 text-center">
    <h2>Get the App</h2>
    <Row className="my-4">
      <Col>
        <Button variant="primary" href="#"><img src="app-store.png" alt="App Store" /> App Store</Button>
      </Col>
      <Col>
        <Button variant="success" href="#"><img src="play-store.png" alt="Play Store" /> Play Store</Button>
      </Col>
    </Row>
    <p>Download our app for a better experience and exclusive deals.</p>
  </Container>
  )
}

export default DownloadApp