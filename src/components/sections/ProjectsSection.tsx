import React from 'react';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import ProjectCard from '@/components/ui/ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern shopping experience",
      content: "A full-featured e-commerce platform with product management, shopping cart, and payment processing.",
      technologies: ["Next.js", "Prisma", "Stripe", "Vercel"],
      image: "/images/projects/project1.webp",
      githubUrl: "https://github.com",
      demoUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Stay organized and productive",
      content: "A collaborative task management application with real-time updates, notifications, and team workspaces.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/images/projects/project2.webp",
      githubUrl: "https://github.com",
      demoUrl: "#"
    }
  ];

  return (
    <section className="py-12 animate-slide-up">
      <SectionHeader icon={<Star className="h-6 w-6" />} title="Latest Projects" />
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