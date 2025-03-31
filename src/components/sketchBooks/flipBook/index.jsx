import React, { useEffect, useState } from "react";
import FlipPage from "react-flip-page";
import { db } from "../../../../firebase.config"; // Adjust path to your Firebase config
import { collection, getDocs } from "firebase/firestore";
import "./index.scss";
const FlipBook = ({ images, title }) => {
  return (
    <div className="flipbook-container">
      <FlipPage
        orientation="horizontal"
        showTouchHint
        flipOnTouch
        showHint
        flipOnTouchZone="20"
        perspective="30em"
      >
        {images.map((url, index) => (
          <article key={index} className="flip-page">
            <img src={url} alt={`Page ${index + 1}`} className="flip-image" />
            <div className="title">{title}</div>
          </article>
        ))}
      </FlipPage>
    </div>
  );
};

const FlipBookGallery = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const booksCollection = collection(db, "sketchbooks");
      const booksSnapshot = await getDocs(booksCollection);
      
      const bookData = booksSnapshot.docs.map(doc => doc.data().images);
      setBooks(bookData);
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery-container">
      {books.map(( images, index) => (
           <FlipBook key={index} images={images} />
      ))}
    </div>
  );
};

export default FlipBookGallery;


