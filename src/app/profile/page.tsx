'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Globe } from 'lucide-react'
import { FaMedal, FaTrophy, FaCalculator } from 'react-icons/fa'
import Navbar from '@/components/main_page/Navbar'
import Footer from '@/components/main_page/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Page = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, { threshold: 0.1 })
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element)
    })
    
    return () => observer.disconnect()
  }, [])

  // Skills data
  const skills = [
    'Python', 'Java', 'React', 'Vue', 'Next.js', 'SQL', 
    'Computer Vision', 'OOP', 'Data Mining', 'Web Crawler'
  ]

  // Projects data
  const projects = [
    {
      title: "Research on Detection Techniques for Malicious WASM Programs",
      period: "2023.12 - 2024.05",
      description: [
        "Collected WASM files from public datasets and VirusTotal, selecting those classified as malicious and benign",
        "Applied code obfuscation and used BREWasm to create more challenging examples, employing SMOTE technology to balance positive and negative samples",
        "Built a Convolutional Neural Network (CNN) with an attention mechanism to improve the focus on critical features, enhancing the detection of obfuscated malicious programs",
        "Conducted experiments to validate the model's effectiveness, assess the impact of attention layers and data augmentation, and explore hyperparameter configurations"
      ],
      skills: ["CNN", "WASM", "Security"]
    },
    {
      title: "Personal Blog Site",
      period: "2023.07",
      description: [
        "Built a blog prototype using the Hexo-Butterfly framework and further developed it with Node.js",
        "Utilized Vue Element to create custom themes and plugins, enhancing the website's user experience and scalability",
        "Integrated the Disqus comment system and social media sharing features with OAuth authentication to improve user interaction",
        "Used Git for version control to ensure code maintainability and traceability"
      ],
      skills: ["Node.js", "Vue", "Hexo", "Git"]
    },
    {
      title: "Real-time Map Information Visualization System",
      period: "2022.11 - 2022.12",
      description: [
        "Developed a visual real-time map data display web application based on Vue, featuring real-time data query capabilities for the map",
        "Implemented map visualization using the Leaflet or Mapbox library and integrated WebSocket technology for real-time data updates and pushes",
        "Designed the interface with Vuetify or Element UI to facilitate user data queries and filtering",
        "Utilized Axios for API calls, ensuring smooth performance of the system under high concurrency conditions"
      ],
      skills: ["Vue", "WebSocket", "Leaflet", "Axios"]
    }
  ]

  // Honors data
  const honors = [
    {
      title: "Jinan University Excellent Student First Award",
      date: "2023.10",
      icon: <FaMedal className="text-amber-500 text-2xl" />
    },
    {
      title: "Jinan University Excellent Student Second Award",
      date: "2022.10",
      icon: <FaMedal className="text-amber-500 text-2xl" />
    },
    {
      title: "Ernst & Young Hacksong Competition",
      date: "Winning Award in Final, 2022.10",
      icon: <FaTrophy className="text-amber-500 text-2xl" />
    },
    {
      title: "Mathematical Contest in Modeling (MCM)",
      date: "Successful Participant, 2023.05",
      icon: <FaCalculator className="text-blue-500 text-2xl" />
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
              style={{ fontFamily: 'Audiowide, cursive' }}
            >
              Li Xinlei
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-foreground"
            >
              Computer Science & Multimedia Computing Professional
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              <Button 
                variant="default" 
                asChild 
                className="flex items-center"
              >
                <Link href="mailto:lixinlei@connect.hku.hk">
                  <Mail className="mr-2 h-4 w-4" />Contact Me
                </Link>
              </Button>
              <Button 
                variant="outline" 
                asChild 
                className="flex items-center"
              >
                <Link href="https://ericlee12118.github.io" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />Visit Blog
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary opacity-10 rounded-full"></div>
            <div className="absolute top-20 right-10 w-20 h-20 bg-primary opacity-10 rounded-full"></div>
            <div className="absolute bottom-10 left-1/4 w-30 h-30 bg-primary opacity-10 rounded-full"></div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                    LX
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 animate-on-scroll">
                <p className="text-lg mb-4 text-foreground">
                  I am a Computer Science professional currently pursuing my Master&apos;s degree at the University of Hong Kong, specializing in Multimedia Computing. With a strong foundation in software development and a passion for innovative technologies, I strive to create impactful solutions.
                </p>
                <p className="text-lg mb-6 text-foreground">
                  My technical expertise includes Python, Java, React, Vue, Next.js, SQL, Computer Vision, Object-Oriented Programming, Data Mining, and Web Crawling.
                </p>
                <div className="flex flex-wrap">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="inline-block px-3 py-1 m-1 rounded-full text-sm bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section id="education" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent">
              Education
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative education-timeline">
                <div className="mb-12 md:ml-auto md:w-1/2 md:pl-8 animate-on-scroll education-item">
                  <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                    <h3 className="text-xl font-bold mb-2">The University of Hong Kong (HKU)</h3>
                    <p className="text-muted-foreground mb-2">2024.09 - 2025.11</p>
                    <p className="font-medium">Master of Science in Computer Science</p>
                    <p className="italic">Multimedia Computing Stream</p>
                  </div>
                </div>
                
                <div className="mb-12 md:mr-auto md:w-1/2 md:pr-8 animate-on-scroll education-item">
                  <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                    <h3 className="text-xl font-bold mb-2">Jinan University (JNU)</h3>
                    <p className="text-muted-foreground mb-2">2020.09 - 2024.07</p>
                    <p className="font-medium">Bachelor of Engineering in Computer Science and Technology</p>
                    <p>GPA: 3.25/5.0</p>
                    <p>English: IELTS: 6.5, CET-6: 536</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-card text-card-foreground"
                >
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-3">{project.period}</p>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    {project.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap mt-4">
                    {project.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="inline-block px-3 py-1 m-1 rounded-full text-sm bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Experience
            </h2>
            <div className="p-8 max-w-3xl mx-auto rounded-lg shadow-md bg-card text-card-foreground animate-on-scroll">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h3 className="text-xl font-bold">Software Test Intern</h3>
                <p className="text-muted-foreground">2023.07 - 2023.08</p>
              </div>
              <h4 className="text-lg font-medium mb-4">Guangzhou ZEEWAIN Technology Co., Ltd.</h4>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Developed productivity tools using PyQt and Requests to automate software packaging and deployment</li>
                <li>Assisted in tracking and managing defects and collaborated with developers</li>
                <li>Participated in formulating test plans and writing test cases</li>
                <li>Performed test execution including functionality, compatibility, and performance testing</li>
              </ul>
              <div className="flex flex-wrap mt-4">
                <span className="inline-block px-3 py-1 m-1 rounded-full text-sm bg-primary/10 text-primary">PyQt</span>
                <span className="inline-block px-3 py-1 m-1 rounded-full text-sm bg-primary/10 text-primary">Requests</span>
                <span className="inline-block px-3 py-1 m-1 rounded-full text-sm bg-primary/10 text-primary">Software Testing</span>
                <span className="inline-block px-3 py-1 m-1 rounded-full text-sm bg-primary/10 text-primary">QA</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Honors Section */}
        <section id="honors" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Honors & Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {honors.map((honor, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg shadow-md bg-card text-card-foreground hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="mr-4">
                      {honor.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{honor.title}</h3>
                      <p className="text-muted-foreground">{honor.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>      
      <Footer />
    </div>
  )
}

export default Page