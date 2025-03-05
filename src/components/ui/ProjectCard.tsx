import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  content: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  content, 
  technologies, 
  image, 
  githubUrl, 
  demoUrl 
}: ProjectCardProps) => (
  <Card className="card overflow-hidden">
    <div className="h-48 bg-muted relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
      <Image 
        src={image} 
        alt={title} 
        fill
        className="object-cover"
      />
    </div>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4">{content}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="border-primary/30 text-primary">
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline" size="sm" asChild className="sci-fi-button">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub className="mr-2 h-4 w-4" />
          Code
        </a>
      </Button>
      <Button size="sm" className="sci-fi-button" asChild>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </Button>
    </CardFooter>
  </Card>
);

export default ProjectCard;