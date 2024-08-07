import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AuctionItem({ id, title, description, image }) {
  return (
    <Card className="auction-item" style={{ margin: '10px', flex: '1 0 21%' }}>
      <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/${image}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`/auction/${id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default AuctionItem;