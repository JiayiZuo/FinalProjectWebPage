import React from 'react';
import { Cpu, Code, Zap } from 'lucide-react';
import SectionHeader from '@/components/main_page/SectionHeader';
import SkillBar from '@/components/main_page/SkillBar';

const SkillsSection = () => {
  const frontendSkills = [
    { name: "Frontend Development", percentage: 95, icon: <Code /> },
    { name: "Backend Development", percentage: 85, icon: <Cpu /> },
    { name: "UI/UX Design", percentage: 80, icon: <Zap /> }
  ];
  
  const backendSkills = [
    { name: "DevOps", percentage: 75, icon: <Zap /> },
    { name: "Cloud Services", percentage: 80, icon: <Cpu /> },
    { name: "Project Management", percentage: 90, icon: <Code /> }
  ];

  return (
    <section className="py-12 animate-slide-up">
      <SectionHeader icon={<Cpu className="h-6 w-6" />} title="Skills Showcase" />
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