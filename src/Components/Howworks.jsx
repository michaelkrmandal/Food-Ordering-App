import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import BrowseImg from '../assets/Images/browseRes.jpeg';
import SelectItems from '../assets/Images/selectItems.jpeg';
import PlaceOrder from '../assets/Images/placeOrder.jpeg';
import TrackOrder from '../assets/Images/trackOrder.jpeg';

const Howworks = () => {
  const steps = [
    { id: 1, title: 'Look Restaurants', description: 'Choose your favorite restaurant.', image: BrowseImg },
    { id: 2, title: 'Select Items', description: 'Pick your favorite dishes from the menu.', image: SelectItems},
    { id: 3, title: 'Place Order', description: 'Confirm and place your order.', image: PlaceOrder},
    { id: 4, title: 'Track Order', description: 'Get real-time updates on your order status.', image: TrackOrder},
  ];

  return (
  <Container className="my-5">
    <h2>How It Works</h2>
    <Row>
      {steps.map((step) => (
        <Col key={step.id} md={3} className="mb-4">
          <Card className="text-center shadow-lg">
            <Card.Img variant="top" src={step.image} style={{ height: '12rem'}}/>
            <Card.Body>
              <Card.Title>{step.title}</Card.Title>
              <Card.Text>{step.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default Howworks