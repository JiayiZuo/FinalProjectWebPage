'use client'

import React, { useEffect, useRef, useState, useMemo } from 'react'
import Navbar from '@/components/main_page/Navbar'
import Footer from '@/components/main_page/Footer'
import { Button } from '@/components/ui/button'
import { ChevronDown, Database, LineChart, Lock, MessageSquare, Search, Server, User } from 'lucide-react'

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      if (ref.current) observer.disconnect()
    }
  }, [delay])
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  )
}

const ExperiencePage: React.FC = () => {  
  const [typedText, setTypedText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  
  const texts = useMemo(() => [
    "Mining insights from user comments",
    "Building data analysis pipelines",
    "Extracting valuable information from social data"
  ], []);
  
  useEffect(() => {
    const currentText = texts[textIndex]
    let charIndex = 0
    
    const typingInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setTypedText(currentText.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typingInterval)
        
        setTimeout(() => {
          const eraseInterval = setInterval(() => {
            if (charIndex > 0) {
              charIndex--
              setTypedText(currentText.slice(0, charIndex))
            } else {
              clearInterval(eraseInterval)
              setTextIndex((prev) => (prev + 1) % texts.length)
            }
          }, 30)
        }, 2000)
      }
    }, 100)
    
    return () => clearInterval(typingInterval)
  }, [textIndex, texts])
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background to-background via-primary/5"></div>
      
      <section className="relative h-[70vh] flex items-center justify-center text-center p-4">
        <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm z-0"></div>
        <div className="container z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">
            Bilibili Comment Crawler
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-8">
            <p className="text-xl md:text-2xl text-foreground/80">
              {typedText}
              <span className="border-r-2 border-primary ml-1 animate-blink"></span>
            </p>
          </div>
          
          <Button 
            size="lg" 
            onClick={() => {
              document.getElementById('project-details')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Explore Project
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
      
      <section id="project-details" className="py-20">
        <div className="container px-4 mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">
              Project Overview
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              An advanced data extraction and analysis system designed to collect comment data from Bilibili,
              one of China largest video platforms, to gain insights into user sentiments and engagement patterns.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <FadeIn delay={200} className="space-y-10">
              <h3 className="text-2xl font-semibold mb-6">Project Timeline</h3>
              
              <div className="space-y-6 border-l-2 border-primary/30 pl-6">
                {[
                  { title: "Initial Planning", date: "March 2022", description: "Analyzed Bilibili comment structure and API endpoints" },
                  { title: "Architecture Design", date: "April 2022", description: "Designed crawler modules and database schema" },
                  { title: "Development Phase", date: "May-July 2022", description: "Implemented core functionalities and anti-crawler mechanisms" },
                  { title: "Testing & Optimization", date: "August 2022", description: "Performance testing and system optimization" },
                  { title: "Deployment", date: "September 2022", description: "Deployed on cloud infrastructure with automated scheduling" }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] mt-1.5 w-3.5 h-3.5 bg-primary rounded-full"></div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="font-medium text-primary/80 mb-1">{item.date}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={300} className="space-y-10">
              <h3 className="text-2xl font-semibold mb-6">Technical Challenges</h3>
              
              <div className="space-y-6">
                {[
                  { 
                    title: "Anti-Crawler Mechanisms", 
                    description: "Bilibili implements sophisticated anti-bot measures including IP rate limiting, JavaScript verification, and user behavior analysis.",
                    icon: <Lock className="h-8 w-8 text-violet-500" />
                  },
                  { 
                    title: "Data Volume Management", 
                    description: "Processing and storing millions of comments efficiently required optimized database schemas and indexing strategies.",
                    icon: <Database className="h-8 w-8 text-violet-500" /> 
                  },
                  { 
                    title: "Dynamic Content Loading", 
                    description: "Comments are loaded dynamically via AJAX calls, requiring reverse engineering of API parameters and payload structures.",
                    icon: <MessageSquare className="h-8 w-8 text-violet-500" /> 
                  },
                  { 
                    title: "Performance Optimization", 
                    description: "Balancing crawling speed with resource usage and avoiding detection required careful throttling and parallel processing.",
                    icon: <Server className="h-8 w-8 text-violet-500" /> 
                  }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">
              Results & Insights
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              Analysis of the extracted data revealed unique patterns in user engagement and sentiment across different content types.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "3.5M+", label: "Comments Collected", icon: <MessageSquare className="h-8 w-8 text-primary" /> },
              { number: "25K+", label: "Unique Users", icon: <User className="h-8 w-8 text-primary" /> },
              { number: "850+", label: "Videos Analyzed", icon: <Search className="h-8 w-8 text-primary" /> }
            ].map((stat, i) => (
              <FadeIn key={i} delay={200 + i * 100}>
                <div className="bg-card p-6 rounded-lg border border-border flex items-center shadow-sm">
                  <div className="mr-4 p-3 rounded-full bg-primary/10">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={400}>
            <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border p-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <LineChart className="h-6 w-6 mr-3 text-primary" />
                Key Findings
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Comment Engagement Patterns",
                    description: "User engagement peaked during evenings (7-10 PM), with gaming and anime content receiving 3x more comments than educational videos."
                  },
                  {
                    title: "Sentiment Analysis",
                    description: "Using NLP techniques, we found that 65% of comments were positive, 25% neutral, and 10% negative across all analyzed videos."
                  },
                  {
                    title: "User Behavior",
                    description: "Higher level users (Lv.5+) were more likely to leave substantive comments, while lower level accounts tended toward shorter responses."
                  },
                  {
                    title: "Content Correlation",
                    description: "Videos with frequent edits and high production quality correlated with more positive sentiment in the comment section."
                  }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="border-l-4 border-primary/70 pl-6 transition-all duration-300 hover:bg-primary/5 rounded-r-md"
                  >
                    <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <section className="py-20 bg-primary/5">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">
              Technical Skills Developed
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                "Python", "MongoDB", "API Reverse Engineering", "Multi-threading", 
                "Data Mining", "Anti-Crawler Techniques", "Web Scraping", 
                "Data Analysis", "NoSQL Database", "Sentiment Analysis"
              ].map((skill, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-colors text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <p className="text-lg text-muted-foreground mb-10">
              This project not only demonstrated technical proficiency in data extraction and analysis but also provided 
              valuable insights into social media user behavior and content engagement patterns.
              The methodologies developed can be applied to other platforms for broader digital media research.
            </p>
            
            <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View Full Project
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ExperiencePage