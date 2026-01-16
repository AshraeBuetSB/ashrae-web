import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../db/projects';
import { Eye, BookOpen } from 'lucide-react';

export default function Projects() {
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
                Innovating for a Sustainable Future
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Explore award-winning research and grant-funded prototypes designed by ASHRAE BUET Student Branch students to solve real-world HVAC&R challenges.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Publications CTA */}
      <AnimatedSection className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/publications">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                <span>View Publications</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Projects Grid */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link to={`/projects/${project.slug}`} key={project.slug}>
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden group flex flex-col min-h-[460px] sm:min-h-[500px] lg:min-h-[520px]"
                >
                  {/* Project Image */}
                  <div className="w-full h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description (line clamped) */}
                    <p className="text-gray-300 leading-relaxed mb-6 text-sm line-clamp-4">
                      {project.description}
                    </p>

                    {/* View Button */}
                    <motion.div
                      className="mt-auto w-full bg-gradient-to-r from-blue-500 to-green-500 hover:shadow-lg text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Eye className="w-5 h-5" />
                      <span>View Project</span>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      
    </div>
  );
}
