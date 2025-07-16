'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/main_page/Navbar'
import Footer from '@/components/main_page/Footer'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Page = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  // Workplace images for carousel
  const workImages = [
    "/images/work/work1.jpg",
    "/images/work/work2.jpg",
    "/images/work/work3.jpg",
    "/images/work/work4.jpg",
  ]
  
  // Auto-rotate carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % workImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [workImages.length])

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

  // Projects data
  const projects = [
    {
      title: "Decentralized Voting System",
      period: "Personal Project",
      description: [
        "Developed a blockchain-based voting DApp with zero-knowledge proofs (ZK-SNARKs) for anonymity. The system allows users to cast votes without revealing their identity or selections, while cryptographically proving the validity of their vote on-chain.",
        "Based on the concept of Smart Contract Composability in blockchain smart contracts, enabling the voting logic to seamlessly interact with other DeFi protocols or governance systems.",
        "Integrated smart contracts with frontend via Web3.js, deployed on Ethereum testnet. Key challenges included ensuring ZKP correctness, preventing front-running attacks, and designing a user-friendly flow for proof generation.",
        "GitHub: https://github.com/JiayiZuo/Crypto"
      ],
      skills: ["Crypto", "Solidity", "Smart Contract"]
    },
    {
      title: "High Concurrency Passenger Task System",
      period: "Core Developer",
      description: [
        "Design and implementation of logic for event placement, exposure, collection, completion, and reward distribution, supporting millions of daily active users with a peak QPS of 100k+.",
        "Implemented batch processing of task events based on Goroutine Pool, controlling concurrency through bounded channels, dynamically adjusting pooling scale, buffer capacityof 100k+ tasks per second.", 
        "Implemented second level updates of hot event status through Redis Cluster sharded caching.", 
        "Implemented data persistence layer by MySQL sharding to process over 120 million transactionalrequests per day.", 
      ],
      skills: ["Golang", "JAVA", "PHP", "MySQL", "Redis", "Message Queue"]
    },
    {
      title: "Channel Templating",
      period: "Director",
      description: [
        "Implemented cross module calls by gRPC protocol, reduced module dependencies by 70% and increasing the overall system throughput to 80k+ QPS.",
        "Built a parameterized template engine, decouple interaction logic and business rules through meta programming strategy, defined 23 types of universal interaction protocol templates achieved channel code reuse rate>90%, reduced codemaintenance costs by 70%.",
        "Implemented a template based architecture driven by a dynamic configuration center, supported YAML/JSON declarative descriptions, with parameter configuration items covering over 200 business variables, reduced the requirementiteration cycle to 0.5 person days per functional point.",
      ],
      skills: ["Golang", "MySQL", "Redis"]
    },
    {
      title: "CRM System Construction",
      period: "Core Developer",
      description: [
        "Designed framework based on strategies and templates, implement interaction with downstream systems in a light coupling and flexible manner.",
        "Designed dynamicThreadPoolExecutor to execute large-scale OLAP queries, with core parameters. Thread pool size: 50~200 workers. Capacity of boundedqueue: 10k tasks.",
        "Built Hive to MySQL incremental synchronization pipeline to process 120TB+ budget data in a singleday, increased complex query efficiency by 8.5 times.", 
        "Compared 2PC, 3PC, TCC and other schemes, ultimately designed the final consistency framework based on the Saga transaction pattern. Implemented event driven compensation mechanism, supported forward operation atomic submission and backward compensation operation idempotent retry.",
      ],
      skills: ["Golang", "JAVA", "PHP", "MySQL", "Redis", "Distributed Systems"]
    },
    {
      title: "Upgrade of Operation Configuration Platform",
      period: "Director",
      description: [
        "Based on inversion of control and strategy pattern, decomposed triggers, conditions and actions into independent atomized modules, dynamically combined through JSON Schema visualization orchestration.", 
        "Refactored single task model into a directed acyclic graph driven task tree, supported any topology combination, optimized execution paths through topology sorting algorithms, improved complex task flow average end-to-end latency from 45s to 15s.", 
        "Built declarative task template engine based on Metadata Driven Architecture to achieve zero code creation of new task types. Implemented defining task logic through YAML descriptors, compressed requirement delivery cycle from 7 person days per type to 0.5 person days.", 
      ],
      skills: ["Golang", "JAVA", "PHP", "MySQL", "Redis", "Distributed Systems"]
    },
    {
      title: "LanHu System Construction",
      period: "Director",
      description: [
        "Developed iteration of core functions of LanHu products, such as custom sorting of images, display and management of annotations in team space, and management of team members.", 
        "Build a new operation platform and complete subsequent functional iterations to achieve autonomous operation processing, maintain user relationships, and meet user and operational demands, breaking away from operational dependence on R&D communication.", 
        "In the process of product commercialization, implement logical processing that meets financial data requirements and iterate the development of financial systems.",
        "Implemented a white board mode from zero to one. Supported real time cooperation with mult-format documents."
      ],
      skills: ["Golang", "JAVA", "PHP", "MySQL", "Redis", "Distributed Systems"]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Carousel Section - Added at the top */}
        <div className="pt-16">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            LIFE IN EBRAM
          </h2>
        </div>
        <section className="relative mx-auto my-8 max-w-3xl"> 
          <div className="relative h-[480px] w-full overflow-hidden">
            <img
              src={workImages[currentImage]}
              alt="Workplace environment"
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end pb-16">
              <div className="container mx-auto px-4 text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                  {/* Add title here */}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-xl text-white/80 max-w-2xl mx-auto"
                >
                </motion.p>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full shadow-lg"
              onClick={() => setCurrentImage((prev) => (prev - 1 + workImages.length) % workImages.length)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full shadow-lg"
              onClick={() => setCurrentImage((prev) => (prev + 1) % workImages.length)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {workImages.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImage === i ? 'bg-white w-6' : 'bg-white/50'
                }`}
                onClick={() => setCurrentImage(i)}
              />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              EDUCATION AND WORK EXPERIENCE
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative education-timeline">
                
                <div className="mb-12 flex items-start gap-6 md:ml-auto md:w-full">
                  <div className="hidden md:block w-100 h-50 flex-shrink-0">
                    <img 
                      src="/images/projects/hku.jpg" 
                      alt="HKU Logo"
                      className="w-full h-full object-cover rounded-lg shadow-md" 
                    />
                  </div>
                  <div className="md:w-1/2 md:pl-8 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                      <h3 className="text-xl font-bold mb-2">The University of Hong Kong (HKU)</h3>
                      <p className="font-medium">Master of Science in Computer Science</p>
                      <p className="italic">General Stream</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-12 flex items-start gap-6 md:ml-auto md:w-full">
                  <div className="mb-12 md:mr-auto md:w-1/2 md:pr-8 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                      <h3 className="text-xl font-bold mb-2">Beijing Didi Infinite Technology Development Co., Ltd.</h3>
                      <p className="italic">Backend Developer</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-100 h-30 flex-shrink-0">
                    <img 
                      src="/images/projects/DiDi.jpg" 
                      alt="DiDi Logo"
                      className="w-full h-full object-cover rounded-lg shadow-md" 
                    />
                  </div>
                </div>

                <div className="mb-12 flex items-start gap-6 md:ml-auto md:w-full">
                  <div className="hidden md:block w-100 h-30 flex-shrink-0">
                    <img 
                      src="/images/projects/bupt.jpg" 
                      alt="bupt Logo"
                      className="w-full h-full object-cover rounded-lg shadow-md" 
                    />
                  </div>
                  <div className="mb-12 md:ml-auto md:w-1/2 md:pr-8 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                      <h3 className="text-xl font-bold mb-2">Beijing University of Posts and Telecommunications (BUPT)</h3>
                      <p className="italic">Electromagnetic Fields and Wireless Technology</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              PROJECT EXPERIENCE
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
      </main>      
      <Footer />
    </div>
  )
}

export default Page