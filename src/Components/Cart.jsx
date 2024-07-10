import React, {useContext} from 'react';
import {Modal, Button, ListGroup} from 'react-bootstrap';
import { CartContext } from './CartContext';


const Cart = ({show, handleClose}) => {
   const {cart, clearCart} = useContext(CartContext);

   const handleOrderNow = () => {
    alert('Your Order is done successfully!');
    clearCart();
    handleClose();
   };

   const handleTrackOrder = () => {
    alert('Tracking feature is not implemented yet.');
    handleClose();
   };

  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ListGroup>
          {cart.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.restaurantName}: {item.name} - {item.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleOrderNow}>
        Order Now
      </Button>
      <Button variant="info" onClick={handleTrackOrder}>
        Track Order
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default Cart;