
import { motion } from 'framer-motion';
import { Target, Building2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';


export default function MissionAndValues() {
    return (
        <div>
            {/* Mission & Values Section */}
            <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2 
                    className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    >
                    Our Mission & Values
                    </motion.h2>
                    <motion.p 
                    className="text-xl text-gray-300 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    >
                    Empowering BUET students to develop technical competence, professional ethics, and global perspective in HVAC&R through ASHRAE-guided learning and engagement.
                    </motion.p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                    <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                        <div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                            <Target className="w-6 h-6 text-blue-400 mr-3" />
                            Our Mission
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-center">
                            To support ASHRAE’s global mission by promoting HVAC&R knowledge, professional ethics, and sustainable practices among BUET students through seminars, workshops, projects, and industry engagement.
                        </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                        <div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-green-400 mr-3" />
                            Core Values
                        </h3>
                        <div className="space-y-4">
                            {[
                            "Excellence in engineering and technical innovation",
                            "Commitment to sustainability and environmental stewardship",
                            "Professional development and lifelong learning",
                            "Collaboration, leadership, and knowledge sharing"
                            ].map((value, index) => (
                            <motion.div 
                                key={index}
                                className="flex items-center space-x-3"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300">{value}</span>
                            </motion.div>
                            ))}
                        </div>
                        </div>
                    </div>
                    </motion.div>
                </div>
                </div>
            </AnimatedSection>
        </div>
    );
}
