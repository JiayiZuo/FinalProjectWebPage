// import React, { ReactNode } from 'react';
import React from 'react';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  content: string;
  badges?: string[];
  link: string;
  animationDelay?: string;
  // extraContent?: ReactNode;
}

const FeatureCard = ({ 
  title, 
  description, 
  content, 
  badges, 
  link, 
  animationDelay,
  // extraContent
}: FeatureCardProps) => (
  <Card 
    className="card animate-float" 
    style={animationDelay ? { animationDelay } : undefined}
  >
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4">{content}</p>
      {badges && badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((badge, index) => (
            <Badge 
                key={index} 
                className="bg-primary/70 text-primary-foreground border-none shadow-md shadow-primary/30 hover:bg-primary transition-all"
            >
                {badge}
            </Badge>
          ))}
        </div>
      )}
      {/* {extraContent} */}
    </CardContent>
    <CardFooter>
      {/* <Button variant="outline" asChild className="sci-fi-button">
        <Link href={link}>Read more</Link>
      </Button> */}
    </CardFooter>
  </Card>
);

export default FeatureCard;