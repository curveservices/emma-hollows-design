import { useState, useEffect } from 'react';

const useScrollStates = () => {
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setSecond(scrollY > 150);
      setThird(scrollY > 1200);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { second, third };
};

export default useScrollStates;

