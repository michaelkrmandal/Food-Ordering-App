import React, { useState } from 'react';
import { Card, Button, Collapse, ListGroup} from 'react-bootstrap';
import "./style.css";

const ResCard = ({ restaurant }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
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
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default ResCard;
