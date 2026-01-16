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
                    Hands-on technical and professional activities focused on HVAC&R learning and industry exposure
                </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    {
                    icon: <Lightbulb className="w-8 h-8" />,
                    title: "Applied HVAC&R Projects and Research",
                    description: "Projects applying HVAC&R principles, aligned with ASHRAE standards and sustainable practices. Projects foster technical skills, problem-solving, and innovative thinking",
                    color: "from-blue-400 to-cyan-400"
                    },
                    {
                    icon: <BookOpen className="w-8 h-8" />,
                    title: "Exploring ASHRAE Student Activities",
                    description: "Participation in ASHRAE grant and professional initiatives, with awarded grants supporting student projects and technical activities, alongside exposure to standards and career development opportunities",
                    color: "from-yellow-400 to-orange-400"
                    },
                    {
                    icon: <UserCheck className="w-8 h-8" />,
                    title: "Technical Tour and Industry Engagement Competitions",
                    description: "Visits to HVAC&R facilities and Manufacturing Plants, offering students direct exposure to real-world systems, operational practices, and professional workflows. These trips include discussions with engineers and demonstrations of current technologies",
                    color: "from-purple-400 to-pink-400"
                    },
                    {
                    icon: <UserCheck className="w-8 h-8" />,
                    title: "Participating HVAC&R Expos",
                    description: "Engagement in HVAC&R expos and exhibitions, enabling students to observe real-world applications, interact with professionals, and understand industry standards and innovations.",
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
