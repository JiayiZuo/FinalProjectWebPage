import React from 'react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import VideoBackground from '@/components/ui/video-background';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedSection from '@/components/sections/FeaturedSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Video Background */}
      <VideoBackground src="/videos/background.mp4" />

      {/* Navbar Component */}
      <Navbar />

      <main className="container mx-auto px-4 py-8 content-container">
        <HeroSection />
        <FeaturedSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;