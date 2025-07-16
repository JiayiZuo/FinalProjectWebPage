import React from 'react';
import Navbar from '@/components/main_page/Navbar';
import Footer from '@/components/main_page/Footer';
import VideoBackground from '@/components/main_page/VideoBackground';
import HeroSection from '@/components/main_page/sections/HeroSection';
import FeaturedSection from '@/components/main_page/sections/FeaturedSection';
// import SkillsSection from '@/components/main_page/sections/SkillsSection';
// import ProjectsSection from '@/components/main_page/sections/ProjectsSection';
import ContactSection from '@/components/main_page/sections/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <VideoBackground src="/videos/background.mp4" />
      <Navbar />

      <main className="container mx-auto px-4 py-8 content-container">
        <HeroSection />
        <FeaturedSection />
        {/* <SkillsSection /> */}
        {/* <ProjectsSection /> */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;