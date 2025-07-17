import React from 'react';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/main_page/SectionHeader';
import FeatureCard from '@/components/main_page/FeatureCard';

const FeaturedSection = () => {
  const features = [
    {
      title: "Objective",
      description: "Basic Technoloy Stack of Medibot",
      content: "Developed a WeChat mini-program that integrates AI technologies to enhance user experience, incorporating backend logic for intelligent processing and ensuring reliable data persistence through a structured database system.",
      badges: ["Mini-program", "AI", "Backend"],
      link: "/hobbies",
      animationDelay: "0s"
    },
    {
      title: "Core Technoloy",
      description: "Improvement of existing AI",
      content: "Built and deployed a WeChat mini-program powered by AI capabilities using DeepSeek and LoRA fine-tuning techniques. Backend was developed with Python Flask to handle logic, supporting real-time user interactions and intelligent responses.",
      badges: ["DeepSeek", "LoaRA"],
      link: "/skills",
      animationDelay: "0s"
    },
    {
      title: "Achievements",
      description: "What we have done",
      content: "User authentication and management; AI-driven intelligent dialogue; preliminary diagnosis generation; health record management; consultation history tracking.",
      badges: ["AI-driven", "User Management", "Diagnosis"],
      link: "/experience",
      animationDelay: "0s"
    },
    {
      title: "Value Position",
      description: "Value of Medibot",
      content: "The distribution of medical resources in China is uneven; There is a growing public need for convenient and professional medical consultation.",
      badges: ["Medical Resource", "Consultation"],
      link: "/future",
      animationDelay: "0.4s"
    }
  ];

  return (
    <section className="py-12 animate-slide-up">
      <SectionHeader icon={<Star className="h-6 w-6" />} title="Introduction" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            title={feature.title}
            description={feature.description}
            content={feature.content}
            badges={feature.badges}
            animationDelay={feature.animationDelay}
            // extraContent={feature.extraContent}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;