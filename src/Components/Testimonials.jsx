import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: 'Mike', review: "Great service and delicious food! The staff was very friendly and accommodating, and the dishes were exceptionally tasty, making our dining experience truly enjoyable." },
    { id: 2, name: 'Alex', review: "Fast delivery and amazing taste! Our order arrived promptly and the flavors were deliciously satisfying. We'll be ordering again soon!" },
    // Add more testimonials as needed
  ];

  return (
    <Container className="my-5">
      <h2>What Our Customers Say</h2>
      <Row>
        {testimonials.map((testimonial) => (
          <Col key={testimonial.id} md={6} className="mb-4">
            <blockquote className="blockquote">
              <p>"{testimonial.review}"</p>
              <footer className="blockquote-footer">{testimonial.name}</footer>
            </blockquote>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Testimonials