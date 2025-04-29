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
      title: "Tennis",
      description: "Smash stress away! Tennis is the perfect workout to release tension and clear your mind with every powerful swing.",
      image: "/images/hobbies/tennis.jpg",
      videolUrl: "/videos/hobbies/",
    },
    {
      title: "Hiking",
      description: "Exploring nature trails and mountains. Completed the Dragon's Back Trail in Hong Kong and planning to hike all around the world.",
      image: "/images/hobbies/hiking.jpg",
      videoUrl: "",
    },
    {
      title: "Climbing",
      description: "Build powerful muscles with every climb! Rock climbing transforms your body, strengthening arms, back, and core with every gripping challenge.",
      image: "/images/hobbies/climbing.jpg",
      videoUrl: "",
    },
    {
      title: "Surfing",
      description: "Ride the rhythm of the ocean—surfing is your ultimate dance with the waves, where you and the sea become one.",
      image: "/images/hobbies/surfing.jpg",
      videoUrl: "",
    },
    {
      title: "Diving",
      description: "See Earth from its hidden side! Scuba diving turns oceans into your looking glass, transforming ordinary views into wonder.",
      image: "/images/hobbies/diving.jpg",
      videoUrl: "",
    },
    {
      title: "Skiing",
      description: "Defy fear, embrace speed! Every run down the mountain is a chance to challenge yourself and discover what you're truly capable of.",
      image: "/images/hobbies/skiing.jpg",
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
            PERSONAL HOBBIES
          </h2>
  
          {/* Hobbies Grid */}
          <section id="hobbies" className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  // onClick={() => handleClick(hobby.videoUrl)}
                >
                {/* Background Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{hobby.title}</h3>
                  <p className="text-gray-200">{hobby.description}</p>
                </div>
              </div>
              ))}
            </div>
          </section>
  
          {/* Additional Personal Note */}
          <div className="mt-16 max-w-3xl mx-auto p-8 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
            <h3 className="text-xl font-semibold mb-4 text-indigo-800">Beyond Study and Work</h3>
            <p className="text-gray-700">
              These activities help me maintain work-life balance and often inspire creative solutions in my professional work. 
              I believe hobbies make us more well-rounded individuals and often lead to unexpected connections between different domains.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Page