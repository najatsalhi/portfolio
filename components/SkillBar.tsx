
import React, { useState, useRef, useEffect } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => {
      if (barRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(barRef.current);
      }
    };
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-300">{skill}</span>
        <span className="text-sm font-medium text-gray-400">{level}%</span>
      </div>
      <div ref={barRef} className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-brand-violet to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
