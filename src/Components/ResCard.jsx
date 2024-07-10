import React, {useState, useContext} from 'react';
import { Card, Button, Collapse, ListGroup} from 'react-bootstrap';
import "./style.css";
import { CartContext } from './CartContext';


const ResCard = ({ restaurant }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { addToCart } = useContext(CartContext);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleAddToCart = (item) => {
     addToCart({...item, restaurantName: restaurant.name});
  };

  return (
    <Card className="mb-4 shadow-lg card-img-hover">
      <Card.Img variant="top" src={restaurant.image} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>Rating: {restaurant.rating}</Card.Text>
        <Button variant="warning" onClick={toggleMenu}>
          View Menu
        </Button>
        <Collapse in={menuVisible}>
          <ListGroup className="mt-3">
            {restaurant.menu.map((item, index) => (
              <ListGroup.Item key={index}>
                {item.name} - {item.price}
                <Button
                  variant="success"
                  size="sm"
                  className="float-right"
                  onClick={() => handleAddToCart(item)}
                  >Add to Cart
                  </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default ResCard;
