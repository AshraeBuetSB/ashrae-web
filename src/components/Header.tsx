import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const MotionLink = motion(Link);

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
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
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 to-green-400 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                        <img 
                        src="./WhatsApp Image 2025-06-19 at 13.46.32_36dddcee.jpg" 
                        alt="ASHRAE BUET Logo" 
                        className="w-6 h-6 sm:w-10 sm:h-10 object-contain"
                        />
                    </div>
                    </div>
                    <div>
                    <h1 className="text-sm sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                        ASHRAE BUET
                    </h1>
                    <p className="text-xs sm:text-xs text-gray-300">Student Chapter</p>
                    </div>
                </motion.div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                {['Home', 'About', 'Activities', 'Events', 'Members', 'Contact'].map((item) => (
                    <MotionLink
                    key={item}
                    to={`/${item.toLowerCase()}`}
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
                    </MotionLink>
                ))}
                </nav>

                
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
                    {['Home', 'About', 'Activities', 'Events', 'Members', 'Contact'].map((item) => (
                        <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="block py-2 text-gray-300 hover:text-white transition-colors duration-200"
                        whileHover={{ x: 10 }}
                        onClick={() => setIsMenuOpen(false)}
                        >
                        {item}
                        </motion.a>
                    ))}
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
            </motion.header>
        </div>
    );
}