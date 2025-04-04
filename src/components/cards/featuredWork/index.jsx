import React from 'react';
import FlipCard from '../flipcard';

const FeaturedWork = ({ cardsData = defaultCardsData, cardWidth }) => {
  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <FlipCard key={index} {...card} cardWidth={cardWidth} />
      ))}
    </div>
  );
};

export default FeaturedWork;