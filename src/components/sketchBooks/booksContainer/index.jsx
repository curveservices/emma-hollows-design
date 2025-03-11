import React from 'react';
import BookFlipSmall from '../flipBook';
import book1cover from '../../../assets/images/enchanted-cover.jpg';
import book1page1 from '../../../assets/images/enchanted1.avif';
import bk1pg2 from '../../../assets/images/enchanted2.avif';
import bk1pg3 from '../../../assets/images/enchanted3.avif';
import './index.scss';

// Sample data for 5 books. Each book can have a different number of pages and images.
const booksData = [
  {
    title: 'Enchanted',
    pages: [
      { image: book1cover, alt: 'Book One Cover' },
      { image: book1page1, alt: 'Book One Page 1' },
      { image: bk1pg2, alt: 'Book One Page 2' },
      { image: bk1pg3, alt: 'Book One Page 3' },
    ],
  },
  {
    title: 'Book Two',
    pages: [
     
    ],
  },
  {
    title: 'Book Three',
    pages: [
      
    ],
  },
  {
    title: 'Book Four',
    pages: [
     
    ],
  },
  {
    title: 'Book Five',
    pages: [
      
    ],
  },
];

const BooksContainer = () => {
  return (
    <div className="books-container">
      {booksData.map((book, index) => (
        <BookFlipSmall key={index} title={book.title} pages={book.pages} />
      ))}
    </div>
  );
};

export default BooksContainer;
