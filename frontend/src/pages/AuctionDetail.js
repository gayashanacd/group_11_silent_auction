import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import AuctionItemFooter from '../components/AuctionItemFooter';

const items = [
  {
    id: 1,
    title: 'Car 1',
    description: 'Description 1',
    image: '/images/car1.jpg',
    details: 'Detailed info about Car 1',
    specifications: {
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      mileage: '10,000 miles',
      color: 'Red',
      startingBid: '$10,000',
    },
    auctionDetails: {
      timeLeft: '0 Days, 22 Hours, 47 Min',
      closeTime: '07/27/2024 7:00 PM EST',
      currentBid: '$11525.00 (USD) (a 79% savings!)',
      views: 24,
      bids: 42,
      bidders: 2,
      watching: 2,
      location: 'Garland, TX',
      seller: 'Sony',
      sellerRatingLink: '#', // Link to seller rating
      condition: 'Returns',
      auctionId: '18972515',
      shippingTerms: 'Liquidation.com arranges shipping',
      shippingEstimateLink: '#', // Link to get a shipping quote
      totalWeight: '4.05 Pounds Per Lot',
      quantityInLot: '10 (Quantity Variance 2%)',
      buyersPremium: '11%',
      auctionType: 'Standard',
      payments: 'Buy now with PayPal',
    },
  },
  // Add more items as needed
];

function AuctionDetail() {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  return (
    <Container className="auction-detail">
      {item ? (
        <>
          <Row className="mt-4">
            <Col md={6}>
              <Card>
                <Card.Img variant="top" src={item.image} alt={item.title} />
              </Card>
            </Col>
            <Col md={6}>
              <h1>{item.title}</h1>
              <p>{item.details}</p>
              <h3>Specifications</h3>
              <ul>
                <li><strong>Make:</strong> {item.specifications.make}</li>
                <li><strong>Model:</strong> {item.specifications.model}</li>
                <li><strong>Year:</strong> {item.specifications.year}</li>
                <li><strong>Mileage:</strong> {item.specifications.mileage}</li>
                <li><strong>Color:</strong> {item.specifications.color}</li>
                <li><strong>Starting Bid:</strong> {item.specifications.startingBid}</li>
              </ul>
              <h3>Auction Details</h3>
              <ul>
                <li><strong>Time Left:</strong> {item.auctionDetails.timeLeft}</li>
                <li><strong>Closes:</strong> {item.auctionDetails.closeTime}</li>
                <li><strong>Current Bid:</strong> {item.auctionDetails.currentBid}</li>
                <li><strong>Views:</strong> {item.auctionDetails.views}</li>
                <li><strong>Bids:</strong> {item.auctionDetails.bids}</li>
                <li><strong>Bidders:</strong> {item.auctionDetails.bidders}</li>
                <li><strong>Watching:</strong> {item.auctionDetails.watching}</li>
                <li><strong>Location:</strong> {item.auctionDetails.location}</li>
                <li><strong>Seller:</strong> <a href={item.auctionDetails.sellerRatingLink}>{item.auctionDetails.seller} (View Seller Rating)</a></li>
                <li><strong>Condition:</strong> {item.auctionDetails.condition}</li>
                <li><strong>Auction Id:</strong> {item.auctionDetails.auctionId}</li>
                <li><strong>Shipping Terms:</strong> {item.auctionDetails.shippingTerms}</li>
                <li><strong>Shipping Estimate:</strong> <a href={item.auctionDetails.shippingEstimateLink}>Get a Quote</a></li>
                <li><strong>Total Weight:</strong> {item.auctionDetails.totalWeight}</li>
                <li><strong>Quantity In Lot:</strong> {item.auctionDetails.quantityInLot}</li>
                <li><strong>Buyer's Premium:</strong> {item.auctionDetails.buyersPremium}</li>
                <li><strong>Auction Type:</strong> {item.auctionDetails.auctionType}</li>
                <li><strong>Payments:</strong> {item.auctionDetails.payments}</li>
              </ul>
              <Button variant="primary" className="mt-3">Add To My Watchlist</Button>
            </Col>
          </Row>
          <AuctionItemFooter />
        </>
      ) : (
        <p>Auction not found!</p>
      )}
    </Container>
  );
}

export default AuctionDetail;