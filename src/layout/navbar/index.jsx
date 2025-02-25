import React, { useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const [showNav, setShowNav] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 125);
        }
        window.addEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
       <header className={scrolled ? 'navbar-scroll' : ''}>
            
       </header>
    </>
  )
}

export default Navbar
