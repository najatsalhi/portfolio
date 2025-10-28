
import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#experience', label: 'Expériences' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center py-4">
        <a href="#home" className="text-2xl font-bold text-white">
          <span className="text-brand-violet">N</span>S
        </a>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-brand-violet transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-brand-dark/95 backdrop-blur-lg flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        <nav className="flex flex-col space-y-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-3xl text-gray-300 hover:text-brand-violet transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
