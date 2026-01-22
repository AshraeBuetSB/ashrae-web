import { Award, Building2, Handshake, MapPin, Users } from 'lucide-react';

const activities = [
{
    id: 9,
    slug: "industry-tour-26",
    title: "Industrial Visit to Elite Hi-Tech Industries Ltd",
    description: "Members of the ASHRAE BUET Student Branch participated in an industrial visit to Elite Hi-Tech Industries Ltd., Cumilla. The visit provided students with valuable firsthand exposure to the real-world manufacturing and processing of complete air conditioning units at a state-of-the-art industrial facility.",
    icon: <MapPin className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    date: "January 2026",
    location: "Elite Hi-Tech Industries Ltd., Cumilla",
    category: "Educational"
  },
  {
    id: 1,
    slug: "ashrae-buet-inauguration",
    title: "Official Inauguration of the ASHRAE BUET Student Branch",
    description: "The ASHRAE BUET Student Branch officially commenced its journey toward advancing HVAC&R education, research, and professional excellence through an insightful inauguration ceremony, graced by the distinguished presence of prominent leaders and veterans from the HVAC&R field.",
    icon: <Building2 className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    date: "October 2024",
    location: "ME Building, BUET",
    category: "Milestone Event"
  },
  {
    id: 2,
    slug: "ashrae-buet-sb-grant-received",
    title: "Secured Two ASHRAE UG Equipment Grants on First Try",
    description: "The ASHRAE BUET Student Branch secured two ASHRAE Undergraduate Program Equipment Grants on its first-ever application, receiving a total of USD 1,370 in funding in recognition of innovative, student-led projects in sustainable cooling systems and heat exchanger design.",
    icon: <Award className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    date: "April 2025",
    location: "ASHRAE Headquarters",
    category: "Achievement"
  },
  {
    id: 3,
    slug: "industry-tour",
    title: "Industrial Visit to Elite Hi-Tech Industries Ltd",
    description: "Members of the ASHRAE BUET Student Branch participated in an industrial visit to Elite Hi-Tech Industries Ltd., Cumilla. The visit provided students with valuable firsthand exposure to the real-world manufacturing and processing of complete air conditioning units at a state-of-the-art industrial facility.",
    icon: <MapPin className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    date: "December 2024",
    location: "Elite Hi-Tech Industries Ltd., Cumilla",
    category: "Educational"
  },
  {
    id: 4,
    slug: "ashrae-bangladesh-meeting",
    title: "Participates in ASHRAE Bangladesh Chapter Monthly General Meeting & Technical Session",
    description: "Members of the ASHRAE BUET Student Branch attended the Monthly General Meeting and Technical Session organized by the ASHRAE Bangladesh Chapter on 30 October 2025, gaining valuable opportunities for professional networking, technical knowledge sharing, and engagement with industry and academic experts in the HVAC&R field.",
    icon: <Users className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    date: "October 2025",
    location: "PWD Auditorium, Purto Bhaban, Segunbagicha, Dhaka",
    category: "Networking"
  },
  {
  id: 7,
  slug: "icme-2025",
  title: "Representation of the Student Branch at ICME 2025",
  description: "ASHRAE BUET Student Branch successfully represented itself at International Conference of Mechanical Engineering (ICME) 2025 by showcasing the students’ projects, recognized by national and international conferences. We were greatly appreciated by honourable university faculties and reputed industrialists.",
  icon: <Handshake className="w-8 h-8" />,
  color: "from-teal-500 to-blue-500",
  date: "October 2025",
  location: "BUET Premises",
  category: "Conference"
},
  {
    id: 5,
    slug: "abc-post-grant-winning-ceremony",
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
    slug: "safecon-2025",
    title: "ASHRAE BUET Student Branch at SAFECON 2025",
    description: "The ASHRAE BUET Student Branch participated in SAFECON 2025, 𝐭𝐡𝐞 𝟏𝟎𝐭𝐡 𝐞𝐝𝐢𝐭𝐢𝐨𝐧 𝐨𝐟 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡’𝐬 𝐥𝐚𝐫𝐠𝐞𝐬𝐭 𝐢𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐢𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞 𝐞𝐱𝐡𝐢𝐛𝐢𝐭𝐢𝐨𝐧, organized by Savor International Ltd, showcasing three innovative HVAC&R projects at the Student Innovations Display Booth while engaging with industry professionals to foster industry–academia collaboration, explore real-world applications, and gain insights into sustainable infrastructure and green building practices.",
    icon: <Handshake className="w-8 h-8" />,
    color: "from-teal-500 to-blue-500",
    date: "May 2025",
    location: "International Convention City Bashundhara - ICCB",
    category: "Conference"
  },
  {
    id: 8,
    slug: "1st-panel-farewell",
    title: "Leadership Transition at ASHRAE BUET Student Branch",
    description: "The ASHRAE BUET Student Branch formally concluded the tenure of the Executive Committee 2024-25, recognizing their impactful leadership and contributions, while welcoming the Executive Committee 2025-26 and extending best wishes as they take on the responsibility of leading the Branch toward continued growth and new milestones.",
    icon: <Users className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-500",
    date: "June 2025",
    location: "ME Building, BUET",
    category: "Ceremony"
  }
];

export default activities;
