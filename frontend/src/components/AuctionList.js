import React from 'react';
import AuctionItem from './AuctionItem';

function AuctionList({ items }) {
  return (
    <div className="auction-list">
      {items.map(item => (
        <AuctionItem 
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default AuctionList;