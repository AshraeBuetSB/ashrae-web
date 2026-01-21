'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import db from '../db/db';

const groups = [
  { title: 'Advisor', designations: ['Advisor'] },
  { title: 'Core Panel', designations: ['President', 'Vice President', 'Treasurer', 'Secretary'] },
  { title: 'Joint Secretary', designations: ['Joint Secretary, Competitions Scholarships & Research', 'Joint Secretary, Trips & Conference'] },
  { title: 'Assistant Joint Secretary', designations: ['Assistant Joint Secretary, Trips & Conferences', 'Assistant Joint Secretary, Competitions Scholarships & Research'] },
  {
    title: 'Chairs & Co-chairs',
    designations: [
      'Chair, Competitions, Scholarships & Research',
      'Co-chair, Competitions, Scholarships & Research',
      'Chair, Trip & Conference Travel',
      'Co-chair, Trip & Conference Travel',
    ],
  },
  {
    title: 'Managers',
    designations: [
      'Manager, Sponsorship Team',
      'Manager, Public Communications Team',
      'Manager, Logistics Team',
    ],
  },
  {
    title: 'Assistant Managers',
    designations: [
      'Assistant Manager, Sponsorship Team',
      'Assistant Manager, Public Communications Team',
      'Assistant Manager, Logistics Team',
    ],
  },
  { title: 'Coordinators', designations: ['Coordinator', 'Coordinator, Logistics', 'Coordinator, Public Communications', 'Coordinator, Sponsorship'] },
  { title: 'Associate Coordinators', designations: ['Associate Coordinator'] },
  { title: 'Assistant Coordinators', designations: ['Assistant Coordinator'] },
];

export default function Members() {
  const [activePanel, setActivePanel] = useState('second'); // Default to current members

  return (
    <div>
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="relative pt-8 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 leading-tight"
                >
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                    Executive Committee
                  </span>
                </motion.h1>

                {/* Tab Switcher Buttons - Matches your image styling */}
                <div className="flex justify-center gap-4 mb-16">
                  <button 
                    onClick={() => setActivePanel('first')}
                    className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activePanel === 'first' ? 'bg-white text-black scale-105 shadow-xl' : 'bg-white/10 text-white hover:bg-white/20'}`}
                  >
                    2024-2025
                  </button>
                  <button 
                    onClick={() => setActivePanel('second')}
                    className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activePanel === 'second' ? 'bg-white text-black scale-105 shadow-xl' : 'bg-white/10 text-white hover:bg-white/20'}`}
                  >
                    2025-2026
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePanel}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {groups.map((group, groupIndex) => {
                // Filters by designation AND current tab
                const members = db.filter(member => 
                  group.designations.includes(member.designation) && member.panel === activePanel
                );

                if (members.length === 0) return null;

                return (
                  <div key={group.title} className="mb-20">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
                      {group.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
                      {members.map((member, index) => (
                        <motion.div
                          key={member.name + index}
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 text-center"
                        >
                          <div className="relative mb-4 flex justify-center">
                            <div
                              className={`rounded-full overflow-hidden bg-gradient-to-r ${member.color} p-1`}
                              style={{ width: '140px', height: '140px' }}
                            >
                              {/* Restored your specific image scaling logic */}
                              {(groupIndex > 1 || (groupIndex == 1 && index == 3)) && activePanel=="second" &&
                                <div className="rounded-full overflow-hidden bg-white" style={{ width: '100%', height: '100%' }}>
                                  <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{
                                      width: '190%',
                                      height: '190%',
                                      objectFit: 'cover',
                                      objectPosition: 'center',
                                      transform: 'translate(0%, -20%)'
                                    }}
                                  />
                                </div>
                              }
                              {(groupIndex >= 1) && activePanel=="first" &&
                                <div className="rounded-full overflow-hidden bg-white" style={{ width: '100%', height: '100%' }}>
                                  <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{
                                      width: '190%',
                                      height: '190%',
                                      objectFit: 'cover',
                                      objectPosition: '80% 50%',
                                      transform: 'translate(0%, -20%)'
                                    }}
                                  />
                                </div>
                              }
                              {((groupIndex <= 1 && activePanel=="second") || (groupIndex < 1 && activePanel=="first")) &&
                                <div className="rounded-full overflow-hidden bg-white" style={{ width: '100%', height: '100%' }}>
                                  <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center"
                                  />
                                </div>}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                              {member.name}
                            </h3>
                            <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${member.color} text-white text-sm`}>
                              {member.designation}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </AnimatedSection>
    </div>
  );
}
