import React from 'react'
import {Container, Button} from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="hero bg-dark text-white text-center py-4 rounded">
      <Container>
        <h1>Delicious Meals Delivered to Your Doorstep!</h1>
        <p>Order from your favorite restaurants with just a few clicks.</p>
        <Button variant="warning" size="lg"><a href="#" className="text-decorate">Browse Restaurants</a></Button>
      </Container>
    </div>
  )
}

export default Hero;