import { motion } from 'framer-motion';
import { GraduationCap, ChevronDown } from 'lucide-react';

export default function HeroSection() {
    return (
        <div>
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
            
            {/* <motion.div 
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
            </motion.div> */}
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
        </div>
    );
}