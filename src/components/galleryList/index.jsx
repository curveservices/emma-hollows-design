// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { db } from '../../../firebase.config';
// import { collection, getDocs } from 'firebase/firestore';

// const GalleryList = () => {
//     const [galleries, setGalleries] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);

//     useEffect(() => {
//         const fetchGalleries = async () => {
//             try {
//                 const galleryCollection = collection(db, 'galleries');
//                 const snapshot = await getDocs(galleryCollection);
//                 const galleryList = snapshot.docs.map(doc => ({
//                     id: doc.id, // Firestore document ID (gallery ID)
//                     name: doc.data().galleryName, // Gallery title
//                     heroImage: doc.data().heroImage, // Hero image
//                 }));
//                 setGalleries(galleryList);
//             } catch (error) {
//                 console.error("Error fetching galleries:", error);
//                 setError(true);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchGalleries();
//     }, []);

//     if (loading) return <div>Loading galleries...</div>;
//     if (error) return <div>Failed to load galleries.</div>;

//     return (
//         <div className="gallery-list">
//             <div className="gallery-grid">
//                 {galleries.map(gallery => (
//                     <Link key={gallery.id} to={`:id/${gallery.id}`} className="gallery-item">
//                         <img src={gallery.heroImage} alt={gallery.name} className="gallery-thumbnail" />
//                         <h3>{gallery.name}</h3>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default GalleryList;
