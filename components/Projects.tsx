
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { academicProjects } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-brand-dark-2/50 p-6 rounded-xl shadow-lg border border-gray-800/50 hover:border-brand-violet/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
        <div>
            <p className="text-sm text-gray-400">{project.period} | {project.context}</p>
            <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
            <p className="mt-3 text-gray-300 text-sm flex-grow">{project.description}</p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700/50 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
            <span key={index} className="bg-purple-900/50 text-brand-light-violet text-xs font-mono px-2 py-1 rounded">
                {tech}
            </span>
            ))}
        </div>
    </div>
);

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Projets <span className="text-brand-violet">Académiques</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {academicProjects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
