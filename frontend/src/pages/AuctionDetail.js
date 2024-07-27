import React from 'react';
import { useParams } from 'react-router-dom';

const items = [
  { id: 1, title: 'Car 1', description: 'Description 1', image: '/images/car1.jpg', details: 'Detailed info about Car 1' },
  { id: 2, title: 'Car 2', description: 'Description 2', image: '/images/car2.jpg', details: 'Detailed info about Car 2' },
  { id: 3, title: 'Car 3', description: 'Description 3', image: '/images/car3.jpg', details: 'Detailed info about Car 3' },
  // Add more items as needed
];

function AuctionDetail() {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  return (
    <div className="auction-detail">
      {item ? (
        <>
          <h1>{item.title}</h1>
          <img src={item.image} alt={item.title} />
          <p>{item.details}</p>
        </>
      ) : (
        <p>Auction not found!</p>
      )}
    </div>
  );
}

export default AuctionDetail;