
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { skillsData } from '../constants';
import SkillBar from './SkillBar';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Compétences <span className="text-brand-violet">Professionnelles</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {skillsData.map((category) => (
          <div key={category.title} className="bg-brand-dark-2/40 p-6 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-xl font-bold text-brand-light-violet mb-4">{category.title}</h3>
            {category.skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
            ))}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
