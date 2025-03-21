import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/loadingSpinner';
import { db } from '../../../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import Button from '../../components/button';
import ReactImageGallery from 'react-image-gallery';
import './index.scss';

const GalleryPage = () => {
    const { galleryID } = useParams();
    const [galleryData, setGalleryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchGalleryData = async () => {
            setLoading(true);
            setError(false);
            try {
                const docRef = doc(db, 'galleries', galleryID);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    console.log('Fetch Data', data);
                    let imagesArray = data.images || [];

                    const formattedImages = imagesArray.map(imgStr => {
                if (typeof imgStr === 'string') {
                    try {
                        // Convert the string to an object manually
                        const obj = {};
                        imgStr.split(', ').forEach(pair => {
                            const [key, value] = pair.split(': ');
                            obj[key.trim()] = value.replace(/['"]/g, ''); // Remove quotes
                        });
                        return obj;
                    } catch (error) {
                        console.error('Error parsing image string:', imgStr, error);
                        return null;
                    }
                }
                return imgStr; // If it's already an object, return as-is
            }).filter(Boolean); // Remove null values if any parsing fails

            console.log('Formatted Images:', formattedImages);

            setGalleryData({ ...data, images: formattedImages });
                } else {
                    console.log('No such document!');
                    setError(true);
                }
            } catch (error) {
                console.error('Error getting document:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
            
        };
        fetchGalleryData();
    }, [galleryID]);

    if (loading) return <LoadingSpinner />;
    if (error || !galleryData) return <div className="error-message">Gallery not found.</div>;
    
    
  return (
      <div className='gallery-page'>
          <section className="hero">
              <img
                  src={galleryData.heroImage} 
                  alt="Emma Hollows Design, designer, west-end London"
                  className='hero-image'
              />
              <div className="text-box">
                  <h1 className="main-title">{galleryData.galleryName}</h1>
                  <div className="subtitle">{galleryData.heroSubtitle}</div>
                  <div className="btn-container">
                    <Button
                        text="work with me"
                        link="/contact"
                        background="var(--secondary)"
                    />
                    <Button
                        text="My Portfolio"
                        link="/portfolio"
                        color="#fff"
                    />
                </div>
              </div>
          </section>
          <section className="second-section">
              <div className="text-box">
                  <div className="subtitle">{galleryData.subtitle}</div>
                  <h2>{galleryData.galleryName}</h2>
                  <p>
                      {galleryData.info}
                  </p>
              </div>
              <ReactImageGallery items={galleryData.images} />
          </section>
      
    </div>
  )
}

export default GalleryPage
