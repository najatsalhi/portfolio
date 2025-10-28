
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { certificationsData } from '../constants';
import type { Certification } from '../types';

const CertificationIcon = () => (
    <svg className="w-8 h-8 text-brand-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
    </svg>
);


const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => (
    <div className="bg-brand-dark-2/40 p-6 rounded-lg shadow-lg border border-gray-800 flex items-center space-x-4">
        <CertificationIcon />
        <div>
            <h3 className="text-lg font-bold text-white">{cert.title}</h3>
            <p className="text-brand-light-violet">{cert.issuer} - <span className="text-gray-400">{cert.date}</span></p>
        </div>
    </div>
);


const Certifications: React.FC = () => {
  return (
    <SectionWrapper id="certifications">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-brand-violet">Certifications</span>
      </h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
        {certificationsData.map((cert, index) => (
          <CertificationCard key={index} cert={cert} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
