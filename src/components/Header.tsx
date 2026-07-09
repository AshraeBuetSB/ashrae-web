import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ScrollToTop from './ScrollToTop';

const MotionLink = motion(Link);

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const navigation = [
        {label: 'Home', href: "/"},
        {label: 'Achievements', href: '/achievements'},
        {label: 'Activities', href: '/activities'},
        {label: 'Projects', href: '/projects'},
        {label: 'Executive Committee', href: '/members'}
        
    ]
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
              <a href="/"
              className="flex items-center space-x-3 drop-shadow-lg"
            >
              <img src={"/ASHARE_BUET_SB_Logo_H.png"} alt="ASHRAE logo" height={50} width={125} />
            </a>
            </motion.div>
                
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                {/* {['Home', 'About', 'Activities', 'Events', 'Members', 'Contact'].map((item) => ( */}
                {navigation.map((item)=>(
                    <MotionLink
                    key={item.label}
                    to={item.href}
                    className="relative text-gray-300 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    {item.label}
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
                    <a href='/#connect'>
                        <motion.button 
                        className="hidden sm:block bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-lg"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        >
                        Contact Us
                        </motion.button>
                        
                        <motion.button 
                        className="sm:hidden bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        >
                        Contact
                        </motion.button>
                    </a>

                    <button
                    className="lg:hidden text-white"
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
                    className="lg:hidden bg-black/30 backdrop-blur-lg border-t border-white/10"
                >
                    <div className="px-4 py-4 space-y-3">
                    {/* {['Home', 'About', 'Activities', 'Events', 'Members', 'Contact'].map((item) => ( */}
                    {navigation.map((item) => (
                        <MotionLink
                            key={item.label}
                            to={item.href}
                            className="block py-2 text-gray-300 hover:text-white transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen(false)}
                            >
                            {item.label}
                        </MotionLink>
                    ))}
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
            </motion.header>
            <ScrollToTop/>
        </div>
    );
}