import React from 'react';
import Button from '../../button';
import { Link, useNavigate } from 'react-router-dom';
import './index.scss';

const FlipCard = ({ frontImage, backImage, title, description, viewLink, cardWidth }) => {
    const navigate = useNavigate();
    const cardStyle = cardWidth ? { '--card-width': cardWidth } : {};

    const handleClick = (event) => {
        event.preventDefault();

        if (viewLink.startsWith('/')) {
            navigate(viewLink); 
        } else {
            window.location.href = viewLink;
        }
    };
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
                    <Link to={`/${viewLink}`}>
                        <img
                            src={backImage}
                            alt={title}
                            loading="lazy"
                            className="card-back-image"
                        />
                    
                        <h2 className="name">{title}</h2>
                        <p className="desc subtitle">{description}</p>
                    </Link>
                    <div className="btn-container">
                        <Button
                            text="View"
                            link={viewLink}
                            background="var(--secondary)"
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )       
};

export default FlipCard;
