"use client"
import { useState } from "react";
import Image from "next/image";
import { X, Menu, ChevronDown, Thermometer, Zap, Wind, Settings, Quote, ArrowRight, CircleCheck } from "lucide-react"
import { GlobeDemo } from "@/components/ui/renderGlobe";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonial";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const events = [
    {name: "Seminar on HVAC",
      designation: "Mar 2025",
      quote: "Event held to dive into HVAC",
      src: "https://picsum.photos/400",
      href:"/event/hvac",
    },
    {name: "Committee announcement",
      designation: "May 2025",
      quote: "We got a new committee",
      src: "https://picsum.photos/401",
      href:"/event/b",
    },
    {name: "NEW WEBSITE!!",
      designation: "Aug 2025",
      quote: "our brand new website is here for you",
      src: "https://picsum.photos/400/400",
      href:"/event/c",
    },
  ]
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-300">

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm`}
        style={{
          maskImage: 'linear-gradient(to bottom, black 5%, black 20%, black 80%, transparent)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/"
              className="flex items-center space-x-3 drop-shadow-lg"
            >
              <Image src={"/ashrae-logo-tp.png"} alt="ASHRAE logo" height={72} width={72} />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  BUET
                </h1>
                <p className="text-xs">Student Branch</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { title: 'About', href: '#about' },
                { title: 'Research', href: '#research' },
                { title: 'Events', href: '#events' },
                { title: 'Members', href: '#members' },
                { title: 'Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="relative text-gray-300 hover:text-white transition-all duration-200 hover:scale-110 group"
                >
                  {item.title}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Join
              </button>

              <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>


      </header>
      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-neutral-950 backdrop-blur-lg border-t border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 space-y-3 mt-[10vh] pb-[5vh]">
          {[
            { title: 'About', href: '#about' },
            { title: 'Research', href: '#research' },
            { title: 'Events', href: '#events' },
            { title: 'Members', href: '#members' },
            { title: 'Contact', href: '#contact' },
          ].map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className="block py-2 text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
              }}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>


      {/* Landing part*/}
      <section className="relative min-h-screen flex items-center justify-center z-10  bg-gradient-to-b from-sky-700 from-0% via-blue-900 via-5% to-neutral-950 to-80%">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="space-y-5"
            style={{
              animation: 'fadeInUp 1s ease-out'
            }}
          >
            {/* Main Tagline */}
            <div className="space-y-4 z-15">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                Shaping Tomorrow&apos;s HVAC&R Engineers
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 max-w-4xl mx-auto leading-relaxed">
                Pioneering sustainable building technologies and shaping tomorrow&apos;s built environment
              </p>
              <div className="flex justify-center w-full">
              <button
                className="flex flex-row bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-lg hover:scale-105"
              >
                <span>Explore more</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </div>
            </div>
            <GlobeDemo />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          style={{
            animation: 'bounce 2s infinite'
          }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
        <div className="absolute bottom-0 w-full h-10 z-40 bg-gradient-to-b from-transparent to-neutral-950"></div>
      </section>

      {/** About section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10 bg-neutral-950">
        <p className="text-4xl text-center md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
          WHO WE ARE
        </p>
        <p
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 max-w-4xl mx-auto leading-relaxed"
        > A vibrant community of BUET students passionate about Heating, Ventilation, Air Conditioning & Refrigeration technologies.
        </p>
        <p
          className="text-lg md:text-xl lg:text-2xl text-pretty md:text-balance text-white/90 max-w-[70ch] mx-auto my-5 text-center leading-relaxed"
        >Our goal is to advance the fields of heating, ventilation, air conditioning, and refrigeration to serve humanity and foster a sustainable world. Through our dedicated research, standards writing, publishing, certification, and continuing education efforts, we aim to be a pioneer in developing innovative solutions for a greener future.
        </p>
      </section>

      {/** Quote */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10 bg-neutral-950">
        <Card className="flex flex-row">
          <div className="h-full scale-x-[-1] px-5 pt-5 mb-0 mt-auto rounded">
            <Image src={"/ashiq-sir.png"} alt="Advisor" height={470} width={380} />
          </div>
          <CardContent className="flex flex-col my-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 max-w-4xl mx-auto leading-relaxed">
              <Quote className="w-10 h-10" /> A quote from our advisor Ashiq Sir About ASHRAE and importance of student involvement
            </h1>
            <CardFooter className="grid grid-col">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white/90 max-w-4xl leading-relaxed mt-10">Dr. Md. Ashiqur Rahman</p>
              <p className="text-sm md:text-md lg:text-lg text-white/90">Advisor, ASHRAE Buet Student Branch</p>
              <p className="text-sm md:text-md lg:text-lg text-white/90">Professor, Department of Mechanical Engineering, BUET</p>
            </CardFooter>
          </CardContent>
        </Card>
      </section>

      {/* Benefits */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10 bg-neutral-950">
        <div className="flex flex-col">
          <h1 className="text-4xl text-center md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
             Providing Members With
          </h1>
          <div className="text-xl my-5">
            <div className="flex flex-row justify-center">
              <CircleCheck className="mr-4 ml-10 mt-1"/>
              <span className="min-w-[30ch]">Student-led technical seminars</span>
            </div>
            <div className="flex flex-row justify-center">
              <CircleCheck className="mr-4 ml-10 mt-1"/>
              <span className="min-w-[30ch]">Professional networking events</span>
            </div>
            <div className="flex flex-row justify-center">
              <CircleCheck className="mr-4 ml-10 mt-1"/>
              <span className="min-w-[30ch]">Scholarship opportunities</span>
            </div>
            <div className="flex flex-row justify-center">
              <CircleCheck className="mr-4 ml-10 mt-1"/>
              <span className="min-w-[30ch]">Career development programs</span>
            </div>
          </div>
        </div>
      </section>
        

      {/* Features Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            style={{
              animation: 'fadeInUp 0.8s ease-out'
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading research and innovation in HVAC&R technologies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Thermometer className="w-8 h-8" />,
                title: "Thermal Systems",
                description: "Advanced thermal management and energy-efficient heating solutions",
                color: "from-red-400 to-orange-400"
              },
              {
                icon: <Wind className="w-8 h-8" />,
                title: "Ventilation",
                description: "Smart air quality control and ventilation system optimization",
                color: "from-blue-400 to-cyan-400"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Energy Efficiency",
                description: "Sustainable energy solutions and green building technologies",
                color: "from-green-400 to-emerald-400"
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Automation",
                description: "IoT-enabled smart building systems and automated controls",
                color: "from-purple-400 to-pink-400"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between flex-grow gap-8 mx-[2vw] sm:mx-[10vw] lg:mx-[20vw]">
            {[
              { number: "180+", label: "Active Members" },
              { number: "50+", label: "Research Papers" },
              { number: "10+", label: "Awards Won" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                <div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2"
                  style={{
                    animation: `scaleIn 0.8s ease-out ${index * 0.1 + 0.3}s both`
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panel Memebrs */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10 bg-neutral-950">
        <div className="flex flex-col">
          <h1 className="text-4xl text-center md:text-5xl font-bold mb-2">
             MEET THE PANEL
          </h1>
          <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col justify-center bg-neutral-900 p-4 mt-10 min-w-[25vw] rounded transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="flex justify-center h-30">
                <Image src={"/vercel.svg"} alt="vp" height={100} width={100}/>
              </div>
              <p className="text-lg text-center md:text-xl lg:text-2xl font-semibold text-white/90 max-w-4xl leading-relaxed mt-10">Arafat Rahman Nishat</p>
              <p className="text-sm text-center md:text-md lg:text-lg text-zinc-600">Vice President</p>
            </div>
            <div className="flex flex-col justify-center bg-neutral-900 p-4 mt-10 -translate-y-2 min-w-[25vw] rounded transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="flex justify-center h-30">
                <Image src={"/vercel.svg"} alt="vp" height={100} width={100}/>
              </div>
              <p className="text-lg text-center md:text-xl lg:text-2xl font-semibold text-white/90 max-w-4xl leading-relaxed mt-10">Md. Luban Medha</p>
              <p className="text-sm text-center md:text-md lg:text-lg text-zinc-600">President</p>
            </div>
            <div className="flex flex-col justify-center bg-neutral-900 p-4 mt-10 min-w-[25vw] rounded transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="flex justify-center h-30">
                <Image src={"/vercel.svg"} alt="vp" height={100} width={100}/>
              </div>
              <p className="text-lg text-center md:text-xl lg:text-2xl font-semibold text-white/90 max-w-4xl leading-relaxed mt-10">Safwan Sakib</p>
              <p className="text-sm text-center md:text-md lg:text-lg text-zinc-600">Treasurer</p>
            </div>
          </div>
          <div className="flex justify-center my-5">
            <Button className="mx-auto">
            <a href="/panel">View Full Panel</a>
            <ArrowRight/>
          </Button>
          </div>
          
        </div>
      </section>

      {/* Events section */}
      <section id="about" className="relative flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 z-10 bg-neutral-950">
        <p className="text-4xl text-center md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2"
        >EVENTS
        </p>
        <AnimatedTestimonials testimonials={events} />
      </section>


      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
            style={{
              animation: 'fadeInUp 0.8s ease-out'
            }}
          >
            Join the Future of HVAC&R
          </h2>

          <p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.2s both'
            }}
          >
            Be part of a community that&apos;s shaping the future of sustainable building technologies
            and creating solutions for tomorrow&apos;s challenges.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.4s both'
            }}
          >
            <button
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              Become a Member
            </button>

            <button
              className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 to-green-400 p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <img 
                      src="/WhatsApp Image 2025-06-19 at 13.46.32_36dddcee.jpg" 
                      alt="ASHRAE BUET Logo" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold">ASHRAE BUET Student Branch</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Empowering BUET students to excel in HVAC&R technologies through education, 
                innovation, and professional development opportunities.
              </p>
              <div className="text-sm text-gray-500">
                © 2025 ASHRAE BUET Student Chapter. All rights reserved.
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-blue-400 transition-colors duration-200">About Chapter</a></li>
                <li><a href="#activities" className="hover:text-blue-400 transition-colors duration-200">Research</a></li>
                <li><a href="#events" className="hover:text-blue-400 transition-colors duration-200">Events</a></li>
                <li><a href="#members" className="hover:text-blue-400 transition-colors duration-200">Membership</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>BUET Campus</li>
                <li>Dhaka-1000, Bangladesh</li>
                <li>Email: ashrae@buet.ac.bd</li>
                <li>Phone: +880-XXX-XXXX</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}
