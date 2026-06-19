import { motion } from 'framer-motion';
import { FileText, Calendar, User, ExternalLink, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import publications from '../db/publications';


export default function Publications() {
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl flex items-center justify-center shadow-lg transform rotate-3"
            >
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Research & Publications
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Exploring the frontiers of HVAC&R technology through academic research and technical publications by our members.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Publications List */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 hover:bg-white/15 transition-colors duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
                      {pub.type}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {pub.date}
                    </div>
                  </div>

                  {pub.link && pub.link !== '#' ? (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="block">
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors">
                        {pub.title}
                      </h3>
                    </a>
                  ) : pub.doi ? (
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="block">
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors">
                        {pub.title}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors">
                      {pub.title}
                    </h3>
                  )}

                  <div className="flex items-center text-gray-300 mb-4 text-sm">
                    <User className="w-4 h-4 mr-2 text-purple-400" />
                    <span>{pub.authors}</span>
                  </div>

                  {/* <p className="text-gray-300 mb-4 leading-relaxed">
                    {pub.abstract}
                  </p> */}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-white/10">
                    <div className="flex flex-col space-y-1">
                      {pub.doi && (
                        <div className="text-md text-purple-300 flex items-center">
                          <span className="text-gray-400 mr-1.5 uppercase tracking-wider text-md">DOI:</span>
                          <a 
                            href={pub.doi} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline text-blue-400"
                          >
                            {pub.doi.replace('https://doi.org/', '')}
                          </a>
                        </div>
                      )}
                      <span className="text-sm text-gray-400 italic">
                        {pub.journal}
                      </span>
                    </div>

                    {pub.link && pub.link !== '#' && (
                      <a 
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-400 font-semibold self-start sm:self-auto"
                      >
                        <span>Read Paper</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}