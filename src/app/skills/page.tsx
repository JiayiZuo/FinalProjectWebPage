'use client'

import React, { useEffect } from 'react'
import Navbar from '@/components/main_page/Navbar'
import Footer from '@/components/main_page/Footer'


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
    'Python', 'Golang', 'JAVA', 'PHP', 'MySQL', 'Redis', 'MongoDB', 'Message Queue', 
    'Solidity', 'Swift', 'Docker', 'K8s', 'Git'
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">        
        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
                <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden">
                  <img
                    src="/images/projects/skills.jpg"
                    alt="Project showcase"
                    className="w-full h-auto aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="md:w-1/2 animate-on-scroll">
                <p className="text-lg mb-4 text-foreground">
                1. Experience in <b>user operation growth</b> business, cross-border payment related business scenarios.<br></br>
                2. Familiar with <b>Golang</b>, <b>Python</b>, technical solutions such as scalability, system stability monitoring, sharding, and <b>distributed system</b> data consistency in <b>high concurrency</b> business scenarios, databased
application like <b>MySQL, redis, message queues</b>.<br></br>
                3. Interested in <b>blockchain</b> development, smart contract engines, <b>cryptocurrency</b> toolchains, and other
related fields, knowledgeable about cryptocurrency.<br></br>
                4. Rigorous and responsible in work, emotionally stable, skilled in <b>collaborating and communicating</b> with
different departments. Quickly <b>adaptable</b> in new environments.
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
      </main>      
      <Footer />
    </div>
  )
}

export default Page