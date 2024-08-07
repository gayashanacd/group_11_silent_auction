import React, { useEffect, useState } from 'react';
import AuctionList from '../components/AuctionList';
import '../index.css'; 

function Home() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/getitems`)
      .then(response => {
        console.log('Raw response:', response); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data); 
        setItems(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [API_BASE_URL]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <h1>Car Auctions</h1>
      <div className="search-container">
        
        <input
          id="search"
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <AuctionList items={filteredItems} />
    </div>
  );
}

export default Home;