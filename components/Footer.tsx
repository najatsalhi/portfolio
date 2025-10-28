
import React from 'react';
import { personalInfo } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-2/50 py-6 mt-16 border-t border-gray-800">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
