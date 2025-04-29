import React from 'react';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/main_page/SectionHeader';
import FeatureCard from '@/components/main_page/FeatureCard';

const FeaturedSection = () => {
  const features = [
    {
      title: "Interests and Hobbies",
      description: "What I like to do in my free time",
      content: "Addicted to sports and unable to extricate myself. Even thinking of physical labor sometime.",
      badges: ["Tennis", "Climbing", "Diving", "Surfing", "Skiing", "Hiking"],
      link: "/hobbies",
      animationDelay: "0s"
    },
    {
      title: "Basic Skills",
      description: "Technical skills & Language skills",
      content: "A detailed look at my technical skills, language skills and professional interests.",
      badges: ["Golang", "Python", "PHP", "MySQL", "Redis", "MQ", "MongoDB"],
      link: "/skills",
      animationDelay: "0s"
    },
    {
      title: "Experience",
      description: "What I have done in the past",
      content: "Backend developer at Beijing Didi Infinite Technology Development Co., Ltd. Responsible for...",
      badges: ["Car Hailing", "User Growth", "exaggerated OT"],
      link: "/experience",
      animationDelay: "0s"
    },
    {
      title: "Future",
      description: "What will the future look like",
      content: "Still interested in backend development. Looking for positions related to Crypto.",
      badges: ["Backend", "Crypto", "BlockChain", "Solidity", "Rust", "I can do anything"],
      link: "/future",
      animationDelay: "0.4s"
    }
  ];

  return (
    <section className="py-12 animate-slide-up">
      <SectionHeader icon={<Star className="h-6 w-6" />} title="About Myself" />
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