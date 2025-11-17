import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

export default function CTA() {
    return (
        <div>
            {/* CTA Section */}
            <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center" id='connect'>
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
                    > <a href="mailto:mail@ashrae-buet.com">
                    mail@ashrae-buet.com
                    </a></motion.button>
 <motion.button 
                    className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    >
                    +8801012345678
                    </motion.button>
                    
                    {/*<motion.button 
                    className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    +8801012345678
                    </motion.button>*/}
{/*<motion.p className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight"> mail@ashrae-buet.com </motion.p>
<motion.p className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight"> +8801012345678 </motion.p>*/}
                </motion.div>
                </div>
            </AnimatedSection>
        </div>
    );
}