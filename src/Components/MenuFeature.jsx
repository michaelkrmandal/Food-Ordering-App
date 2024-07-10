import React, {useContext} from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import './style.css';
import Food1 from '../assets/Images/food1.jpeg'
import Food2 from '../assets/Images/food2.jpeg'
import Food3 from '../assets/Images/food3.jpeg'
import Food4 from '../assets/Images/food4.jpeg'
import Food5 from '../assets/Images/food5.jpeg'
import Food6 from '../assets/Images/food6.jpeg'
import Food7 from '../assets/Images/food7.jpeg'
import Food8 from '../assets/Images/food8.jpeg'
import Food9 from '../assets/Images/food9.jpeg'
import Food10 from '../assets/Images/food10.jpeg'
import Food11 from '../assets/Images/food11.jpeg'
import Food12 from '../assets/Images/food2.jpeg'

const MenuFeature = () => {
  const { addToCart } = useContext(CartContext);
   
  const handleAddToCart = (dish) => {
    addToCart({...dish});
 };


  const dishes = [
    { id: 1, name: 'Dish A', description: 'Short description of the dish.', price: '$12.99', image: Food1 },
    { id: 2, name: 'Dish B', description: 'Short description of the dish.', price: '$10.99', image: Food2 },
    { id: 3, name: 'Dish B', description: 'Short description of the dish.', price: '$10.99', image: Food3 },
    { id: 4, name: 'Dish B', description: 'Short description of the dish.', price: '$10.99', image: Food4 },
    { id: 5, name: 'Dish B', description: 'Short description of the dish.', price: '$10.99', image: Food5 },
    { id: 6, name: 'Dish B', description: 'Short description of the dish.', price: '$10.99', image: Food6 },
    { id: 7, name: 'Dish B', description: 'Short description of the dish.', price: '$10.99', image: Food7 },
    { id: 8, name: 'Dish B', description: 'Short description of the dish.', price: '$10.99', image: Food8 },
    { id: 9, name: 'Dish B', description: 'Short description of the dish.', price: '$10.99', image: Food9 },
    { id: 10, name: 'Dish B', description: 'Short description of the dish.', price: '$10.99', image: Food10 },
    { id: 11, name: 'Dish B', description: 'Short description of the dish.', price: '$10.99', image: Food11 },
    { id: 12, name: 'Dish B', description: 'Short description of the dish.', price: '$10.99', image: Food12 },
    
    // Add more dishes as needed
  ];

  return (
    <Container className="my-5">
      <h2>Popular Dishes</h2>
      <Row>
        {dishes.map((dish) => (
          <Col key={dish.id} md={3} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src={dish.image} />
              <Card.Body>
                <div style={{height: '9rem'}}>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <Card.Text>Price: {dish.price}</Card.Text>
                <Button variant="warning" className="text-decorate" onClick={() => handleAddToCart(dish)}>Book Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
  )
}

export default MenuFeature