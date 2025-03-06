import React from 'react';
import FlipCard from '../flipcard';
import bodice from '../../../assets/images/bodice.webp';
import card1back from '../../../assets/images/bodice1.webp';
import tina from '../../../assets/images/home-hero.webp';
import card2back from '../../../assets/images/tina2.webp';
import sophie from '../../../assets/images/sophie1.webp';
import card3back from '../../../assets/images/heineken3.webp';


const defaultCardsData = [
  {
    frontImage: bodice,
    backImage: card1back,
    title: 'Magic at the Musicals',
    description: 'Designer and Maker',
    viewLink: '/bodice-magic-at-the-musicals'
  },
  {
    frontImage: tina,
    backImage: card2back,
    title: 'Tina the musical',
    description: 'Principal Dresser to Tina',
    viewLink: '/tina-turner-musical'
  },
  {
    frontImage: sophie,
    backImage: card3back,
    title: 'Heineken Jackets and Hats',
    description: 'Designer and Maker',
    viewLink: '/heinken-jackets'
  },
];

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