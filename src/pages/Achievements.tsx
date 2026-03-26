import { motion } from 'framer-motion';
import { Calendar, ArrowRight} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';
import achievements from '../db/achievements';

export default function Achievements() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
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
                Our Achievements
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Explore the achievements of the ASHRAE BUET Student Branch, showcasing our technical events, professional development initiatives, achievements, and key milestones that reflect our commitment to excellence and student engagement.            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Link to={`/achievements/${achievement.slug}`} key={achievement.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden group h-full flex flex-col"
                >
                  <div className="w-full h-64 sm:h-72 overflow-hidden relative">
                    <motion.img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="pt-4 pb-6 pl-6 pr-6 sm:pt-6 sm:pb-8 sm:pl-8 sm:pr-8 flex flex-col flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 min-h-[5.25rem] leading-tight group-hover:text-blue-300 transition-colors duration-300 line-clamp-3">
                      {achievement.title}
                    </h3>

                    <div className="mt-auto" />

                    {/* Event Details */}
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-400 mt-5">
                        <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Statistics Section */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Achievement Impact
            </h2>
            <p className="text-gray-300 text-lg">
              Our achievements have made a significant impact on the HVAC&R community
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "7+", label: "Major Events" },
              { number: "200+", label: "Participants" },
              { number: "15+", label: "Industry Partners" },
              { number: "3", label: "Awards Won" }
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
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2"
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

      {/* Call to Action */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Want to Join Our Next Achievement?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Stay connected with us to be part of upcoming events and achievements that will enhance your HVAC&R knowledge and professional network.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a href='/home#connect'>
            <motion.button 
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
            </a>
          </motion.div>
          
        </div>
      </AnimatedSection>
    </div>
  );
}