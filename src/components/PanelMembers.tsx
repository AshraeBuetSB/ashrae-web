import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

export default function PanelMembers() {
    return (
        <div>
            {/* Meet the Panel Members Section */}
            <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2 
                    className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    >
                    Meet the Panel Members
                    </motion.h2>
                    <motion.p 
                    className="text-xl text-gray-300 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    >
                    Our leadership team, committed to advancing HVAC&R knowledge and guiding BUET students toward excellence
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {[
                    {
                        name: "Arafath Rahman Nishat",
                        designation: "Vice President",
                        image: "./vp.webp",
                        color: "from-green-500 to-emerald-500",
                        mobileOrder: "order-2 md:order-1"
                    },
                    {
                        name: "Md. Luban Mehda",
                        designation: "President", 
                        image: "./president.webp",
                        color: "from-purple-500 to-pink-500",
                        mobileOrder: "order-1 md:order-2"
                    },
                    {
                        name: "Safwan Sakib",
                        designation: "Treasurer",
                        image: "./treasurer.webp",
                        color: "from-blue-500 to-cyan-500",
                        mobileOrder: "order-3"
                    },
                    {
                        name: "Nahian Prapon Jaman",
                        designation: "Secretary",
                        image: "https://i.postimg.cc/vT1tm2df/Nahiyan-Prapon-Jaman-Secretary.png",
                        color: "from-amber-400 to-orange-500",
                        mobileOrder: "order-4"
                    }
                    ].map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center ${member.mobileOrder}`}
                    >
                        {/* Member Photo */}
                        <div className="relative mb-6 flex justify-center">
                        <div className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-gradient-to-r ${member.color} p-1`}>
                            <div className="w-full h-full rounded-full overflow-hidden bg-white">
                            <img 
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover object-center"
                            />
                            </div>
                        </div>
                        </div>
                        
                        {/* Member Info */}
                        <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                            {member.name}
                        </h3>
                        <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${member.color} text-white font-semibold text-sm sm:text-base`}>
                            {member.designation}
                        </div>
                        </div>
                    </motion.div>
                    ))}
                </div>
                </div>
            </AnimatedSection>
        </div>
    );
}
