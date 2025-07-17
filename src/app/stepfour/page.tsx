'use client'

import React, { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/main_page/Navbar'
import Footer from '@/components/main_page/Footer'
// import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  // ChevronLeft, 
  // ChevronRight, 
  Code, 
  Database, 
  Languages, 
  LineChart, 
  MessageSquare, 
  Building,
  // GitBranch,
  // GitCommit,
  // GitPullRequest,
  // CheckCircle
} from 'lucide-react'

// Simplified fade-in animation component
const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}> = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
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

  // Simplified transform logic
  const transforms = {
    up: `translateY(${isVisible ? 0 : 40}px)`,
    down: `translateY(${isVisible ? 0 : -40}px)`,
    left: `translateX(${isVisible ? 0 : 40}px)`,
    right: `translateX(${isVisible ? 0 : -40}px)`
  }
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: transforms[direction]
      }}
    >
      {children}
    </div>
  )
}

const WorkExperiencePage: React.FC = () => {
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <Badge className="mb-4 text-xs px-3 py-1" variant="outline">Medical Assisant</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                MediBot<br></br> Intelligent Healthcare Assistant Platform<br></br>
              </h1>
              <div className="flex items-center mb-6 text-muted-foreground">
                <Building className="h-5 w-5 mr-2" />
                <span className="text-lg">The University of Hong Kong</span>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With the growing use of Large Language Models (LLMs) in various fields, their potential in healthcare is increasingly evident. However, general LLMs lack domain expertise, are costly to deploy, and struggle to provide personalized advice. This project addresses these issues by building an intelligent medical assistant based on personalized health records and fine-tuned LLMs using QLoRA, enabling low-cost adaptation for medical tasks with structured outputs. By integrating health data (e.g., allergies, chronic conditions), the system generates personalized consultation suggestions. The architecture features a WeChat Mini Program frontend and a Flask-based backend, with vLLM used for efficient model inference. A complete prototype system was developed, demonstrating the feasibility of this approach for cost-effective, personalized medical consultation.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Large Language Model", "Intelligent Consultation", "Personalization", "QLoRA","vLLM", "WeChat Mini Program"].map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Company logo/image placeholder */}
            <div className="md:w-1/2 flex justify-center">
  <div className="relative w-full max-w-md h-150 bg-card rounded-xl overflow-hidden shadow-lg border border-border">
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
    <div className="w-full h-full flex items-center justify-center">
      <div className="border-4 border-primary/30 p-2 bg-black inline-block animate-glow">
        <video 
          src="/images/profile/avatar.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="max-w-[200px] h-auto block"
        />
      </div>
      <div className="absolute bottom-6 left-6 z-20 text-white">
        <h3 className="text-xl font-bold">Medical Assistant</h3>
        <p className="text-sm opacity-80">Your personal medical butler</p>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
      
      {/* Responsibilities Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Summary of Medibot Project</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Intelligent Healthcare Assistant Platform
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Explore and practice cost-effective domain model fine-tuning methods",
                description: "1.Aiming at the problem of high training costs when large models are applied in vertical fields, this project intends to adopt Parameter-Efficient Fine-Tuning (PEFT) technology, especially QLoRA (Quantized Low-Rank Adaptation), to fine-tune open-source large language models. The goal is to verify that this method can effectively inject professional knowledge in the medical field, consultation logic, and structured output capabilities into the model with limited computing resources."
              },
              {
                icon: <Languages className="h-6 w-6 text-primary" />,
                title: "Design and implement an inquiry mechanism driven by personalized health records",
                description: "One of the core innovations of this project is to realize truly personalized consultations. The goal is to design a set of data models and business logic that can integrate users' health records. In the interaction with the model, personal health status will be dynamically incorporated into the prompt as key context information, thereby guiding the model to generate questions and suggestions that are highly relevant to users' individual situations."
              },
              {
                icon: <LineChart className="h-6 w-6 text-primary" />,
                title: "Develop a fully functional full-stack prototype system",
                description: "3.To verify the end-to-end feasibility of the technical solution, this project will develop a complete application prototype. The goals include: a user-friendly WeChat Mini Program front-end for user interaction and data input; a stable and reliable back-end server based on the Flask framework for processing business logic and data persistence; and a high-performance model inference service deployed based on the vLLM framework to ensure a smooth user experience."
              },
              {
                icon: <MessageSquare className="h-6 w-6 text-primary" />,
                title: "Evaluate the comprehensive performance of the fine-tuned model and the system",
                description: "Conduct qualitative and quantitative evaluations of the project results. The goals are: at the technical level, evaluate the improvements in efficiency (training cost, inference speed) brought by QLoRA fine-tuning and vLLM deployment; at the application level, verify the effectiveness, accuracy, and practicality of the system in simulated consultation scenarios through functional tests and effect evaluations."
              },
              {
                icon: <Database className="h-6 w-6 text-primary" />,
                title: "Experimental Results",
                description: "In this experiment, we directly adopted medical field instruction fine-tuning samples generated based on the OpenGPT framework. These samples were constructed by OpenGPT in combination with professional medical data provided by NHS.UK (National Health Service), featuring high domain relevance and accuracy, and are suitable for model fine-tuning tasks in the medical and health field. Finally, we converted the data generated by OpenGPT into data in Alpaca format."
              },
              {
                icon: <Building className="h-6 w-6 text-primary" />,
                title: "Future Work",
                description: "Expand the model to support the analysis of images uploaded by users (such as photos of rashes and laboratory test sheets) to achieve multimodal diagnosis. Build a medical knowledge base to conduct real-time verification of key information generated by the model, further improving reliability. Develop a doctor-side interface to push the preliminary diagnosis summary generated by AI to real doctors for review and correction, forming a human-machine collaborative working mode."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} className="h-full">
                <Card className="h-full border-border hover:border-primary/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 p-1 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default WorkExperiencePage