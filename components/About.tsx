
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { personalInfo, educationData, softSkills, languages } from '../constants';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        À Propos de <span className="text-brand-violet">Moi</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Profile */}
        <div className="lg:col-span-3 bg-brand-dark-2/50 p-8 rounded-2xl shadow-lg border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-brand-light-violet">Profil</h3>
          <p className="text-gray-300 leading-relaxed">{personalInfo.profile}</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
                <h4 className="text-xl font-semibold mb-4 text-brand-light-violet">Soft Skills</h4>
                <ul className="space-y-2">
                    {softSkills.map((skill, index) => (
                        <li key={index} className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-brand-violet" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-xl font-semibold mb-4 text-brand-light-violet">Langues</h4>
                <ul className="space-y-2">
                    {languages.map((lang, index) => (
                        <li key={index} className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-brand-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m4 13l4-4M19 9l-4 4M9 12l2 2m-2-2l-2-2"></path></svg>
                            <span><strong>{lang.lang}:</strong> {lang.level}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </div>

        </div>

        {/* Education */}
        <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-brand-light-violet text-center lg:text-left">Formation</h3>
            <div className="relative border-l-2 border-brand-violet/50 pl-6 space-y-8">
                {educationData.map((edu, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-[34px] top-1 w-4 h-4 bg-brand-violet rounded-full border-2 border-brand-dark"></div>
                        <p className="font-semibold text-gray-400">{edu.period}</p>
                        <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                        <p className="text-brand-light-violet">{edu.institution}</p>
                        {edu.details && <p className="text-sm text-gray-400 mt-1">{edu.details}</p>}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
