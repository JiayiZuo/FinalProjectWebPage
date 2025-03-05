import React from 'react';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import FeatureCard from '@/components/ui/FeatureCard';

const FeaturedSection = () => {
  const features = [
    {
      title: "Profile",
      description: "Personal information and skills",
      content: "A detailed look at my background, skills, and professional interests.",
      badges: ["React", "Next.js", "TypeScript", "UI/UX"],
      link: "/profile",
      animationDelay: "0s"
    },
    {
      title: "Experience",
      description: "Professional journey",
      content: "Led the development of an enterprise-grade application serving thousands of users.",
      extraContent: (
        <p className="text-muted-foreground mb-2">
          Latest Role: <span className="font-medium text-primary">Senior Developer at XYZ Company</span>
        </p>
      ),
      link: "/experience",
      animationDelay: "0.2s"
    },
    {
      title: "Current Work",
      description: "Ongoing projects and focus",
      content: "Working on cutting-edge technologies and solving complex engineering challenges.",
      extraContent: (
        <p className="text-muted-foreground mb-2">
          Company: <span className="font-medium text-primary">Current Employer</span>
        </p>
      ),
      link: "/current-work",
      animationDelay: "0.4s"
    },
    {
      title: "Engineering",
      description: "Technical topics and insights",
      content: "Explore selected engineering topics including architecture patterns, performance optimization, and more.",
      badges: ["System Design", "Algorithms"],
      link: "/engineering",
      animationDelay: "0.6s"
    }
  ];

  return (
    <section className="py-12 animate-slide-up">
      <SectionHeader icon={<Star className="h-6 w-6" />} title="Featured Sections" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            title={feature.title}
            description={feature.description}
            content={feature.content}
            badges={feature.badges}
            link={feature.link}
            animationDelay={feature.animationDelay}
            extraContent={feature.extraContent}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;