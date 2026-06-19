import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Trophy, UserCheck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const activities = [
  {
    icon: <Lightbulb className="w-7 h-7 text-white" />,
    title: 'Applied HVAC&R Projects and Research',
    description:
      'Projects applying HVAC&R principles, aligned with ASHRAE standards and sustainable practices, fostering technical skills, problem-solving, and innovative thinking.',
    gradient: 'from-blue-500 to-cyan-500',
    hoverBorder: 'hover:border-blue-400/50',
  },
  {
    icon: <BookOpen className="w-7 h-7 text-white" />,
    title: 'Exploring ASHRAE Student Initiatives',
    description:
      'Participation in ASHRAE grant and professional programs, with awarded grants supporting student projects alongside exposure to standards and career development opportunities.',
    gradient: 'from-amber-400 to-orange-500',
    hoverBorder: 'hover:border-amber-400/50',
  },
  {
    icon: <UserCheck className="w-7 h-7 text-white" />,
    title: 'Technical Tours and Industry Engagement',
    description:
      'Visits to HVAC&R facilities and manufacturing plants, offering direct exposure to real-world systems, operational practices, and professional workflows with working engineers.',
    gradient: 'from-purple-500 to-pink-500',
    hoverBorder: 'hover:border-purple-400/50',
  },
  {
    icon: <Trophy className="w-7 h-7 text-white" />,
    title: 'Participating in HVAC&R Expos',
    description:
      'Engagement in HVAC&R expos and exhibitions, enabling students to observe real-world applications, interact with professionals, and understand industry standards and innovations.',
    gradient: 'from-green-400 to-emerald-500',
    hoverBorder: 'hover:border-green-400/50',
  },
];

export default function StudentActivities() {
  return (
    <div>
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Student Activities
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Hands-on technical and professional activities focused on HVAC&R
              learning and industry exposure.
            </motion.p>
          </div>

          {/* Activity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`
                  flex flex-col bg-white/10 backdrop-blur-lg rounded-3xl p-8
                  border border-white/20 transition-colors duration-300
                  ${activity.hoverBorder}
                `}
              >
                {/* Icon bubble */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${activity.gradient} mb-6 shadow-lg`}
                >
                  {activity.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {activity.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6">
                  <div
                    className={`h-0.5 w-10 rounded-full bg-gradient-to-r ${activity.gradient}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </AnimatedSection>
    </div>
  );
}
