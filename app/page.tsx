"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Target,
  ChevronDown,ArrowRight, BookOpen,
  GraduationCap, Lightbulb, Trophy, UserCheck,
  Building2
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import FloatingCard from '@/components/FloatingCard';
import Image from 'next/image';
import Link from 'next/link';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      
      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-black/20 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 sm:py-4">
            <motion.div 
              className="flex items-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.05 }}
            >
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
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { title: 'About', href: '#about' },
                { title: 'Research', href: '#research' },
                { title: 'Events', href: '/events' },
                { title: 'Members', href: '/members' },
                { title: 'Contact', href: '#contact' },
              ].map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className="relative text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </nav>
            {/* <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Activities', 'Events', 'Members', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </nav> */}
            
            <div className="flex items-center space-x-4">
              <motion.button 
                className="hidden sm:block bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Join Chapter
              </motion.button>
              
              <motion.button 
                className="sm:hidden bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join
              </motion.button>
              
              <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/30 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-3">
                {[
                { title: 'About', href: '#about' },
                { title: 'Research', href: '#research' },
                { title: 'Events', href: '/events' },
                { title: 'Members', href: '/members' },
                { title: 'Contact', href: '#contact' },
              ].map((item) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    className="block py-2 text-gray-300 hover:text-white transition-colors duration-200"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section with Professional Welcome */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Professional Welcome Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-3 py-2 sm:px-8 sm:py-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
              <span className="text-sm sm:text-lg text-gray-200 font-medium">Welcome to ASHRAE BUET</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Shaping Tomorrow's
              </span>
              <br />
              <span className="text-white">HVAC&R Engineers</span>
            </motion.h1>
            
            <motion.div 
              className="max-w-4xl mx-auto mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-base sm:text-xl md:text-2xl text-gray-300 leading-relaxed px-2 sm:px-0">
                We are a vibrant community of BUET students passionate about <strong className="text-blue-400">Heating, Ventilation, Air Conditioning & Refrigeration</strong> technologies.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <motion.button 
                className="group bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-xl flex items-center space-x-2"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Our Journey</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>

      {/* Mission & Values Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div id='about' className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Mission & Values
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Empowering BUET students to excel in HVAC&R technologies through education and innovation
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-400 mr-3" />
                    Our Mission
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-center">
                    To advance the arts and sciences of heating, ventilation, air conditioning, and refrigeration to serve humanity and promote a sustainable world through research, standards writing, publishing, certification, and continuing education.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-green-400 mr-3" />
                    Core Values
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Excellence in engineering and technical innovation",
                      "Commitment to sustainability and environmental stewardship",
                      "Professional development and lifelong learning",
                      "Collaboration and knowledge sharing"
                    ].map((value, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>


      {/* Advisor Quote Section */}
      <AnimatedSection className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-green-500/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Advisor Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 to-green-400 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-blue-500/10">
                      <Image src={"/ashiq-sir.png"} alt='Dr. Md. Ashiqur Rahman' height={470} width={380} className='w-full h-full object-cover object-[center_20%]'/>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
                </div>
              </motion.div>
              
              {/* Quote Content */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center lg:justify-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Quote Text */}
                  <blockquote className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 italic">
                    "A quote from our advisor Ashiq Sir About ASHRAE and importance of student involvement"
                  </blockquote>
                  
                  {/* Advisor Info */}
                  <div className="border-l-4 border-gradient-to-b from-blue-400 to-green-400 pl-6">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Dr. Md. Ashiqur Rahman
                    </div>
                    <div className="text-blue-400 font-semibold mb-1">
                      Advisor, ASHRAE BUET Student Branch
                    </div>
                    <div className="text-gray-300">
                      Professor, Department of Mechanical Engineering, BUET
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Student Activities Grid */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div id='events' className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Student Activities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engaging activities designed to enhance learning and professional development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Technical Workshops",
                description: "Hands-on learning sessions on HVAC design, installation, and maintenance",
                color: "from-blue-400 to-cyan-400"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation Projects",
                description: "Student-led research projects exploring sustainable HVAC solutions",
                color: "from-yellow-400 to-orange-400"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Competitions",
                description: "Participate in national and international HVAC design competitions",
                color: "from-purple-400 to-pink-400"
              },
              {
                icon: <UserCheck className="w-8 h-8" />,
                title: "Industry Visits",
                description: "Field trips to HVAC facilities and interaction with industry professionals",
                color: "from-green-400 to-emerald-400"
              }
            ].map((activity, index) => (
              <FloatingCard key={index} delay={index * 0.1} className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${activity.color} mb-6`}>
                  <div className="text-white">
                    {activity.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{activity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{activity.description}</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Meet the Panel Members Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div id='members' className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Meet the Panel Members
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our dedicated leadership team driving innovation and excellence in HVAC&R education
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: "Arafath Rahman Nishat",
                designation: "Vice President",
                image: "/vp.png",
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "Md. Luban Medha",
                designation: "President", 
                image: "/president.png",
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "Safwan Sakib",
                designation: "Treasurer",
                image: "/treasurer.png",
                color: "from-green-500 to-emerald-500"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center"
              >
                {/* Member Photo */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-gradient-to-r ${member.color} p-1`}>
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        height={400}
                        width={400}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Member Info */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${member.color} text-white font-semibold text-sm sm:text-base`}>
                    {member.designation}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Student Chapter Info Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                About Our Chapter
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                The ASHRAE BUET Student Chapter is dedicated to fostering academic excellence and professional development among mechanical engineering students interested in HVAC&R technologies.
              </motion.p>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {[
                  "Student-led technical seminars",
                  "Professional networking events",
                  "Scholarship opportunities",
                  "Career development programs"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/WhatsApp Image 2025-06-19 at 18.48.51_5ea854a3.jpg"
                  alt="ASHRAE BUET Student Chapter Activities"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium mb-1">Student Chapter Event 2025</p>
                  <p className="text-lg font-bold">Learning Through Innovation</p>
                </div>
              </div>
              
              {/* Floating stats */}
              <motion.div 
                className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">150+</div>
                  <div className="text-sm text-gray-300 font-medium">Active Students</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div id='research' className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Student Members" },
              { number: "25+", label: "Technical Sessions" },
              { number: "10+", label: "Industry Partners" },
              { number: "5+", label: "Awards Won" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Join Our Student Community
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Connect with fellow BUET students passionate about HVAC&R technology and build your professional network while enhancing your academic journey.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Join Chapter
            </motion.button>
            
            <motion.button 
              className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div id='contact' className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
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
                <li><a href="#activities" className="hover:text-blue-400 transition-colors duration-200">Activities</a></li>
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

export default App;