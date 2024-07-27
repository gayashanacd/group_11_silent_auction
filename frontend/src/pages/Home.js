import React from 'react';
import AuctionList from '../components/AuctionList';

const items = [
  { id: 1, title: 'Car 1', description: 'Description 1', image: '/images/car1.jpg' },
  { id: 2, title: 'Car 2', description: 'Description 2', image: '/images/car2.jpg' },
  { id: 3, title: 'Car 3', description: 'Description 3', image: '/images/car3.jpg' },
  // Add more items as needed
];

function Home() {
  return (
    <div className="home">
      <h1>Car Auctions</h1>
      <AuctionList items={items} />
    </div>
  );
}

export default Home;