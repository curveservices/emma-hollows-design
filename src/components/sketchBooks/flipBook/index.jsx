import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import coverImage from '../../../assets/images/enchanted-cover.jpg';
import page1Image from '../../../assets/images/enchanted1.avif';
import page2Image from '../../../assets/images/enchanted2.avif';
import page3Image from '../../../assets/images/enchanted3.avif';
import './index.scss';

const BookFlipSmall = ({ title }) => {
  return (
    <div className='bookflip-container'>
       <div className="bookflip-small">
      <HTMLFlipBook width={200} height={300} showCover={true}>
        {/* Cover Page */}
        <div className="page page-cover">
          <img src={coverImage} alt="Book Cover" />
          <h2 className="page-title">{title}</h2>
        </div>
        {/* Page 1 */}
        <div className="page">
          <img src={page1Image} alt="Page 1" />
        </div>
        {/* Page 2 */}
        <div className="page">
          <img src={page2Image} alt="Page 2" />
        </div>
        <div className="page">
          <img src={page3Image} alt="Page 2" />
        </div>
      </HTMLFlipBook>
      </div>
      <div className="bookflip-small">
      <HTMLFlipBook width={200} height={300} showCover={true}>
        {/* Cover Page */}
        <div className="page page-cover">
          <img src={coverImage} alt="Book Cover" />
          <h2 className="page-title">{title}</h2>
        </div>
        {/* Page 1 */}
        <div className="page">
          <img src={page1Image} alt="Page 1" />
        </div>
        {/* Page 2 */}
        <div className="page">
          <img src={page2Image} alt="Page 2" />
        </div>
        <div className="page">
          <img src={page3Image} alt="Page 2" />
        </div>
      </HTMLFlipBook>
    </div>
    </div>
   
  );
};

export default BookFlipSmall;
