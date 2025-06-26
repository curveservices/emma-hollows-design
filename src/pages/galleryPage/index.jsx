import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/loadingSpinner';
import { db } from '../../../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import Button from '../../components/button';
import ReactImageGallery from 'react-image-gallery';
import Helmet from '../../components/helmet';
import './index.scss';

const GalleryPage = () => {
    const { galleryID } = useParams();
    const [galleryData, setGalleryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGalleryData = async () => {
            setLoading(true);
            setError(false);
            try {
                const docRef = doc(db, 'galleries', galleryID);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    let imagesArray = data.images || [];

                    const formattedImages = imagesArray.map(imgStr => {
                if (typeof imgStr === 'string') {
                    try {
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
                return imgStr; 
            }).filter(Boolean);

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
    if (error || !galleryData) return <div className="error-message"><h1>Gallery not found.</h1><Button link="/" text="Back to home" background="var(--secondary)"/></div>;
    
    
  return (
    <div className="gallery-page">
      <section className="hero">
        <div className="text-box">
          <h1 className="main-title">{galleryData.galleryName}</h1>
          <div className="subtitle">{galleryData.heroSubtitle}</div>
          <div className="subtitle">{galleryData.subtitle}</div>
        </div>
      </section>
      <section className="second-section">
        <div className="btn-container">
          <Button text="Go Back" onClick={() => navigate(-1)} />
        </div>
        <ReactImageGallery items={galleryData.images} autoPlay />
        <div className="text-box">
          <p className="info">
            {galleryData.info}
            {galleryData.link && (
              <a
                href={galleryData.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "underline",
                  color: "var(--secondary)",
                }}
              >
                view here
              </a>
            )}
          </p>
        </div>
      </section>
      <Helmet
        title={`${galleryData.galleryName} | London Costume Desgin for Theatre and Film`}
        description="Emma Hollows Desgin, I am a costume and set designer and maker currently working on London's West End"
        keywords="London's West-end, theatre, costume designer, costume maker, set designer, London, theatre"
      />
    </div>
  );
}

export default GalleryPage
