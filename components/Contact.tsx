
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../constants';

const GithubIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path></svg>;
const LinkedinIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>;

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    alert("Merci pour votre message ! Je vous répondrai bientôt.");
    e.currentTarget.reset();
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Entrer en <span className="text-brand-violet">Contact</span>
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-brand-dark-2/40 p-8 rounded-lg shadow-lg border border-gray-800">
          <h3 className="text-2xl font-bold mb-6 text-white">Envoyer un message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Votre nom" required className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-brand-violet"/>
            <input type="email" name="email" placeholder="Votre email" required className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-brand-violet"/>
            <textarea name="message" placeholder="Votre message" rows={5} required className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-brand-violet"></textarea>
            <button type="submit" className="w-full bg-brand-violet text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-purple transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20">
              Envoyer
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Mes Coordonnées</h3>
            <p className="text-gray-300 mb-6">N'hésitez pas à me contacter directement ou à me suivre sur les réseaux sociaux.</p>
            <div className="space-y-4">
                <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center space-x-3 text-gray-300 hover:text-brand-violet transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span>{personalInfo.contact.email}</span>
                </a>
                 <a href={`tel:${personalInfo.contact.phone}`} className="flex items-center space-x-3 text-gray-300 hover:text-brand-violet transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span>{personalInfo.contact.phone}</span>
                </a>
            </div>
            <div className="flex space-x-6 mt-8">
                <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-violet transition-colors"><GithubIcon /></a>
                <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-violet transition-colors"><LinkedinIcon /></a>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
