import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Img1 from "../assets/Images/restaurant1.jpg";
import Img2 from "../assets/Images/restaurant2.jpg";
import Img3 from "../assets/Images/restaurant3.jpg";
import Img4 from "../assets/Images/restaurant4.jpg";
import Img5 from "../assets/Images/restaurant5.jpg";
import Img6 from "../assets/Images/restaurant6.jpg";
import "./style.css";
import ResCard from './ResCard.jsx';

const RestaurantListing = () => {
  const restaurants = [
    { 
      id: 1, 
      name: "Restaurant A",
      rating: 4.5, 
      image: Img1,
      menu: [
        { id: 1, name: 'Burger', price: '$10.99' },
        { id: 2, name: 'Pizza', price: '$12.99' },
        { id: 3, name: 'Salad', price: '$8.99' },
        { id: 4, name: 'Pasta', price: '$11.99' },
        { id: 5, name: 'Sushi', price: '$14.99' },
        { id: 6, name: 'Sandwich', price: '$9.99' }
      ],
    },
    { 
      id: 2, 
      name: "Restaurant B", 
      rating: 4.0, 
      image: Img2,
      menu: [
        { id: 7, name: 'Tacos', price: '$10.49' },
        { id: 8, name: 'Chicken Wings', price: '$9.79' },
        { id: 9, name: 'Steak', price: '$15.99' },
        { id: 10, name: 'Ramen', price: '$12.49' },
        { id: 11, name: 'Fish and Chips', price: '$13.49' },
        { id: 12, name: 'Caesar Salad', price: '$7.99' }
      ],
     },
    { 
      id: 3, 
      name: "Restaurant C", 
      rating: 4.3, 
      image: Img3,
      menu: [
        { id: 13, name: 'Lasagna', price: '$10.99' },
        { id: 14, name: 'Hamburger', price: '$8.99' },
        { id: 15, name: 'Hot Dog', price: '$6.99' },
        { id: 16, name: 'Chicken Caesar Wrap', price: '$7.49' },
        { id: 17, name: 'Pho', price: '$11.49' },
        { id: 18, name: 'BBQ Ribs', price: '$16.99' }
      ],
     },
    { 
      id: 4, 
      name: "Restaurant D", 
      rating: 4.1, 
      image: Img4,
      menu: [
        { id: 19, name: 'Vegetarian Pizza', price: '$13.99' },
        { id: 20, name: 'Shrimp Scampi', price: '$17.99' },
        { id: 21, name: 'Veggie Burger', price: '$9.49' },
        { id: 22, name: 'Chicken Shawarma', price: '$11.99' },
        { id: 23, name: 'Mushroom Risotto', price: '$12.79' },
        { id: 24, name: 'Grilled Cheese Sandwich', price: '$6.49' }
      ],
     },
    { 
      id: 5, 
      name: "Restaurant E", 
      rating: 4.4, 
      image: Img5,
      menu: [
        { id: 25, name: 'Pad Thai', price: '$10.99' },
        { id: 26, name: 'Beef Stir Fry', price: '$12.49' },
        { id: 27, name: 'Caprese Salad', price: '$8.49' },
        { id: 28, name: 'Vegetable Curry', price: '$11.99' },
        { id: 29, name: 'Grilled Salmon', price: '$15.99' },
        { id: 30, name: 'Pulled Pork Sandwich', price: '$9.99' }
      ],
     },
    { 
      id: 6, 
      name: "Restaurant F", 
      rating: 4.2, 
      image: Img6,
      menu: [
        { id: 31, name: 'Quinoa Salad', price: '$7.99' },
        { id: 32, name: 'Tofu Stir Fry', price: '$9.49' },
        { id: 33, name: 'Beef Burger', price: '$11.49' },
        { id: 34, name: 'Vegetable Lasagna', price: '$12.99' },
        { id: 35, name: 'Chicken Caesar Salad', price: '$8.99' },
        { id: 36, name: 'Seafood Paella', price: '$16.99' }
      ],
     },
  ];

  return (
    <Container className="my-5">
      <h2>Available Restaurants</h2>
      {/* <Form.Control type="text" placeholder="Search for restaurants" className="mb-4" /> */}
      <Row>
        {restaurants.map((restaurant) => (
          <Col key={restaurant.id} md={4} className="mb-4">
            <ResCard restaurant={restaurant} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RestaurantListing;
