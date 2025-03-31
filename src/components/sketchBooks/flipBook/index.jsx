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
          </article>
        ))}
      </FlipPage>
      <h3 className="title">{title}</h3>
    </div>
  );
};

const FlipBookGallery = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const booksCollection = collection(db, "sketchbooks");
      const booksSnapshot = await getDocs(booksCollection);
      
      const bookData = booksSnapshot.docs.map(doc => ({
        images: doc.data().images,
        title: doc.data().title || "Untitled Book"
      }));
      setBooks(bookData);
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery-container">
      {books.map((book, index) => (
        <FlipBook key={index} images={book.images} title={book.title} />
      ))}
    </div>
  );
};

export default FlipBookGallery;



