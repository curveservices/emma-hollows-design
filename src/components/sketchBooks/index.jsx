import React, { useEffect, useState } from "react";
import FlipPage from "react-flip-page";
import { db } from "../../../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import "./index.scss";

const FlipBook = ({ images, title, info, subtitle }) => {
  return (
    <div className="flipbook-container">
      <FlipPage
        orientation="horizontal"
        showTouchHint
        showSwipeHint
        flipOnTouch
        showHint
        flipOnTouchZone="20"
        perspective="20em"
      >
        {images.map((url, index) => (
          <article key={index} className="flip-page">
            <img src={url} alt={`Page ${index + 1}`} className="flip-image" />
          </article>
        ))}
      </FlipPage>
      <div className="title">
      <h3 className="sketch-title">{title}</h3>
      <div className="sketch-subtitle">{subtitle}</div>
      <div className="sketch-info">{info}</div>
      </div>
      
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
        title: doc.data().title,
        info: doc.data().info,
        subtitle: doc.data().subtitle
      }));
      setBooks(bookData);
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery-container">
      {books.map((book, index) => (
        <FlipBook key={index} images={book.images} title={book.title} info={book.info} subtitle={book.subtitle} />
      ))}
    </div>
  );
};

export default FlipBookGallery;



