import React from 'react';
import { Cpu, Code, Zap } from 'lucide-react';
import SectionHeader from '@/components/main_page/SectionHeader';
import SkillBar from '@/components/main_page/SkillBar';

const SkillsSection = () => {
  const frontendSkills = [
    { name: "Backend Development", percentage: 90, icon: <Cpu /> },
    { name: "Golang", percentage: 90, icon: <Code /> },
    { name: "Python", percentage: 90, icon: <Zap /> }
  ];
  
  const backendSkills = [
    { name: "MySQL", percentage: 80, icon: <Zap /> },
    { name: "Redis", percentage: 80, icon: <Cpu /> },
    { name: "Docker", percentage: 80, icon: <Code /> }
  ];

  return (
    <section className="py-12 animate-slide-up">
      <SectionHeader icon={<Cpu className="h-6 w-6" />} title="Skills" />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 card p-6">
          {frontendSkills.map((skill, index) => (
            <SkillBar 
              key={index}
              name={skill.name}
              percentage={skill.percentage}
              icon={skill.icon}
            />
          ))}
        </div>

        <div className="space-y-6 card p-6">
          {backendSkills.map((skill, index) => (
            <SkillBar 
              key={index}
              name={skill.name}
              percentage={skill.percentage}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;