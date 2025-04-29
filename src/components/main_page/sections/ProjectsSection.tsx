import React from 'react';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/main_page/SectionHeader';
import ProjectCard from '@/components/main_page/ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Decentralized Voting DApp",
      description: "A blockchain-based voting DApp with zero-knowledge proofs (ZK-SNARKs) for anonymity.",
      content: "This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.",
      technologies: ["Solidity", "React", "Hardhat"],
      image: "/images/projects/project1.jpg",
      githubUrl: "https://github.com/JiayiZuo/Crypto",
      demoUrl: "#"
    },
    {
      title: "Clothes Management",
      description: "A clothes management system. Helping you remember all the clothes you have and your most frequently matching.",
      content: "This project can help you record your clothes and favorite Clothing Matching. Including intelligent matching recommendation. No more worrying about what to wear to work tomorrow.",
      technologies: ["Swift", "Python", "AI", "MySQL"],
      image: "/images/projects/project2.jpg",
      githubUrl: "https://github.com/JiayiZuo/PersonalProject",
      demoUrl: "#"
    },
    {
      title: "Meditbox Health Platform",
      description: "An online consultation platform. Get healthy informations and instructions quickly.",
      content: "Chat online with robots to find possible causes and treatment plans based on one's own illness. Using large models to improve answer accuracy. Can create personal health records and establish consultation records.",
      technologies: ["React", "Python", "AI", "MySQL", "MongoDB"],
      image: "/images/projects/project3.jpg",
      githubUrl: "https://github.com/JiayiZuo/FinalProject",
      demoUrl: "#"
    },
    {
      title: "Self Introduction Website",
      description: "Know something about Miss Zuo. Hobbies, technical skills and experiences.",
      content: "A personal project using react.js and next.js. You can find details about Miss Zuo here. Technical skills and experiences. Different images at work and after work. Rich and colorful life.",
      technologies: ["React.js", "Next.js"],
      image: "/images/projects/project4.jpg",
      githubUrl: "https://github.com/JiayiZuo/Self-Introduction",
      demoUrl: "#"
    }
  ];

  return (
    <section className="py-12 animate-slide-up">
      <SectionHeader icon={<Star className="h-6 w-6" />} title="Projects" />
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            content={project.content}
            technologies={project.technologies}
            image={project.image}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;