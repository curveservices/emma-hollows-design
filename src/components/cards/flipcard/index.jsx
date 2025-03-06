import React from 'react';
import Button from '../../button';
import './index.scss';

const FlipCard = ({ frontImage, backImage, title, description, viewLink, cardWidth }) => {
    const cardStyle = cardWidth ? { '--card-width': cardWidth } : {};
    return (
        <div className="flip-card" style={cardStyle}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img
                        src={frontImage}
                        alt={title}
                        loading="lazy"
                        className="card-image"
                    />
                    <div className="front-title">
                        <h3 className="name">{title}</h3>
                    </div>
                </div>
                <div className="flip-card-back">
                    <img
                        src={backImage}
                        alt={title}
                        loading="lazy"
                        className="card-back-image"
                    />
                    <h2 className="name">{title}</h2>
                    <p className="desc subtitle">{description}</p>
                    <div className="btn-container">
                        <Button
                            text="View"
                            link={viewLink}
                            background="var(--secondary)"
                        />
                    </div>
                </div>
            </div>
        </div>
    )       
};

export default FlipCard;
