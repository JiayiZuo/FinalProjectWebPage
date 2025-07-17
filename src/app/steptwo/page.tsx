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
  const pOne = [
    'Find Doctor', 'Doctors', 'Hospitals', 'Departments'
  ]
  const pTwo = [
    'Details', 'Appointment', 'Registration'
  ]

  const pThree = [
    'Historical records', 'Login verification'
  ]

  const pFour = [
    'Fine-tuned', 'Data type incompatibility'
  ]

  const pFive = [
    'LoRA', 'Optimization', 'UI'
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">        
        {/* About Section */}
        <section id="about" className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
                <div className="w-auto mx-auto rounded-lg overflow-hidden">
                  <img
                    src="/images/projects/2-1.jpg"
                    alt="Project showcase"
                    className="block"
                  />
                </div>
              </div>
              <div className="md:w-1/2 animate-on-scroll ml-10">
                <p className="text-lg mb-4 text-foreground">
                A new <b>Find Doctor</b> module has been added, allowing users to obtain and search for
                information about some<b>doctors</b>, <b>hospitals</b>, and <b>departments</b>.
                </p>
                <div className="flex flex-wrap">
                  {pOne.map((skill, index) => (
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
        <section id="about" className="py-0">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
                <div className="w-auto mx-auto rounded-lg overflow-hidden">
                  <img
                    src="/images/projects/2-2.jpg"
                    alt="Project showcase"
                    className="block"
                  />
                </div>
              </div>
              <div className="md:w-1/2 animate-on-scroll ml-10">
                <p className="text-lg mb-4 text-foreground">
                At the same time, you can view the <b>detailed</b> information of the doctor and choose a suitable time to <b>make an appointment</b>for registration.
                </p>
                <div className="flex flex-wrap">
                  {pTwo.map((skill, index) => (
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
        <section id="about" className="py-0">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
                <div className="w-auto mx-auto rounded-lg overflow-hidden">
                  <img
                    src="/images/projects/2-3.jpg"
                    alt="Project showcase"
                    className="block"
                  />
                </div>
              </div>
              <div className="md:w-1/2 animate-on-scroll ml-10">
                <p className="text-lg mb-4 text-foreground">
                The new feature of adding <b>historical records logs</b>every interaction between the user and the large model. Additionally, <b>login verification</b> has been implemented, and users who are not logged in cannot view the historical records.
                </p>
                <div className="flex flex-wrap">
                  {pThree.map((skill, index) => (
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
        <section id="about" className="py-0">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
                <div className="w-auto mx-auto rounded-lg overflow-hidden">
                  <img
                    src="/images/projects/2-4.jpg"
                    alt="Project showcase"
                    className="block"
                  />
                </div>
              </div>
              <div className="md:w-1/2 animate-on-scroll ml-10">
                <p className="text-lg mb-4 text-foreground">
                We have also met two difficulties: <br></br> 1. The replied of the large model need to be fine-tuned.<br></br>2. Some bugs such as front-end interaction or data type incompatibitlity.
                </p>
                <div className="flex flex-wrap">
                  {pFour.map((skill, index) => (
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
        <section id="about" className="pb-16 pt-0">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
                <div className="w-auto mx-auto rounded-lg overflow-hidden">
                  <img
                    src="/images/projects/2-5.jpg"
                    alt="Project showcase"
                    className="block"
                  />
                </div>
              </div>
              <div className="md:w-1/2 animate-on-scroll ml-10">
                <p className="text-lg mb-4 text-foreground">
                We have two plans for next step: <br></br> 1. Fine-tune deepseek-R1 distillation model using LoRA technology.<br></br>2. Optimize the front-end page, use more reasonable ui layout.
                </p>
                <div className="flex flex-wrap">
                  {pFive.map((skill, index) => (
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