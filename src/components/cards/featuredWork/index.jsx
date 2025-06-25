import React from 'react';
import FlipCard from '../flipcard';

const FeaturedWork = ({ cardsData = defaultCardsData, cardWidth, cardHeight }) => {
  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <FlipCard key={index} {...card} cardWidth={cardWidth} cardHeight={cardHeight}/>
      ))}
    </div>
  );
};

export default FeaturedWork;