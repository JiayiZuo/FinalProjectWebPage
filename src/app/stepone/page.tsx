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

  const hobbies = [
    {
      image: "/images/hobbies/1-0.jpg",
      videolUrl: "/videos/hobbies/",
    },
    {
      image: "/images/hobbies/1-1.jpg",
      videolUrl: "/videos/hobbies/",
    },
    {
      image: "/images/hobbies/1-2.jpg",
      videoUrl: "",
    },
    {
      image: "/images/hobbies/1-3.jpg",
      videoUrl: "",
    },
    {
      image: "/images/hobbies/1-4.jpg",
      videoUrl: "",
    },
    {
      image: "/images/hobbies/1-5.jpg",
      videoUrl: "",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />
        <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Gradient Title */}
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Works we done in step one
          </h2>
  
          {/* Hobbies Grid */}
          <section id="hobbies" className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  // onClick={() => handleClick(hobby.videoUrl)}
                >
                {/* Background Image */}
                <div className="h-90 overflow-hidden">
                  <img
                    src={hobby.image}
                    // alt={hobby.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              ))}
            </div>
          </section>
  
          {/* Additional Personal Note */}
          <div className="mt-16 max-w-3xl mx-auto p-8 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
            <h3 className="text-xl font-semibold mb-4 text-indigo-800">Achievements and Difficulties in step one</h3>
            <p className="text-gray-700">
              The AI question-answering reobt will analyze the symptoms and details of the situation and out put the preliminary diagnosis resutls.
              The replies of the large model may be unreasonable or contrary to the original intention of the user and need to be fine-tuned.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Page