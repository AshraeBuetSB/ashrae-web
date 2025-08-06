import { motion } from "framer-motion"
import AnimatedSection from "./AnimatedSection"

export default function Sponsors() {
    return (
        <div>
            {/* Sponsors Section */}
            <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
                <div id="sponsors" className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Our Sponsors
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-300 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            We are grateful to our sponsors who support our mission to advance HVAC&R education and innovation
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "American Society of Heating, Refrigerating and Air-Conditioning Engineers",
                                logo: "./sponsors/ashrae.png",
                                category: "Professional Society"
                            },
                            {
                                name: "Hands-on Ultrasound Training Academy",
                                logo: "./sponsors/Hands-on_Ultrasound_Training_Academy.png",
                                category: "Training Partner"
                            },
                            {
                                name: "Zenzone",
                                logo: "./sponsors/Zenzone.png",
                                category: "Technology Partner"
                            },
                            {
                                name: "Wemake",
                                logo: "./sponsors/Wemake.png",
                                category: "Industry Partner"
                            }
                        ].map((sponsor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 h-full flex flex-col justify-between">
                                    {/* Logo Container */}
                                    <div className="flex-1 flex items-center justify-center mb-6">
                                        <div className="w-32 h-32 flex items-center justify-center bg-white/90 rounded-xl p-4 group-hover:scale-105 transition-transform duration-300">
                                            <img
                                                src={sponsor.logo}
                                                alt={sponsor.name}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Sponsor Info */}
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                            {sponsor.name}
                                        </h3>
                                        <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-400/30">
                                            <span className="text-blue-300 text-sm font-medium">{sponsor.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    )
}