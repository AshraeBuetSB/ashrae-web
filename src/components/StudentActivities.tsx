import {  BookOpen , Lightbulb, Trophy, UserCheck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FloatingCard from '../components/FloatingCard';

export default function StudentActivities() {
    return (
        <div>
            {/* Student Activities Grid */}
            <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Student Activities
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Engaging activities designed to enhance learning and professional development
                </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    {
                    icon: <BookOpen className="w-8 h-8" />,
                    title: "Technical Workshops",
                    description: "Hands-on learning sessions on HVAC design, installation, and maintenance",
                    color: "from-blue-400 to-cyan-400"
                    },
                    {
                    icon: <Lightbulb className="w-8 h-8" />,
                    title: "Innovation Projects",
                    description: "Student-led research projects exploring sustainable HVAC solutions",
                    color: "from-yellow-400 to-orange-400"
                    },
                    {
                    icon: <Trophy className="w-8 h-8" />,
                    title: "Competitions",
                    description: "Participate in national and international HVAC design competitions",
                    color: "from-purple-400 to-pink-400"
                    },
                    {
                    icon: <UserCheck className="w-8 h-8" />,
                    title: "Industry Visits",
                    description: "Field trips to HVAC facilities and interaction with industry professionals",
                    color: "from-green-400 to-emerald-400"
                    }
                ].map((activity, index) => (
                    <FloatingCard key={index} delay={index * 0.1} className="p-8 text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${activity.color} mb-6`}>
                        <div className="text-white">
                        {activity.icon}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{activity.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                    </FloatingCard>
                ))}
                </div>
            </div>
            </AnimatedSection>
        </div>
    );
}