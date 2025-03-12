// components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoonStar, Sun, SunDim } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useTheme } from '@/providers/ThemeProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); 
  const [brightness, setBrightness] = useState(100); 
  const overlayOpacity = (100 - brightness) / 100;

  return (
    <>
      {/* Brightness Overlay */}
      <div 
        className="fixed inset-0 bg-black pointer-events-none z-[9999] transition-opacity duration-300"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Navbar Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="font-bold text-xl">
            <Link href="/" className="text-primary hover:opacity-80 transition-opacity">Li, Xinlei</Link>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/profile" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Profile
            </Link>
            <Link href="/experience" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Experience
            </Link>
            <Link href="/current-work" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Current Work
            </Link>
            <Link href="/engineering" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Engineering
            </Link>
          </nav>
          
          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Brightness Slider */}
            <div className="hidden md:flex items-center gap-2 px-2 py-1 bg-background/50 backdrop-blur-sm rounded-full border border-border/30">
              <SunDim className="h-4 w-4 text-primary" />
              <Slider
                value={[brightness]}
                onValueChange={(values) => setBrightness(values[0])}
                max={100}
                min={20}
                step={5}
                className="w-24 h-2"
              />
              <Sun className="h-4 w-4 text-primary" />
            </div>
            
            {/* Theme Toggle Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Toggle Theme" 
              className="sci-fi-button" 
              onClick={toggleTheme}
            >
              {theme === 'light' ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-primary transition-transform duration-300 ease-in-out" />
              ) : (
                <MoonStar className="h-[1.2rem] w-[1.2rem] text-primary transition-transform duration-300 ease-in-out" />
              )}
            </Button>
            
            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="sci-fi-button"
                onClick={() => {
                  setBrightness(prev => (prev === 40 ? 60 : prev === 60 ? 80 : 40));
                }}
              >
                <SunDim className="h-5 w-5 text-primary" />
              </Button>
              
              <Button variant="outline" className="sci-fi-button" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu text-primary">
                  <line x1="4" x2="20" y1="12" y2="12"/>
                  <line x1="4" x2="20" y1="6" y2="6"/>
                  <line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;