import React from 'react';
import SectionWrapper from './SectionWrapper';
import TypingAnimation from './TypingAnimation';
import { personalInfo } from '../constants';

const Hero: React.FC = () => {
  return (
    <SectionWrapper id="home">
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        <div className="md:w-1/2 md:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Je suis <span className="text-brand-violet">{personalInfo.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl mt-4 text-gray-300">
            <TypingAnimation
              texts={[
                "Élève Ingénieure MGSI",
                "Développeuse Full-Stack",
                "Passionnée par l'IA",
              ]}
            />
            <span className="animate-ping">|</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto md:mx-0">
            {personalInfo.title}
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a href="#projects" className="bg-brand-violet text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-purple transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20">
              Voir mes projets
            </a>
            <a href={personalInfo.cvUrl} download target="_blank" rel="noopener noreferrer" className="border-2 border-brand-light-violet text-brand-light-violet font-semibold py-3 px-6 rounded-lg hover:bg-brand-light-violet hover:text-white transition-all duration-300 transform hover:scale-105">
              Télécharger mon CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          {/* Image / illustration à la place du formulaire (le formulaire est centralisé dans components/Contact.tsx) */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border border-gray-700">
            <img src="/images/me-pro.jpg" alt="Photo de Najat" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
