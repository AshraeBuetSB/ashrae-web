import { motion } from 'framer-motion';
import { Eye, Calendar, MapPin, Users, Award, Building2, Handshake } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const activities = [
  {
    id: 1,
    title: "ASHRAE BUET Inauguration",
    description: "The official launch ceremony of ASHRAE BUET Student Branch, marking the beginning of our journey in advancing HVAC&R education and innovation.",
    icon: <Building2 className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    date: "October 2024",
    location: "BUET Campus",
    category: "Milestone Event"
  },
  {
    id: 2,
    title: "ASHRAE BUET SB Grant Received",
    description: "Celebration of receiving the official student branch grant from ASHRAE, enabling us to conduct various educational and professional activities.",
    icon: <Award className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    date: "April 2024",
    location: "ASHRAE Headquarters",
    category: "Achievement"
  },
  {
    id: 3,
    title: "Industry Tour",
    description: "Educational visits to leading HVAC&R facilities and manufacturing plants, providing hands-on exposure to real-world applications and industry practices.",
    icon: <MapPin className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    date: "December 2024",
    location: "Various Industries",
    category: "Educational"
  },
  {
    id: 4,
    title: "ASHRAE Bangladesh Meeting",
    description: "Participation in the national ASHRAE Bangladesh chapter meeting, fostering connections with industry professionals and fellow students.",
    icon: <Users className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    date: "September 2024",
    location: "Dhaka",
    category: "Networking"
  },
  {
    id: 5,
    title: "ABC Post Grant Winning Ceremony",
    description: "Recognition ceremony for achieving the ABC (ASHRAE Bangladesh Chapter) post-grant milestone, celebrating our successful project implementations.",
    icon: <Award className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    date: "August 2024",
    location: "BUET Auditorium",
    category: "Achievement"
  },
  {
    id: 6,
    title: "SAFECON 2025",
    description: "Participation in the Safety Conference 2025, focusing on safety protocols and best practices in HVAC&R systems and installations.",
    icon: <Handshake className="w-8 h-8" />,
    color: "from-teal-500 to-blue-500",
    date: "May 2025",
    location: "Convention Center",
    category: "Conference"
  },
  {
    id: 7,
    title: "1st Panel Farewell",
    description: "Farewell ceremony honoring the founding panel members of ASHRAE BUET Student Branch, celebrating their contributions and achievements.",
    icon: <Users className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-500",
    date: "June 2024",
    location: "BUET Campus",
    category: "Ceremony"
  }
];

export default function Activities() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Our Activities
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Explore our journey through various events, achievements, and milestones that have shaped the ASHRAE BUET Student Branch community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden group"
              >
                {/* Card Header */}
                <div className={`h-2 bg-gradient-to-r ${activity.color}`}></div>
                
                <div className="p-8">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${activity.color}`}>
                      <div className="text-white">
                        {activity.icon}
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                      {activity.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    {activity.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="w-4 h-4 mr-2 text-green-400" />
                      <span>{activity.location}</span>
                    </div>
                  </div>

                  {/* View Button */}
                  <motion.button
                    className={`w-full bg-gradient-to-r ${activity.color} hover:shadow-lg text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-xl`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Eye className="w-5 h-5" />
                    <span>View Details</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Statistics Section */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Activity Impact
            </h2>
            <p className="text-gray-300 text-lg">
              Our activities have made a significant impact on the HVAC&R community
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "7+", label: "Major Events" },
              { number: "200+", label: "Participants" },
              { number: "15+", label: "Industry Partners" },
              { number: "3", label: "Awards Won" }
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
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2"
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

      {/* Call to Action */}
      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Want to Join Our Next Activity?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Stay connected with us to be part of upcoming events and activities that will enhance your HVAC&R knowledge and professional network.
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
            >
              Contact Us
            </motion.button>
          </motion.div>
          
        </div>
      </AnimatedSection>
    </div>
  );
}