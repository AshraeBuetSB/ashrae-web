import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

export default function AdvisorQuote() {
    return (
        <div>
            
        {/* Advisor Quote Section */}
        <AnimatedSection className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500/10 to-green-500/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/20"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                {/* Advisor Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center lg:justify-start"
                >
                    <div className="relative">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 to-green-400 p-1">
                        <div className="w-full h-full rounded-full overflow-hidden">
                        <img 
                            src="https://res.cloudinary.com/dll7cjob6/image/upload/v1776353915/Dr._Md._Ashiqur_Rahman_Advisor_u2ct4w.webp"
                            alt="Dr. Md. Ashiqur Rahman"
                            className="w-full h-full object-cover object-[center_20%]"
                        />
                        </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
                    </div>
                </motion.div>
                
                {/* Quote Content */}
                <div className="lg:col-span-2 text-center lg:text-left">
                    <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    >
                    {/* Quote Icon */}
                    <div className="flex justify-center lg:justify-start mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                        </div>
                    </div>
                    
                    {/* Quote Text */}
                    <blockquote className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 italic">
                        "Welcome, everyone! As the faculty advisor of ASHRAE BUET Student Branch, I am very excited and happy to see our chapter grow within a very short time. This student chapter serves as a bridge between academic learning and industry practice in HVAC&R via technical sessions, a range of events, and real-world projects. Stay curious, get involved, and let's make this ASHRAE BUET student branch impactful!"
                        </blockquote>
                    
                    {/* Advisor Info */}
                    <div className="border-l-4 border-gradient-to-b from-blue-400 to-green-400 pl-6">
                        <div className="text-xl sm:text-2xl font-bold text-white mb-2">
                        Dr. Md. Ashiqur Rahman
                        </div>
                        <div className="text-blue-400 font-semibold mb-1">
                        Advisor, ASHRAE BUET Student Branch
                        </div>
                        <div className="text-gray-300">
                        Professor, Department of Mechanical Engineering, BUET
                        </div>
                    </div>
                    </motion.div>
                </div>
                </div>
            </motion.div>
            </div>
        </AnimatedSection>
        </div>
    );
}