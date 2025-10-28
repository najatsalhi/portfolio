
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { professionalExperiences } from '../constants';
import type { Experience } from '../types';

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
  <div className="relative pl-8 sm:pl-12 py-4 group">
    <div className="absolute left-0 top-4 h-full border-l-2 border-brand-violet/30"></div>
    <div className="absolute left-[-9px] top-4 w-5 h-5 bg-brand-dark border-2 border-brand-violet rounded-full transition-transform duration-300 group-hover:scale-125"></div>
    <div className="bg-brand-dark-2/40 p-6 rounded-lg shadow-lg border border-gray-800 hover:border-brand-violet/50 transition-all duration-300 transform hover:-translate-y-1">
      <p className="text-sm text-gray-400">{experience.period}</p>
      <h3 className="text-xl font-bold text-white mt-1">{experience.role}</h3>
      <p className="text-brand-light-violet font-semibold">{experience.company}</p>
      <p className="mt-3 text-gray-300">{experience.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies.map((tech, index) => (
          <span key={index} className="bg-purple-900/50 text-brand-light-violet text-xs font-mono px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);


const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Expériences <span className="text-brand-violet">Professionnelles</span>
      </h2>
      <div className="max-w-3xl mx-auto">
        {professionalExperiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
