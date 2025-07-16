import React from 'react';
// import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

const HeroSection = () => (
  <section className="py-12 md:py-16 animate-fade-in">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center md:justify-end">
      <div className="border-4 border-primary/30 p-2 bg-black inline-block animate-glow max-w-[200px]">
       <video 
        src="/images/profile/avatar.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-auto block"
      />
      </div>

      </div>
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-primary animate-pulse">Medibot</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
         Intelligent Healthcare Assistant Platform
        </h2>
        <p className="text-muted-foreground max-w-md">
        MediBot is an innovative intelligent healthcare assistant platform 🌟. It is constructed based on cutting – edge large – language model technologies and undergoes meticulous fine – tuning with the efficient QLoRA method to incorporate professional medical knowledge.
        </p>
        <div className="flex gap-4 pt-4">
          <Button size="lg" className="sci-fi-button">
            View More
            <MoveRight className="ml-2 h-4 w-4" />
          </Button>
          {/* <Button size="lg" className="sci-fi-button">
            Download Resume
          </Button> */}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;