import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ResCard from './ResCard';

const ResList = () => {
  const restaurants = [
    {
      id: 1,
      name: 'Restaurant A',
      rating: 4.5,
      image: 'restaurant.jpg',
      menu: [
        { id: 1, name: 'Burger', price: '$10.99' },
        { id: 2, name: 'Pizza', price: '$12.99' },
        // Add more menu items as needed
      ],
    },
    {
      id: 2,
      name: 'Restaurant B',
      rating: 4.0,
      image: 'restaurant.jpg',
      menu: [
        { id: 1, name: 'Sushi', price: '$15.99' },
        { id: 2, name: 'Salad', price: '$8.99' },
        // Add more menu items as needed
      ],
    },
    // Add more restaurants as needed
  ];

  return (
    <Container>
      <Row>
        {restaurants.map((restaurant) => (
          <Col key={restaurant.id} md={4}>
            <ResCard restaurant={restaurant} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResList;
