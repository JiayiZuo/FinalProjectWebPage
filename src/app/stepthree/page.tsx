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
    "/images/work/3-1.jpg",
    "/images/work/3-2.jpg",
    "/images/work/3-3.jpg",
    "/images/work/3-4.jpg",
    "/images/work/3-5.jpg",
    "/images/work/3-6.jpg",
    "/images/work/3-7.jpg",
    "/images/work/3-8.jpg",
    "/images/work/3-9.jpg",
    "/images/work/3-10.jpg",
    "/images/work/3-11.jpg",
    "/images/work/3-12.jpg",
    "/images/work/3-13.jpg",
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Carousel Section - Added at the top */}
        <div className="pt-16">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Progress of Step Three
          </h2>
        </div>
        <section className="relative mx-auto my-8 max-w-3xl"> 
          <div className="relative w-full overflow-auto flex justify-center">
            <img
              src={workImages[currentImage]}
              alt="Workplace environment"
              className="w-auto h-auto max-w-full max-h-[80vh] object-contain transition-opacity duration-500"
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
              Details of Step Three
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative education-timeline">
                
                <div className="mb-12 flex items-start gap-6 md:ml-auto md:w-full">
                  <div className="hidden md:block w-100 h-50 flex-shrink-0">
                    <img 
                      src="/images/work/3-3.jpg" 
                      alt="Medibot Logo"
                      className="w-full h-full object-cover rounded-lg shadow-md" 
                    />
                  </div>
                  <div className="md:w-1/2 md:pl-8 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                      <h3 className="text-xl font-bold mb-2">Front-end Page</h3>
                      <p className="font-medium">Added several UX modulesNight Mode Toggle. To add a dark/light theme toggle. Three levels of font size selection for the convenience of elderly users. Quick question template customization.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-12 flex items-start gap-6 md:ml-auto md:w-full">
                  <div className="mb-12 md:mr-auto md:w-1/2 md:pr-8 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                      <h3 className="text-xl font-bold mb-2">Front-end Page</h3>
                      <p className="font-medium">Personal information form. Gender, age height, weight. History of allergies, chronic diseases, family history, etc. Recent consultations displays the latest 3 consultation records.</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-100 h-50 flex-shrink-0">
                    <img 
                      src="/images/work/3-6.jpg" 
                      alt="Medibot Logo"
                      className="w-full h-full object-cover rounded-lg shadow-md" 
                    />
                  </div>
                </div>

                <div className="mb-12 flex items-start gap-6 md:ml-auto md:w-full">
                  <div className="hidden md:block w-100 h-50 flex-shrink-0">
                    <img 
                      src="/images/work/3-7.jpg" 
                      alt="Medibot Logo"
                      className="w-full h-full object-cover rounded-lg shadow-md" 
                    />
                  </div>
                  <div className="mb-12 md:ml-auto md:w-1/2 md:pr-8 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                      <h3 className="text-xl font-bold mb-2">Backend Design</h3>
                      <p className="font-medium">Call the health information interface to obtain health information atricles, supporting keyword search. Using Redis cache to avoid frequent and long-latency requests with ttl 3600s.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12 flex items-start gap-6 md:ml-auto md:w-full">
                  <div className="mb-12 md:mr-auto md:w-1/2 md:pr-8 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                      <h3 className="text-xl font-bold mb-2">Backend Design</h3>
                      <p className="font-medium">Using celery to scan data from database an send scheduled task to certain user. Using command to start redis and celery server. Apply an official email for medibot. </p>
                    </div>
                  </div>
                  <div className="hidden md:block w-100 h-50 flex-shrink-0">
                    <img 
                      src="/images/work/3-10.jpg" 
                      alt="Medibot Logo"
                      className="w-full h-full object-cover rounded-lg shadow-md" 
                    />
                  </div>
                </div>

                <div className="mb-12 flex items-start gap-6 md:ml-auto md:w-full">
                  <div className="hidden md:block w-100 h-50 flex-shrink-0">
                    <img 
                      src="/images/work/3-11.jpg" 
                      alt="Medibot Logo"
                      className="w-full h-full object-cover rounded-lg shadow-md" 
                    />
                  </div>
                  <div className="mb-12 md:ml-auto md:w-1/2 md:pr-8 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                      <h3 className="text-xl font-bold mb-2">Lora Fine-Tuning and Effects</h3>
                      <p className="font-medium">We retrained an English version of the model using LoRA. The lowest point was reached around 305 steps. The model achieved a significant improvement in scores.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12 flex items-start gap-6 md:ml-auto md:w-full">
                  <div className="mb-12 md:mr-auto md:w-1/2 md:pr-8 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                      <h3 className="text-xl font-bold mb-2">Lora Fine-Tuning and Effects</h3>
                      <p className="font-medium">These figures demonstrate the performance of the English version, which maintains full functional parity with the Chinese variant.</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-100 h-50 flex-shrink-0">
                    <img 
                      src="/images/work/3-13.jpg" 
                      alt="Medibot Logo"
                      className="w-full h-full object-cover rounded-lg shadow-md" 
                    />
                  </div>
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