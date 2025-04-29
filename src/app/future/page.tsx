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
  // For image carousel
  // const [currentImage, setCurrentImage] = useState(0)
  
  // Example workplace images (replace with your actual images)
  // const workImages = [
  //   "/placeholder-1.jpg",
  //   "/placeholder-2.jpg",
  //   "/placeholder-3.jpg",
  //   "/placeholder-4.jpg",
  // ]
  
  // Auto-rotate carousel images
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prev) => (prev + 1) % workImages.length)
  //   }, 5000)
    
  //   return () => clearInterval(interval)
  // }, [workImages.length])
  
  // Skills data
  // const skills = [
  //   { name: "React", level: 85 },
  //   { name: "TypeScript", level: 80 },
  //   { name: "API Integration", level: 75 },
  //   { name: "ECharts", level: 70 },
  //   { name: "SQL", level: 65 },
  //   { name: "Unit Testing", level: 60 },
  // ]
  
  // GitLab contribution data
  // const gitlabStats = {
  //   commits: 127,
  //   mergeRequests: 42,
  //   issues: 38,
  //   codeAdditions: "8,943 lines",
  //   codeDeletions: "3,217 lines",
  //   repositoriesContributed: 5
  // }
  
  // const monthlyContributions = [
  //   { month: "Jan", commits: 18 },
  //   { month: "Feb", commits: 22 },
  //   { month: "Mar", commits: 30 },
  //   { month: "Apr", commits: 25 },
  //   { month: "May", commits: 32 }
  // ]
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <Badge className="mb-4 text-xs px-3 py-1" variant="outline">Expectation</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Backend Developer<br></br>
                Blockchain Developer<br></br>
                Full Stack Developer
              </h1>
              <div className="flex items-center mb-6 text-muted-foreground">
                <Building className="h-5 w-5 mr-2" />
                <span className="text-lg">Base Hong Kong</span>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I aspire to leverage my expertise in backend systems to build scalable, high-performance architectures while diving deep into blockchain technology to innovate decentralized solutions. 
                My goal is to contribute to cutting-edge backend infrastructure and blockchain ecosystems, solving complex problems with efficient code and distributed ledger technology. 
                I seek a role where I can merge my passion for backend engineering with blockchain development, creating secure, scalable systems that push the boundaries of decentralized applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Golang", "Python", "PHP", "Solidity","MySQL", "Redis", "MongoDB", "MQ"].map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Company logo/image placeholder */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-80 bg-card rounded-xl overflow-hidden shadow-lg border border-border">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/images/projects/cs.jpg"
                    alt="cs pic"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 z-20 text-white">
                    <h3 className="text-xl font-bold">I am a brick</h3>
                    <p className="text-sm opacity-80">where to use and where to move</p>
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
            <h2 className="text-3xl font-bold text-center mb-4">Golang Advanced Learning Plan</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
             Focused on high-concurrency scenarios and blockchain development.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: <Code className="h-10 w-10 text-primary" />,
                title: "Advanced Golang Fundamentals",
                description: "Concurrency Deep Dive like goroutine, channel, sync package. Performance Optimization. Advanced Standard Library like goroutine feaks."
              },
              {
                icon: <Languages className="h-10 w-10 text-primary" />,
                title: "High-Concurrency Systems",
                description: "Building Scalable Services using token bucket and sliding window to implement rate limiting. gRPC for inter-service communication."
              },
              {
                icon: <LineChart className="h-10 w-10 text-primary" />,
                title: "Blockchain Development in Go",
                description: "Blockchain Core Concepts including hashing, Merkle trees, consensus. Solidity basics, interacting with Ethereum. Layer-2 solutions, token standards."
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
                title: "Real-World Projects",
                description: "High-Concurrency Project like cryptocurrency exchange matching engine. Blockchain Project like a cross-chain bridge or DAO goverance tool."
              },
              {
                icon: <Database className="h-10 w-10 text-primary" />,
                title: "Concurrency Optimization",
                description: "Lock-free algorithms, sharding techniques, and non-blocking I/O. Real-time event processing with Kafka/Pulsar and Go."
              },
              {
                icon: <Building className="h-10 w-10 text-primary" />,
                title: "Cutting-Edge Blockchain",
                description: "Implement zk-SNARKs/zk-STARKs with Go. Optimistic/Pessimistic rollups, sidechains, and Polkadot/Cosmos interoperability. Reverse-engineer EVM bytecode."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} className="h-full">
                <Card className="h-full border-border hover:border-primary/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 p-2 rounded-full w-16 h-16 flex items-center justify-center bg-primary/10">
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
      
      {/* GitLab Contributions Section - NEW */}
      {/* <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">GitLab Contributions</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Code contributions and development activity metrics
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <FadeIn delay={100} direction="right">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <GitBranch className="h-5 w-5 mr-2 text-primary" />
                    Contribution Statistics
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <GitCommit className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{gitlabStats.commits}</div>
                        <div className="text-sm text-muted-foreground">Total Commits</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <GitPullRequest className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{gitlabStats.mergeRequests}</div>
                        <div className="text-sm text-muted-foreground">Merge Requests</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{gitlabStats.issues}</div>
                        <div className="text-sm text-muted-foreground">Issues</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{gitlabStats.repositoriesContributed}</div>
                        <div className="text-sm text-muted-foreground">Repositories</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Code Added</span>
                      <span className="text-sm font-medium text-green-500">{gitlabStats.codeAdditions}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Code Removed</span>
                      <span className="text-sm font-medium text-red-500">{gitlabStats.codeDeletions}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn delay={200} direction="left">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <LineChart className="h-5 w-5 mr-2 text-primary" />
                    Monthly Activity
                  </h3>
                  
                  <div className="h-60 flex items-end justify-between px-2">
                    {monthlyContributions.map((month, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div 
                          className="w-12 bg-primary/80 rounded-t-md transition-all duration-1000" 
                          style={{ 
                            height: `${(month.commits / 35) * 100}%`,
                            transitionDelay: `${i * 100}ms`
                          }}
                        ></div>
                        <div className="mt-2 text-sm text-muted-foreground">{month.month}</div>
                        <div className="text-xs font-medium">{month.commits}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Contribution Streak</span>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                        <span className="font-medium">14 days</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section> */}
      
      {/* Image Carousel Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Workplace Gallery</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              A glimpse into my daily work environment and activities
            </p>
          </FadeIn>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl border border-border shadow-md">
              <div 
                className="relative h-[400px] w-full bg-card flex items-center justify-center"
              >
                {/* Replace with your actual images */}
                {/* <p className="text-muted-foreground">Image carousel placeholder</p>
                <Building className="absolute h-24 w-24 text-muted-foreground/20" />
              </div>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
              <Button 
                variant="secondary" 
                size="icon" 
                className="rounded-full shadow-md"
                onClick={() => setCurrentImage((prev) => (prev - 1 + workImages.length) % workImages.length)}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
              <Button 
                variant="secondary" 
                size="icon" 
                className="rounded-full shadow-md"
                onClick={() => setCurrentImage((prev) => (prev + 1) % workImages.length)}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex justify-center mt-4 gap-2">
              {workImages.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentImage === i ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => setCurrentImage(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Projects & Skills Section - SIMPLIFIED */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Projects & Skills</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              An overview of the projects I have contributed to and the skills I have developed
            </p>
          </FadeIn>
          
          <Tabs defaultValue="projects" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="projects">Key Projects</TabsTrigger>
              <TabsTrigger value="skills">Technical Skills</TabsTrigger>
            </TabsList>
            
            <TabsContent value="projects" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Multilingual Translation Interface",
                    description: "Developed React components for document translation interface with real-time language switching and ChatGPT API integration.",
                    technologies: ["React", "TypeScript", "ChatGPT API"],
                    highlight: "Improved translation workflow efficiency by 40%"
                  },
                  {
                    title: "Statistical Dashboard",
                    description: "Created interactive charts using ECharts to visualize translation workload, completion rates, and other key performance metrics.",
                    technologies: ["ECharts", "React", "REST API"],
                    highlight: "Enabled data-driven decision making for project planning"
                  },
                  {
                    title: "Database Query Optimization",
                    description: "Collaborated on optimizing SQL queries and database structure to improve application performance for large document sets.",
                    technologies: ["SQL", "API Integration", "Performance Testing"],
                    highlight: "Reduced query response time by 35%"
                  },
                  {
                    title: "Unit Testing Framework",
                    description: "Implemented comprehensive unit tests for frontend components to ensure reliability and catch regressions early.",
                    technologies: ["Jest", "React Testing Library", "CI/CD"],
                    highlight: "Achieved 80% test coverage for core components"
                  }
                ].map((project, i) => (
                  <FadeIn key={i} delay={i * 100} direction="up">
                    <Card className="h-full border-border hover:border-primary/50 transition-colors duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, j) => (
                            <Badge key={j} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm font-medium text-primary">{project.highlight}</p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="skills" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {skills.map((skill, i) => (
                  <FadeIn key={i} delay={i * 50}>
                    <div className="mb-2">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%`, transitionDelay: `${i * 100}ms` }}
                        ></div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
                
                <FadeIn delay={300} className="md:col-span-2 mt-6">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Additional Skills & Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Git & Version Control", "RESTful API Design", "ChatGPT Integration",
                          "UI/UX Design Principles", "Performance Optimization", "Cross-browser Compatibility",
                          "Frontend Testing", "Responsive Design", "Code Documentation",
                          "Agile Development", "API Documentation", "CI/CD Workflows"
                        ].map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs px-3 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Achievements Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Key Achievements</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Highlights of my contributions and accomplishments during my internship
            </p>
          </FadeIn>
          
          <div className="space-y-8">
            {[
              {
                title: "Translation Efficiency Improvement",
                description: "Contributed to integration of ChatGPT API for automated document translation that reduced manual translation time by 60%."
              },
              {
                title: "Performance Optimization",
                description: "Identified and resolved frontend performance bottlenecks, improving page load times by 45% for document-heavy interfaces."
              },
              {
                title: "Data Visualization Dashboard",
                description: "Developed comprehensive analytics dashboard with ECharts that provided critical insights for project management decisions."
              },
              {
                title: "Code Quality",
                description: "Implemented standardized code review processes and unit testing practices that reduced bug rates in production by 30%."
              }
            ].map((achievement, i) => (
              <FadeIn key={i} delay={i * 100} direction="left">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  )
}

export default WorkExperiencePage