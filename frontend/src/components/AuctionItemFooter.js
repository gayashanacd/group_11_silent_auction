import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const footerData = [
  {
    id: 1,
    title: "Item 1",
    closingTime: "2:55 PM",
    currentBid: "$198.00",
    image: "/images/car1.jpg",
    link: "/auction/1"
  },
  {
    id: 2,
    title: "Item 2",
    closingTime: "3:40 PM",
    currentBid: "$490.00",
    image: "/images/car2.jpg",
    link: "/auction/2"
  },
  {
    id: 3,
    title: "Item 3",
    closingTime: "4:30 PM",
    currentBid: "$150.00",
    image: "/images/car3.jpg",
    link: "/auction/3"
  },
  {
    id: 4,
    title: "Item 4",
    closingTime: "5:00 PM",
    currentBid: "$200.00",
    image: "/images/car1.jpg",
    link: "/auction/4"
  },
  {
    id: 5,
    title: "Item 5",
    closingTime: "6:15 PM",
    currentBid: "$300.00",
    image: "/images/car2.jpg",
    link: "/auction/5"
  },
  // Add more items as needed
];

function AuctionItemFooter() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const chunkSize = 4;
  const carouselItems = [];

  for (let i = 0; i < footerData.length; i += chunkSize) {
    const chunk = footerData.slice(i, i + chunkSize);
    carouselItems.push(chunk);
  }

  return (
    <footer className="bg-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={12}>
            <h5>More From This Seller</h5>
            <Carousel 
              activeIndex={index} 
              onSelect={handleSelect} 
              interval={5000}
              controls={false}
              indicators={true}
            >
              {carouselItems.map((chunk, idx) => (
                <Carousel.Item key={idx}>
                  <Row>
                    {chunk.map(item => (
                      <Col md={3} key={item.id}>
                        <Card>
                          <Card.Img variant="top" src={item.image} alt={item.title} />
                          <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                              Closing: {item.closingTime}<br />
                              Current Bid: {item.currentBid}
                            </Card.Text>
                            <Link to={item.link}>
                              <Button variant="primary">Bid Now</Button>
                            </Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
            {/*
            <a
              className="carousel-control-prev"
              href="#"
              role="button"
              onClick={() => handleSelect((index - 1 + carouselItems.length) % carouselItems.length)}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#"
              role="button"
              onClick={() => handleSelect((index + 1) % carouselItems.length)}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>*/}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default AuctionItemFooter;
