import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';


export default function ChapterInfo() {
    return (
        <div>
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
                    The ASHRAE BUET Student Chapter empowers mechanical engineering students to explore, learn, and excel in HVAC&R technologies. Through student-led initiatives, we provide hands-on learning, industry exposure, and guidance on professional and technical opportunities.
                    </motion.p>
                    
                    <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    >
                    {[
                        "Applied HVAC&R projects",
                        "Industry engagement and HVAC&R expos",
                        "Career development and mentoring programs in HVAC&R engineering",
                        "Technical seminars and workshops"
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
                        src="https://res.cloudinary.com/dll7cjob6/image/upload/v1773785526/1_k2ruu2.webp"
                        alt="ASHRAE BUET Student Chapter Activities"
                        className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    {/* <div className="absolute bottom-6 left-6 text-white">
                        <p className="text-sm font-medium mb-1">Student Chapter Event 2025</p>
                        <p className="text-lg font-bold">Learning Through Innovation</p>
                    </div> */}
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
        </div>
    );
}
