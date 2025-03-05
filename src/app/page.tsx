import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MoveRight, Mail, MapPin, Star, Code, Cpu, Zap } from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import VideoBackground from '@/components/ui/video-background';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Video Background */}
      <VideoBackground 
        src="/videos/background.mp4" 
      />

      {/* Navbar Component */}
      <Navbar />

      <main className="container mx-auto px-4 py-8 content-container">
        {/* Hero Section */}
        <section className="py-12 md:py-16 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-end">
              <div className="relative w-60 h-60 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/30 animate-glow">
                <Image 
                  src="/images/profile/avatar.jpg" 
                  alt="Profile Photo" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Hi, I&apos;m <span className="text-primary animate-pulse">Li, Xinlei</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                Software Engineer
              </h2>
              <p className="text-muted-foreground max-w-md">
                Passionate about building beautiful, functional, and user-friendly applications. 
                Specializing in frontend development with expertise in React, Next.js, and modern UI frameworks.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="sci-fi-button">
                  View Profile
                  <MoveRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="sci-fi-button">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="py-12 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Star className="mr-2 h-6 w-6 text-primary" />
            Featured Sections
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Profile Preview */}
            <Card className="card animate-float">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  Personal information and skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A detailed look at my background, skills, and professional interests.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary/20 text-primary-foreground border border-primary/30">React</Badge>
                  <Badge className="bg-primary/20 text-primary-foreground border border-primary/30">Next.js</Badge>
                  <Badge className="bg-primary/20 text-primary-foreground border border-primary/30">TypeScript</Badge>
                  <Badge className="bg-primary/20 text-primary-foreground border border-primary/30">UI/UX</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="sci-fi-button">
                  <Link href="/profile">Read more</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Experience Preview */}
            <Card className="card animate-float" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
                <CardDescription>
                  Professional journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Latest Role: <span className="font-medium text-primary">Senior Developer at XYZ Company</span>
                </p>
                <p className="text-muted-foreground mb-4">
                  Led the development of an enterprise-grade application serving thousands of users.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="sci-fi-button">
                  <Link href="/experience">Read more</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Current Work Preview */}
            <Card className="card animate-float" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle>Current Work</CardTitle>
                <CardDescription>
                  Ongoing projects and focus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Company: <span className="font-medium text-primary">Current Employer</span>
                </p>
                <p className="text-muted-foreground mb-4">
                  Working on cutting-edge technologies and solving complex engineering challenges.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="sci-fi-button">
                  <Link href="/current-work">Read more</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Engineering Topics Preview */}
            <Card className="card animate-float" style={{ animationDelay: "0.6s" }}>
              <CardHeader>
                <CardTitle>Engineering</CardTitle>
                <CardDescription>
                  Technical topics and insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Explore selected engineering topics including architecture patterns, performance optimization, and more.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="border border-primary/30">System Design</Badge>
                  <Badge variant="secondary" className="border border-primary/30">Algorithms</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="sci-fi-button">
                  <Link href="/engineering">Read more</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Skills Showcase */}
        <section className="py-12 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Cpu className="mr-2 h-6 w-6 text-primary" />
            Skills Showcase
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 card p-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="font-medium flex items-center">
                    <Code className="mr-2 h-4 w-4 text-primary" />
                    Frontend Development
                  </h3>
                  <span className="text-primary font-medium">95%</span>
                </div>
                <Progress value={95} className="sci-fi-progress h-2"/>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="font-medium flex items-center">
                    <Cpu className="mr-2 h-4 w-4 text-primary" />
                    Backend Development
                  </h3>
                  <span className="text-primary font-medium">85%</span>
                </div>
                <Progress value={85} className="sci-fi-progress h-2"/>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="font-medium flex items-center">
                    <Zap className="mr-2 h-4 w-4 text-primary" />
                    UI/UX Design
                  </h3>
                  <span className="text-primary font-medium">80%</span>
                </div>
                <Progress value={80} className="sci-fi-progress h-2"/>
              </div>
            </div>

            <div className="space-y-6 card p-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="font-medium flex items-center">
                    <Zap className="mr-2 h-4 w-4 text-primary" />
                    DevOps
                  </h3>
                  <span className="text-primary font-medium">75%</span>
                </div>
                <Progress value={75} className="sci-fi-progress h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="font-medium flex items-center">
                    <Cpu className="mr-2 h-4 w-4 text-primary" />
                    Cloud Services
                  </h3>
                  <span className="text-primary font-medium">80%</span>
                </div>
                <Progress value={80} className="sci-fi-progress h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="font-medium flex items-center">
                    <Code className="mr-2 h-4 w-4 text-primary" />
                    Project Management
                  </h3>
                  <span className="text-primary font-medium">90%</span>
                </div>
                <Progress value={90} className="sci-fi-progress h-2"/>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Projects */}
        <section className="py-12 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Star className="mr-2 h-6 w-6 text-primary" />
            Latest Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card overflow-hidden">
              <div className="h-48 bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                <Image 
                  src="/images/projects/project1.webp" 
                  alt="Project 1" 
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>E-commerce Platform</CardTitle>
                <CardDescription>A modern shopping experience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A full-featured e-commerce platform with product management, shopping cart, and payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-primary/30 text-primary">Next.js</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Prisma</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Stripe</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Vercel</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild className="sci-fi-button">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-5 w-5 text-primary" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="sci-fi-button">View Project</Button>
              </CardFooter>
            </Card>

            <Card className="card overflow-hidden">
              <div className="h-48 bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                <Image 
                  src="/images/projects/project2.webp" 
                  alt="Project 2" 
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Task Management App</CardTitle>
                <CardDescription>Stay organized and productive</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A collaborative task management application with real-time updates, notifications, and team workspaces.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-primary/30 text-primary">React</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Node.js</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Socket.io</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">MongoDB</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild className="sci-fi-button">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-5 w-5 text-primary" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="sci-fi-button">View Project</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Mail className="mr-2 h-6 w-6 text-primary" />
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>lixinlei@connect.hku.hk</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>The University of Hong Kong, Hong Kong</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card">
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="icon" asChild className="sci-fi-button animate-glow">
                    <a href="https://www.linkedin.com/in/xinlei-l-968057132/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedin className="h-5 w-5 text-primary" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="sci-fi-button animate-glow">
                    <a href="https://github.com/EricLee12118" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub className="h-5 w-5 text-primary" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;