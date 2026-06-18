'use client';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import db from '../db/db';

const groups = [
  { title: 'Advisor', designations: ['Advisor'] },
  { title: 'Core Panel', designations: ['President', 'Vice President', 'Treasurer', 'Secretary'] },
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
  { title: 'Coordinators', designations: ['Coordinator'] },
  { title: 'Associate Coordinators', designations: ['Associate Coordinator'] },
  { title: 'Assistant Coordinators', designations: ['Assistant Coordinator'] },
];

export default function Members() {
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
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Meet the team
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Our passionate team powering the future of HVAC&R excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

          {groups.map((group, _groupIndex) => {
            const members = db.filter(member => group.designations.includes(member.designation));

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
                          style={{ width: '140px', height: '140px' }} // explicitly fixed circle size
                        >
                          
                          {/* {(groupIndex > 1 || (groupIndex == 1 && index == 3)) &&
                            <div
                              className="rounded-full overflow-hidden bg-white"
                              style={{ width: '100%', height: '100%' }}
                            >
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
                          } */}
                          {/* {groupIndex <= 1 && */}
                            <div
                              className="rounded-full overflow-hidden bg-white"
                              style={{ width: '100%', height: '100%' }}
                            ><img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover object-center"
                              />
                            </div>
                            {/* } */}
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
        </div>
      </AnimatedSection>
    </div>
  );
}
