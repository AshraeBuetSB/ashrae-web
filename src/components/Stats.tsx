import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

export default function Stats() {
    return (
        <div>
            {/* Stats Section */}
            <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                { number: "150+", label: "Student Members" },
                { number: "25+", label: "Technical Sessions" },
                { number: "10+", label: "Industry Partners" },
                { number: "5+", label: "Awards Won" }
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
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2"
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
        </div>
    );
}