import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Copy, Check, Plus, Trash2, FileCode, Sparkles, RefreshCw } from 'lucide-react';

type Tab = 'projects' | 'activities' | 'achievements' | 'publications' | 'members';

export default function DbGenerator() {
  const [activeTab, setActiveTab] = useState<Tab>('projects');
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  // Auto-slug state
  const [autoSlug, setAutoSlug] = useState(true);

  // --- FORM STATES (Empty/Neutral Defaults) ---
  // Projects State
  const [project, setProject] = useState({
    id: 10,
    slug: '',
    title: '',
    image: '',
    description: '',
    overview: '',
    banner: '',
    year: 2026,
    technicalInnovations: [] as string[],
    team: [] as string[],
    gallery: [] as string[]
  });

  // Activities State
  const [activity, setActivity] = useState({
    id: 11,
    slug: '',
    title: '',
    description: '',
    image: '',
    date: '',
    location: '',
    category: '',
    overview: '',
    attendees: [] as string[],
    gallery: [] as string[],
    key_moments: [] as string[]
  });

  // Achievements State
  const [achievement, setAchievement] = useState({
    id: 4,
    slug: '',
    title: '',
    description: '',
    image: '',
    date: '',
    type: 'scholarship' as 'scholarship' | 'paper' | 'grant',
    papers: 1,
    amount: '',
    overview: '',
    recipients: [] as string[],
    gallery: [] as string[],
    key_takeouts: [] as string[],
    awards: [] as { team: string; amount: string }[]
  });

  // Publications State
  const [publication, setPublication] = useState({
    id: 5,
    title: '',
    authors: '',
    journal: '',
    date: '',
    link: '',
    type: 'Conference Paper',
    doi: ''
  });

  // Members State
  const [member, setMember] = useState({
    name: '',
    designation: '',
    image: '',
    color: 'from-green-500 to-emerald-500'
  });

  // --- AUTO SLUG TRIGGERS ---
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  useEffect(() => {
    if (autoSlug && project.title) {
      setProject(p => ({ ...p, slug: slugify(p.title) }));
    }
  }, [project.title, autoSlug]);

  useEffect(() => {
    if (autoSlug && activity.title) {
      setActivity(a => ({ ...a, slug: slugify(a.title) }));
    }
  }, [activity.title, autoSlug]);

  useEffect(() => {
    if (autoSlug && achievement.title) {
      setAchievement(ac => ({ ...ac, slug: slugify(ac.title) }));
    }
  }, [achievement.title, autoSlug]);

  // --- COPY FUNCTION ---
  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  // --- ARRAY INPUT UTILITIES ---
  const updateArrayField = (
    tab: Tab,
    field: string,
    index: number,
    value: string
  ) => {
    if (tab === 'projects') {
      setProject(p => {
        const arr = [...p.team];
        if (field === 'technicalInnovations') {
          const arrInn = [...p.technicalInnovations];
          arrInn[index] = value;
          return { ...p, technicalInnovations: arrInn };
        } else if (field === 'gallery') {
          const arrGal = [...p.gallery];
          arrGal[index] = value;
          return { ...p, gallery: arrGal };
        }
        arr[index] = value;
        return { ...p, team: arr };
      });
    } else if (tab === 'activities') {
      setActivity(a => {
        if (field === 'attendees') {
          const arrAtt = [...a.attendees];
          arrAtt[index] = value;
          return { ...a, attendees: arrAtt };
        } else if (field === 'gallery') {
          const arrGal = [...a.gallery];
          arrGal[index] = value;
          return { ...a, gallery: arrGal };
        } else if (field === 'key_moments') {
          const arrMom = [...a.key_moments];
          arrMom[index] = value;
          return { ...a, key_moments: arrMom };
        }
        return a;
      });
    } else if (tab === 'achievements') {
      setAchievement(ac => {
        if (field === 'recipients') {
          const arrRec = [...ac.recipients];
          arrRec[index] = value;
          return { ...ac, recipients: arrRec };
        } else if (field === 'gallery') {
          const arrGal = [...ac.gallery];
          arrGal[index] = value;
          return { ...ac, gallery: arrGal };
        } else if (field === 'key_takeouts') {
          const arrTk = [...ac.key_takeouts];
          arrTk[index] = value;
          return { ...ac, key_takeouts: arrTk };
        }
        return ac;
      });
    }
  };

  const addArrayItem = (tab: Tab, field: string) => {
    if (tab === 'projects') {
      setProject(p => {
        if (field === 'technicalInnovations') {
          return { ...p, technicalInnovations: [...p.technicalInnovations, ''] };
        } else if (field === 'gallery') {
          return { ...p, gallery: [...p.gallery, ''] };
        }
        return { ...p, team: [...p.team, ''] };
      });
    } else if (tab === 'activities') {
      setActivity(a => {
        if (field === 'attendees') {
          return { ...a, attendees: [...a.attendees, ''] };
        } else if (field === 'gallery') {
          return { ...a, gallery: [...a.gallery, ''] };
        } else if (field === 'key_moments') {
          return { ...a, key_moments: [...a.key_moments, ''] };
        }
        return a;
      });
    } else if (tab === 'achievements') {
      setAchievement(ac => {
        if (field === 'recipients') {
          return { ...ac, recipients: [...ac.recipients, ''] };
        } else if (field === 'gallery') {
          return { ...ac, gallery: [...ac.gallery, ''] };
        } else if (field === 'key_takeouts') {
          return { ...ac, key_takeouts: [...ac.key_takeouts, ''] };
        }
        return ac;
      });
    }
  };

  const removeArrayItem = (tab: Tab, field: string, index: number) => {
    if (tab === 'projects') {
      setProject(p => {
        if (field === 'technicalInnovations') {
          return { ...p, technicalInnovations: p.technicalInnovations.filter((_, i) => i !== index) };
        } else if (field === 'gallery') {
          return { ...p, gallery: p.gallery.filter((_, i) => i !== index) };
        }
        return { ...p, team: p.team.filter((_, i) => i !== index) };
      });
    } else if (tab === 'activities') {
      setActivity(a => {
        if (field === 'attendees') {
          return { ...a, attendees: a.attendees.filter((_, i) => i !== index) };
        } else if (field === 'gallery') {
          return { ...a, gallery: a.gallery.filter((_, i) => i !== index) };
        } else if (field === 'key_moments') {
          return { ...a, key_moments: a.key_moments.filter((_, i) => i !== index) };
        }
        return a;
      });
    } else if (tab === 'achievements') {
      setAchievement(ac => {
        if (field === 'recipients') {
          return { ...ac, recipients: ac.recipients.filter((_, i) => i !== index) };
        } else if (field === 'gallery') {
          return { ...ac, gallery: ac.gallery.filter((_, i) => i !== index) };
        } else if (field === 'key_takeouts') {
          return { ...ac, key_takeouts: ac.key_takeouts.filter((_, i) => i !== index) };
        }
        return ac;
      });
    }
  };

  // Special for Achievement Awards (list of objects)
  const updateAwardField = (index: number, key: 'team' | 'amount', value: string) => {
    setAchievement(ac => {
      const arr = [...ac.awards];
      arr[index] = { ...arr[index], [key]: value };
      return { ...ac, awards: arr };
    });
  };

  const addAwardItem = () => {
    setAchievement(ac => ({
      ...ac,
      awards: [...ac.awards, { team: '', amount: '' }]
    }));
  };

  const removeAwardItem = (index: number) => {
    setAchievement(ac => ({
      ...ac,
      awards: ac.awards.filter((_, i) => i !== index)
    }));
  };

  // --- DEMO PRESET LOADER (All Personal Names Removed/Generalized) ---
  const loadDemo = (tab: Tab) => {
    if (tab === 'projects') {
      setProject({
        id: 10,
        slug: 'hybrid-draft-cooling-tower',
        title: 'Hybrid Draft Cooling Tower with PV Integration',
        image: 'https://res.cloudinary.com/dll7cjob6/image/upload/v1773767763/1_kj1rrt.webp',
        description: 'An aerodynamic cooling solution combining forced and natural draft, utilizing waste plastic components and solar photovoltaic energy.',
        overview: 'This project introduces an innovative hybrid draft cooling tower that integrates solar photovoltaic arrays to power auxiliary fans. Designed to bridge the gap between energy conservation and industrial requirements, this prototype uses recycled materials for its filler core and features an aerodynamically optimized nozzle design.',
        banner: 'Featured at SAFECON 2025 Student Innovations Display',
        year: 2025,
        technicalInnovations: [
          'Photovoltaic Integration: Custom PV ring to cover partial energy load of forced draft fans.',
          'Recycled Fill Media: Repurposed local PET waste shapes to maximize cooling contact area.'
        ],
        team: ['Lead Student Researcher 1', 'Student Researcher 2', 'Student Researcher 3'],
        gallery: [
          'https://res.cloudinary.com/dll7cjob6/image/upload/v1773767763/1_kj1rrt.webp',
          'https://res.cloudinary.com/dll7cjob6/image/upload/v1773767763/2_kj1rrt.webp'
        ]
      });
    } else if (tab === 'activities') {
      setActivity({
        id: 11,
        slug: 'safecon-2025-expo',
        title: 'Exhibition of HVAC Innovations at SAFECON 2025',
        description: 'The ASHRAE BUET Student Branch showcased three innovative HVAC&R projects at the SAFECON 2025 Student Innovations Display.',
        image: 'https://res.cloudinary.com/dll7cjob6/image/upload/v1773791521/Group_stall_pnvov8.webp',
        date: 'May 2025',
        location: 'International Convention City Bashundhara - ICCB, Dhaka',
        category: 'Exhibition',
        overview: 'The Student Branch successfully presented physical prototypes to over 500 visitors, including prominent industrial leaders, engineering graduates, and international delegates. This event strengthened university-industry connections and let students receive critical engineering feedback on their designs.',
        attendees: ['Executive Committee Members', 'Advisor Professor'],
        gallery: [
          'https://res.cloudinary.com/dll7cjob6/image/upload/v1773791521/Group_stall_pnvov8.webp'
        ],
        key_moments: [
          'Guided tour of the steam turbine controls.',
          'Demonstrated the working of the spiral-plate heat exchanger prototype.'
        ]
      });
    } else if (tab === 'achievements') {
      setAchievement({
        id: 4,
        slug: 'undergraduate-grant-success-2025',
        title: 'ASHRAE Undergraduate Program Equipment Grant Success',
        description: 'PH',
        image: 'https://res.cloudinary.com/dll7cjob6/image/upload/v1774292611/1_jcmf9h.webp',
        date: 'April 2025',
        type: 'grant',
        papers: 1,
        amount: '1,370',
        overview: 'Securing this grant empowers the student branch to scale up local research and buy advanced sensor equipment, solidifying our engineering capability.',
        recipients: ['Grant Recipient Student 1', 'Grant Recipient Student 2'],
        gallery: [
          'https://res.cloudinary.com/dll7cjob6/image/upload/v1774292611/1_jcmf9h.webp'
        ],
        key_takeouts: [
          'Funding covers critical calibration sensors and flow-meters.',
          'Mentored by standard ASHRAE design principles.'
        ],
        awards: [
          { team: 'Cooling Tower Project Group', amount: '$1,110' },
          { team: 'Heat Exchanger Project Group', amount: '$260' }
        ]
      });
    } else if (tab === 'publications') {
      setPublication({
        id: 5,
        title: 'Numerical Evaluation of Shell-and-Tube Exchangers Guided by Cinquefoil Orifice Plates',
        authors: 'Student Author 1, Student Author 2, Research Advisor',
        journal: 'Journal of Thermal Science and Engineering Applications',
        date: 'March 2026',
        link: '#',
        type: 'Journal Paper',
        doi: 'https://doi.org/10.1115/1.4005464'
      });
    } else if (tab === 'members') {
      setMember({
        name: 'Advisor Professor, Department of Mechanical Engineering',
        designation: 'Advisor & Student Activities Chair',
        image: 'https://res.cloudinary.com/dll7cjob6/image/upload/v1774542375/demo.png',
        color: 'from-green-500 to-emerald-500'
      });
    }
  };

  // --- GENERATED CODE STRINGS ---
  const generateProjectBriefCode = () => {
    return `  {
    id: ${project.id},
    slug: '${project.slug || 'new-project-slug'}',
    image: '${project.image || 'https://res.cloudinary.com/dll7cjob6/image/upload/v1773767501/1_n8xfyr.webp'}',
    title: '${(project.title || 'Project Title').replace(/'/g, "\\'")}',
    description: '${(project.description || 'Description').replace(/'/g, "\\'")}',
  },`;
  };

  const generateProjectDetailsCode = () => {
    const innovations = project.technicalInnovations.length > 0
      ? project.technicalInnovations.map(item => `      '${item.replace(/'/g, "\\'")}'`).join(',\n')
      : `      'Eco-Friendly Fill Material: Replaced expensive industrial-grade plastic with recycled PET.'`;
    const teamMems = project.team.length > 0
      ? project.team.map(item => `'${item.replace(/'/g, "\\'")}'`).join(', ')
      : `'Student Member 1', 'Student Member 2'`;
    const galleryItems = project.gallery.length > 0
      ? project.gallery.map(item => `      '${item.replace(/'/g, "\\'")}'`).join(',\n')
      : `      'https://res.cloudinary.com/dll7cjob6/image/upload/v1773767501/1_n8xfyr.webp'`;

    return `  '${project.slug || 'new-project-slug'}': {
    title: '${(project.title || 'Project Title').replace(/'/g, "\\'")}',
    image: '${project.image || 'https://res.cloudinary.com/dll7cjob6/image/upload/v1773767501/1_n8xfyr.webp'}',
    overview:
        \`${(project.overview || 'Detailed overview text.').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
    technicalInnovations: [
${innovations}
    ],
    banner: '${(project.banner || 'Award banner text').replace(/'/g, "\\'")}',
    team: [
      ${teamMems}
    ],
    year: ${project.year},
    gallery: [
${galleryItems}
    ],
  },`;
  };

  const generateActivityBriefCode = () => {
    return `  {
    id: ${activity.id},
    slug: '${activity.slug || 'activity-slug'}',
    title: '${(activity.title || 'Activity Title').replace(/'/g, "\\'")}',
    description: '${(activity.description || 'Description text').replace(/'/g, "\\'")}',
    image: '${activity.image || 'https://res.cloudinary.com/dll7cjob6/image/upload/v1773785526/1_k2ruu2.webp'}',
    date: '${activity.date || 'January 2026'}',
    location: '${(activity.location || 'BUET').replace(/'/g, "\\'")}',
  },`;
  };

  const generateActivityDetailsCode = () => {
    const attendeesList = activity.attendees.length > 0
      ? activity.attendees.map(item => `      '${item.replace(/'/g, "\\'")}'`).join(',\n')
      : `      'Registered Student Members'`;
    const galleryItems = activity.gallery.length > 0
      ? activity.gallery.map(item => `      '${item.replace(/'/g, "\\'")}'`).join(',\n')
      : `      'https://res.cloudinary.com/dll7cjob6/image/upload/v1773785526/1_k2ruu2.webp'`;
    const moments = activity.key_moments.length > 0
      ? activity.key_moments.map(item => `      '${item.replace(/'/g, "\\'")}'`).join(',\n')
      : `      'Interactive technical workshop session.'`;

    return `  '${activity.slug || 'activity-slug'}': {
    title: '${(activity.title || 'Activity Title').replace(/'/g, "\\'")}',
    overview:
        \`${(activity.overview || 'Activity overview description.').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
    date: '${activity.date || 'January 2026'}',
    location: '${(activity.location || 'BUET').replace(/'/g, "\\'")}',
    category: '${activity.category || 'Educational'}',
    attendees: [
${attendeesList}
    ],
    gallery: [
${galleryItems}
    ],
    key_moments: [
${moments}
    ]
  },`;
  };

  const generateAchievementBriefCode = () => {
    let customFields = '';
    if (achievement.type === 'paper') {
      customFields = `\n    papers: ${achievement.papers},`;
    } else if (achievement.type === 'grant') {
      customFields = `\n    amount: "${achievement.amount || '1,110'}",`;
    }

    return `  {
    id: ${achievement.id},
    slug: "${achievement.slug || 'achievement-slug'}",
    title: "${(achievement.title || 'Achievement Title').replace(/"/g, '\\"')}",
    description: "${(achievement.description || 'PH').replace(/"/g, '\\"')}",
    image: "${achievement.image || 'https://res.cloudinary.com/dll7cjob6/image/upload/v1776029648/1-1_gwjiae.webp'}",
    date: "${achievement.date || 'March 2026'}",
    type: "${achievement.type}",${customFields}
  },`;
  };

  const generateAchievementDetailsCode = () => {
    const galleryItems = achievement.gallery.length > 0
      ? achievement.gallery.map(item => `      '${item.replace(/'/g, "\\'")}'`).join(',\n')
      : `      'https://res.cloudinary.com/dll7cjob6/image/upload/v1776029648/1-1_gwjiae.webp'`;
    const takeouts = achievement.key_takeouts.length > 0
      ? achievement.key_takeouts.map(item => `      '${item.replace(/'/g, "\\'")}'`).join(',\n')
      : `      'Awarded due to competitive global evaluation standards.'`;

    let extraField = '';
    if (achievement.type === 'grant') {
      const awardItems = achievement.awards.length > 0
        ? achievement.awards.map(a => `      {
        team: '${a.team.replace(/'/g, "\\'")}',
        amount: '${a.amount.replace(/'/g, "\\'")}'
      }`).join(',\n')
        : `      {
        team: 'Project Development Team',
        amount: '$1,110'
      }`;
      extraField = `\n    awards: [
${awardItems}
    ],`;
    } else {
      const recs = achievement.recipients.length > 0
        ? achievement.recipients.map(r => `'${r.replace(/'/g, "\\'")}'`).join(', ')
        : `'Registered Member 1', 'Registered Member 2'`;
      extraField = `\n    recipients: [${recs}],`;
    }

    return `  '${achievement.slug || 'achievement-slug'}': {
    title: '${(achievement.title || 'Achievement Title').replace(/'/g, "\\'")}',
    overview:
        \`${(achievement.overview || 'Detailed overview write-up.').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
    date: '${achievement.date || 'March 2026'}',${extraField}
    gallery: [
${galleryItems}
    ],
    key_takeouts: [
${takeouts}
    ]
  },`;
  };

  const generatePublicationCode = () => {
    return `  {
    id: ${publication.id},
    title:
        '${(publication.title || 'Publication Title').replace(/'/g, "\\'")}',
    authors: '${(publication.authors || 'Author 1, Author 2').replace(/'/g, "\\'")}',
    journal: '${(publication.journal || 'Journal / Conference Details').replace(/'/g, "\\'")}',
    date: '${publication.date || 'February 2026'}',
    link: '${publication.link || '#'}',
    type: '${publication.type}',
    doi: '${publication.doi || ''}'
  },`;
  };

  const generateMemberCode = () => {
    return `      {
        name:
            '${(member.name || 'Advisor Professor, Department of Mechanical Engineering').replace(/'/g, "\\'")}',
        designation: '${(member.designation || 'Advisor').replace(/'/g, "\\'")}',
        image:
            '${member.image || 'https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542375/demo.png'}',
        color: '${member.color}',
      },`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Return Navigation button since global header is disabled */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-10">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-tr from-blue-500 to-green-500 p-2.5 rounded-2xl text-white shadow-lg">
            <FileCode className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-xl leading-none bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Utility Workbench
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-medium font-mono">/db-generator</p>
          </div>
        </div>
        <Link
          to="/home"
          className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition bg-white/10 hover:bg-white/20 px-5 h-10 rounded-full border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Title Header */}
      <section className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Database Entry Generator
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Input your details below to generate TypeScript records matching the layout of database files in
          <code className="bg-white/10 px-1.5 py-0.5 rounded text-blue-300 text-sm font-mono ml-1.5">src/db/</code>.
        </p>
      </section>

      {/* Tabs list */}
      <div className="max-w-7xl mx-auto mb-10 flex justify-center">
        <div className="flex flex-wrap gap-2.5 max-w-3xl justify-center">
          {(['projects', 'activities', 'achievements', 'publications', 'members'] as Tab[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-6 text-sm font-semibold rounded-full transition-all duration-300 capitalize ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: FORM BLOCK (6 Cols) */}
          <div className="lg:col-span-6 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 sm:p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <h2 className="font-bold text-xl text-white capitalize">
                  {activeTab} Entry Form
                </h2>
              </div>
              <button
                type="button"
                onClick={() => loadDemo(activeTab)}
                className="flex items-center space-x-1.5 text-xs text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 px-4 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Preset Demo Data</span>
              </button>
            </div>

            {/* --- PROJECTS FORM --- */}
            {activeTab === 'projects' && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">ID (Number)</label>
                    <input
                      type="number"
                      value={project.id}
                      onChange={e => setProject({ ...project, id: parseInt(e.target.value) || 0 })}
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Slug</label>
                      <label className="text-[10px] text-gray-400 flex items-center space-x-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={autoSlug}
                          onChange={e => setAutoSlug(e.target.checked)}
                          className="rounded border-white/20 bg-black/30 text-blue-500 focus:ring-0 cursor-pointer"
                        />
                        <span>Auto-slug</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      disabled={autoSlug}
                      value={project.slug}
                      onChange={e => setProject({ ...project, slug: e.target.value })}
                      placeholder="e.g. cooling-tower-plastic-fill"
                      className={`w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300 ${
                        autoSlug ? 'opacity-60 cursor-not-allowed text-gray-400' : ''
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Title</label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={e => setProject({ ...project, title: e.target.value })}
                    placeholder="e.g. Cross Flow Induced Draft Cooling Tower with Waste Plastic Fill"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Image URL</label>
                  <input
                    type="text"
                    value={project.image}
                    onChange={e => setProject({ ...project, image: e.target.value })}
                    placeholder="e.g. https://res.cloudinary.com/dll7cjob6/image/upload/v1773767501/1_n8xfyr.webp"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300 font-mono text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Short Description</label>
                  <textarea
                    rows={2}
                    value={project.description}
                    onChange={e => setProject({ ...project, description: e.target.value })}
                    placeholder="e.g. An eco-friendly cooling tower innovation repurposing recycled PET bottles and jute fiber as efficient fill materials..."
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Banner Highlight Text</label>
                  <input
                    type="text"
                    value={project.banner}
                    onChange={e => setProject({ ...project, banner: e.target.value })}
                    placeholder="e.g. Awarded ASHRAE Undergraduate Equipment Grant ($1,110)"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Year</label>
                    <input
                      type="number"
                      value={project.year}
                      onChange={e => setProject({ ...project, year: parseInt(e.target.value) || 2026 })}
                      placeholder="e.g. 2024"
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Overview Description</label>
                  <textarea
                    rows={4}
                    value={project.overview}
                    onChange={e => setProject({ ...project, overview: e.target.value })}
                    placeholder="e.g. This project introduces a sustainable alternative to industrial cooling towers by repurposing recycled PET plastic bottles..."
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Team array */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Team Members</label>
                    <button
                      type="button"
                      onClick={() => addArrayItem('projects', 'team')}
                      className="text-xs text-green-400 hover:text-green-300 flex items-center space-x-1 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full transition-colors"
                    >
                      <Plus className="w-3 h-3" /> <span>Add</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    {project.team.map((m, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={m}
                          onChange={e => updateArrayField('projects', 'team', idx, e.target.value)}
                          className="flex-1 bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none"
                          placeholder="e.g. Student Member 1"
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('projects', 'team', idx)}
                          className="p-2 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-full transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Innovations array */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Technical Innovations</label>
                    <button
                      type="button"
                      onClick={() => addArrayItem('projects', 'technicalInnovations')}
                      className="text-xs text-green-400 hover:text-green-300 flex items-center space-x-1 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full transition-colors"
                    >
                      <Plus className="w-3 h-3" /> <span>Add</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    {project.technicalInnovations.map((inn, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={inn}
                          onChange={e => updateArrayField('projects', 'technicalInnovations', idx, e.target.value)}
                          className="flex-1 bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none"
                          placeholder="e.g. Eco-Friendly Fill Material: Replaced industrial-grade plastic..."
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('projects', 'technicalInnovations', idx)}
                          className="p-2 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-full transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery array */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Gallery Image URLs</label>
                    <button
                      type="button"
                      onClick={() => addArrayItem('projects', 'gallery')}
                      className="text-xs text-green-400 hover:text-green-300 flex items-center space-x-1 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full transition-colors"
                    >
                      <Plus className="w-3 h-3" /> <span>Add</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    {project.gallery.map((url, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={url}
                          onChange={e => updateArrayField('projects', 'gallery', idx, e.target.value)}
                          className="flex-1 bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none font-mono text-xs"
                          placeholder="e.g. https://res.cloudinary.com/dll7cjob6/image/upload/v1773767501/1_n8xfyr.webp"
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('projects', 'gallery', idx)}
                          className="p-2 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-full transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* --- ACTIVITIES FORM --- */}
            {activeTab === 'activities' && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">ID (Number)</label>
                    <input
                      type="number"
                      value={activity.id}
                      onChange={e => setActivity({ ...activity, id: parseInt(e.target.value) || 0 })}
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Slug</label>
                      <label className="text-[10px] text-gray-400 flex items-center space-x-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={autoSlug}
                          onChange={e => setAutoSlug(e.target.checked)}
                          className="rounded border-white/20 bg-black/30 text-blue-500 focus:ring-0 cursor-pointer"
                        />
                        <span>Auto-slug</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      disabled={autoSlug}
                      value={activity.slug}
                      onChange={e => setActivity({ ...activity, slug: e.target.value })}
                      placeholder="e.g. industry-tour-elite"
                      className={`w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300 ${
                        autoSlug ? 'opacity-60 cursor-not-allowed text-gray-400' : ''
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Title</label>
                  <input
                    type="text"
                    value={activity.title}
                    onChange={e => setActivity({ ...activity, title: e.target.value })}
                    placeholder="e.g. 2nd Industrial Visit to Elite Hi-Tech Industries Ltd"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Main Image URL</label>
                  <input
                    type="text"
                    value={activity.image}
                    onChange={e => setActivity({ ...activity, image: e.target.value })}
                    placeholder="e.g. https://res.cloudinary.com/dll7cjob6/image/upload/v1773785519/1_oacova.webp"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300 font-mono text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Date</label>
                    <input
                      type="text"
                      value={activity.date}
                      onChange={e => setActivity({ ...activity, date: e.target.value })}
                      placeholder="e.g. January 2026"
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Category</label>
                    <input
                      type="text"
                      value={activity.category}
                      onChange={e => setActivity({ ...activity, category: e.target.value })}
                      placeholder="e.g. Educational"
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Location</label>
                  <input
                    type="text"
                    value={activity.location}
                    onChange={e => setActivity({ ...activity, location: e.target.value })}
                    placeholder="e.g. Elite Hi-Tech Industries Ltd., Cumilla"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Short Description</label>
                  <textarea
                    rows={2}
                    value={activity.description}
                    onChange={e => setActivity({ ...activity, description: e.target.value })}
                    placeholder="e.g. Members of the Student Branch participated in an industrial visit to Elite Hi-Tech Industries Ltd..."
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Detailed Overview</label>
                  <textarea
                    rows={4}
                    value={activity.overview}
                    onChange={e => setActivity({ ...activity, overview: e.target.value })}
                    placeholder="e.g. The visit provided students with valuable firsthand exposure to the real-world manufacturing and processing of AC units..."
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Attendees array */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Attendees / Guests</label>
                    <button
                      type="button"
                      onClick={() => addArrayItem('activities', 'attendees')}
                      className="text-xs text-green-400 hover:text-green-300 flex items-center space-x-1 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full transition-colors"
                    >
                      <Plus className="w-3 h-3" /> <span>Add</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    {activity.attendees.map((att, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={att}
                          onChange={e => updateArrayField('activities', 'attendees', idx, e.target.value)}
                          className="flex-1 bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none"
                          placeholder="e.g. Student Member / Guest"
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('activities', 'attendees', idx)}
                          className="p-2 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-full transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Moments array */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Key Moments</label>
                    <button
                      type="button"
                      onClick={() => addArrayItem('activities', 'key_moments')}
                      className="text-xs text-green-400 hover:text-green-300 flex items-center space-x-1 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full transition-colors"
                    >
                      <Plus className="w-3 h-3" /> <span>Add</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    {activity.key_moments.map((mom, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={mom}
                          onChange={e => updateArrayField('activities', 'key_moments', idx, e.target.value)}
                          className="flex-1 bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none"
                          placeholder="e.g. Q&A session with senior factory engineers."
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('activities', 'key_moments', idx)}
                          className="p-2 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-full transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery array */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Gallery Image URLs</label>
                    <button
                      type="button"
                      onClick={() => addArrayItem('activities', 'gallery')}
                      className="text-xs text-green-400 hover:text-green-300 flex items-center space-x-1 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full transition-colors"
                    >
                      <Plus className="w-3 h-3" /> <span>Add</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    {activity.gallery.map((url, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={url}
                          onChange={e => updateArrayField('activities', 'gallery', idx, e.target.value)}
                          className="flex-1 bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none font-mono text-xs"
                          placeholder="e.g. https://res.cloudinary.com/dll7cjob6/image/upload/v1773785526/1_k2ruu2.webp"
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('activities', 'gallery', idx)}
                          className="p-2 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-full transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* --- ACHIEVEMENTS FORM --- */}
            {activeTab === 'achievements' && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">ID (Number)</label>
                    <input
                      type="number"
                      value={achievement.id}
                      onChange={e => setAchievement({ ...achievement, id: parseInt(e.target.value) || 0 })}
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Slug</label>
                      <label className="text-[10px] text-gray-400 flex items-center space-x-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={autoSlug}
                          onChange={e => setAutoSlug(e.target.checked)}
                          className="rounded border-white/20 bg-black/30 text-blue-500 focus:ring-0 cursor-pointer"
                        />
                        <span>Auto-slug</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      disabled={autoSlug}
                      value={achievement.slug}
                      onChange={e => setAchievement({ ...achievement, slug: e.target.value })}
                      placeholder="e.g. society-scholarship-2026"
                      className={`w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300 ${
                        autoSlug ? 'opacity-60 cursor-not-allowed text-gray-400' : ''
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Type</label>
                    <select
                      value={achievement.type}
                      onChange={e => setAchievement({ ...achievement, type: e.target.value as any })}
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300 [&>option]:bg-slate-900 [&>option]:text-white"
                    >
                      <option value="scholarship">Scholarship</option>
                      <option value="paper">Paper Acceptance</option>
                      <option value="grant">Equipment Grant</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Date</label>
                    <input
                      type="text"
                      value={achievement.date}
                      onChange={e => setAchievement({ ...achievement, date: e.target.value })}
                      placeholder="e.g. March 2026"
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Title</label>
                  <input
                    type="text"
                    value={achievement.title}
                    onChange={e => setAchievement({ ...achievement, title: e.target.value })}
                    placeholder="e.g. Secures Prestigious 2025-2026 Society Scholarships"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Conditional Fields based on Type */}
                {achievement.type === 'paper' && (
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Number of Papers Accepted</label>
                    <input
                      type="number"
                      value={achievement.papers}
                      onChange={e => setAchievement({ ...achievement, papers: parseInt(e.target.value) || 1 })}
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                )}

                {achievement.type === 'grant' && (
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Total Grant Amount</label>
                    <input
                      type="text"
                      value={achievement.amount}
                      onChange={e => setAchievement({ ...achievement, amount: e.target.value })}
                      placeholder="e.g. 1,370"
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Image URL</label>
                  <input
                    type="text"
                    value={achievement.image}
                    onChange={e => setAchievement({ ...achievement, image: e.target.value })}
                    placeholder="e.g. https://res.cloudinary.com/dll7cjob6/image/upload/v1776029648/1-1_gwjiae.webp"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300 font-mono text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Brief Description</label>
                  <input
                    type="text"
                    value={achievement.description}
                    onChange={e => setAchievement({ ...achievement, description: e.target.value })}
                    placeholder="e.g. PH"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Overview Paragraph</label>
                  <textarea
                    rows={4}
                    value={achievement.overview}
                    onChange={e => setAchievement({ ...achievement, overview: e.target.value })}
                    placeholder="e.g. The Student Branch is celebrating a major milestone as members have been named recipients of the ASHRAE Society Scholarship..."
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Conditional arrays: Recipients or Awards */}
                {achievement.type !== 'grant' ? (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Recipients</label>
                      <button
                        type="button"
                        onClick={() => addArrayItem('achievements', 'recipients')}
                        className="text-xs text-green-400 hover:text-green-300 flex items-center space-x-1 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full transition-colors"
                      >
                        <Plus className="w-3 h-3" /> <span>Add</span>
                      </button>
                    </div>
                    <div className="space-y-2">
                      {achievement.recipients.map((rec, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={rec}
                            onChange={e => updateArrayField('achievements', 'recipients', idx, e.target.value)}
                            className="flex-1 bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none"
                            placeholder="e.g. Scholarship Recipient Student 1"
                          />
                          <button
                            type="button"
                            onClick={() => removeArrayItem('achievements', 'recipients', idx)}
                            className="p-2 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-full transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Awards Breakdowns</label>
                      <button
                        type="button"
                        onClick={addAwardItem}
                        className="text-xs text-green-400 hover:text-green-300 flex items-center space-x-1 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" /> <span>Add Award</span>
                      </button>
                    </div>
                    <div className="space-y-3">
                      {achievement.awards.map((a, idx) => (
                        <div key={idx} className="bg-black/45 p-4 rounded-2xl border border-white/10 space-y-3 relative">
                          <button
                            type="button"
                            onClick={() => removeAwardItem(idx)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-rose-400 p-1 rounded-full hover:bg-rose-500/10 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <div>
                            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Team Group Details</label>
                            <input
                              type="text"
                              value={a.team}
                              onChange={e => updateAwardField(idx, 'team', e.target.value)}
                              className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2 text-xs text-white focus:outline-none"
                              placeholder="e.g. Cooling Tower Research Group"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Award Amount</label>
                            <input
                              type="text"
                              value={a.amount}
                              onChange={e => updateAwardField(idx, 'amount', e.target.value)}
                              className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2 text-xs text-white focus:outline-none"
                              placeholder="e.g. $1,110"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Takeouts array */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Key Takeouts</label>
                    <button
                      type="button"
                      onClick={() => addArrayItem('achievements', 'key_takeouts')}
                      className="text-xs text-green-400 hover:text-green-300 flex items-center space-x-1 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full transition-colors"
                    >
                      <Plus className="w-3 h-3" /> <span>Add</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    {achievement.key_takeouts.map((tk, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={tk}
                          onChange={e => updateArrayField('achievements', 'key_takeouts', idx, e.target.value)}
                          className="flex-1 bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none"
                          placeholder="e.g. The scholarship fully funds tuition, thesis research, and living expenses..."
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('achievements', 'key_takeouts', idx)}
                          className="p-2 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-full transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery array */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Gallery Image URLs</label>
                    <button
                      type="button"
                      onClick={() => addArrayItem('achievements', 'gallery')}
                      className="text-xs text-green-400 hover:text-green-300 flex items-center space-x-1 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full transition-colors"
                    >
                      <Plus className="w-3 h-3" /> <span>Add</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    {achievement.gallery.map((url, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={url}
                          onChange={e => updateArrayField('achievements', 'gallery', idx, e.target.value)}
                          className="flex-1 bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none font-mono text-xs"
                          placeholder="e.g. https://res.cloudinary.com/dll7cjob6/image/upload/v1774292872/1_hoz5im.webp"
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('achievements', 'gallery', idx)}
                          className="p-2 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-full transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* --- PUBLICATIONS FORM --- */}
            {activeTab === 'publications' && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">ID (Number)</label>
                    <input
                      type="number"
                      value={publication.id}
                      onChange={e => setPublication({ ...publication, id: parseInt(e.target.value) || 0 })}
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Publication Type</label>
                    <input
                      type="text"
                      value={publication.type}
                      onChange={e => setPublication({ ...publication, type: e.target.value })}
                      placeholder="e.g. Conference Paper, Journal"
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Title</label>
                  <textarea
                    rows={2}
                    value={publication.title}
                    onChange={e => setPublication({ ...publication, title: e.target.value })}
                    placeholder="e.g. Design and Optimization of Triangular Shell and Multi-Tube PCM Thermal Storage System..."
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Authors (Comma-separated)</label>
                  <input
                    type="text"
                    value={publication.authors}
                    onChange={e => setPublication({ ...publication, authors: e.target.value })}
                    placeholder="e.g. Student Author 1, Student Author 2, Advisor Professor"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Journal / Conference Name</label>
                  <input
                    type="text"
                    value={publication.journal}
                    onChange={e => setPublication({ ...publication, journal: e.target.value })}
                    placeholder="e.g. 2026 ASHRAE Winter Conference, Las Vegas, NV"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Date</label>
                    <input
                      type="text"
                      value={publication.date}
                      onChange={e => setPublication({ ...publication, date: e.target.value })}
                      placeholder="e.g. February 2026"
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Link</label>
                    <input
                      type="text"
                      value={publication.link}
                      onChange={e => setPublication({ ...publication, link: e.target.value })}
                      placeholder="e.g. https://ashraem.confex.com/ashraem/w26/meetingapp.cgi/Paper/40188"
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300 font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">DOI Link</label>
                    <input
                      type="text"
                      value={publication.doi}
                      onChange={e => setPublication({ ...publication, doi: e.target.value })}
                      placeholder="e.g. https://doi.org/10.63044/w26hri03"
                      className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300 font-mono text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* --- MEMBERS FORM --- */}
            {activeTab === 'members' && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Institution & Department Position (No Name)</label>
                  <input
                    type="text"
                    value={member.name}
                    onChange={e => setMember({ ...member, name: e.target.value })}
                    placeholder="e.g. Professor, Department of Mechanical Engineering"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Designation</label>
                  <input
                    type="text"
                    value={member.designation}
                    onChange={e => setMember({ ...member, designation: e.target.value })}
                    placeholder="e.g. Advisor / President / Co-chair"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Profile Image URL</label>
                  <input
                    type="text"
                    value={member.image}
                    onChange={e => setMember({ ...member, image: e.target.value })}
                    placeholder="e.g. https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542375/Advisor.png"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none transition-colors duration-300 font-mono text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Card Gradient Theme (Tailwind CSS)</label>
                  <input
                    type="text"
                    value={member.color}
                    onChange={e => setMember({ ...member, color: e.target.value })}
                    placeholder="e.g. from-green-500 to-emerald-500"
                    className="w-full bg-black/30 border border-white/15 focus:border-blue-400 rounded-2xl px-4 py-2.5 text-sm text-white focus:ring-0 focus:outline-none font-mono text-xs text-blue-400"
                  />
                  <span className="text-[10px] text-gray-400 mt-1 block">Recommended: `from-green-500 to-emerald-500`</span>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: CODE PREVIEWS (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            {activeTab === 'projects' && (
              <>
                {/* Code Block 1: projects.ts */}
                <div className="bg-black/45 border border-white/15 rounded-3xl overflow-hidden shadow-xl flex flex-col max-h-[380px]">
                  <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className="text-xs font-mono font-semibold text-slate-300">src/db/projects.ts</span>
                    </div>
                    <button
                      onClick={() => handleCopy('projBrief', generateProjectBriefCode())}
                      className="text-xs text-white flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 border border-white/10 transition px-3.5 py-1.5 rounded-full font-semibold"
                    >
                      {copiedStates['projBrief'] ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Entry</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono overflow-auto flex-1 text-blue-300 bg-transparent selection:bg-white/10">
                    {generateProjectBriefCode()}
                  </pre>
                </div>

                {/* Code Block 2: projectDetails.ts */}
                <div className="bg-black/45 border border-white/15 rounded-3xl overflow-hidden shadow-xl flex flex-col max-h-[500px]">
                  <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                      <span className="text-xs font-mono font-semibold text-slate-300">src/db/projectDetails.ts</span>
                    </div>
                    <button
                      onClick={() => handleCopy('projDetail', generateProjectDetailsCode())}
                      className="text-xs text-white flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 border border-white/10 transition px-3.5 py-1.5 rounded-full font-semibold"
                    >
                      {copiedStates['projDetail'] ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Details</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono overflow-auto flex-1 text-indigo-300 bg-transparent selection:bg-white/10">
                    {generateProjectDetailsCode()}
                  </pre>
                </div>
              </>
            )}

            {activeTab === 'activities' && (
              <>
                {/* Code Block 1: activities.tsx */}
                <div className="bg-black/45 border border-white/15 rounded-3xl overflow-hidden shadow-xl flex flex-col max-h-[380px]">
                  <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className="text-xs font-mono font-semibold text-slate-300">src/db/activities.tsx</span>
                    </div>
                    <button
                      onClick={() => handleCopy('actBrief', generateActivityBriefCode())}
                      className="text-xs text-white flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 border border-white/10 transition px-3.5 py-1.5 rounded-full font-semibold"
                    >
                      {copiedStates['actBrief'] ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Entry</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono overflow-auto flex-1 text-blue-300 bg-transparent selection:bg-white/10">
                    {generateActivityBriefCode()}
                  </pre>
                </div>

                {/* Code Block 2: activityDetails.ts */}
                <div className="bg-black/45 border border-white/15 rounded-3xl overflow-hidden shadow-xl flex flex-col max-h-[500px]">
                  <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                      <span className="text-xs font-mono font-semibold text-slate-300">src/db/activityDetails.ts</span>
                    </div>
                    <button
                      onClick={() => handleCopy('actDetail', generateActivityDetailsCode())}
                      className="text-xs text-white flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 border border-white/10 transition px-3.5 py-1.5 rounded-full font-semibold"
                    >
                      {copiedStates['actDetail'] ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Details</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono overflow-auto flex-1 text-indigo-300 bg-transparent selection:bg-white/10">
                    {generateActivityDetailsCode()}
                  </pre>
                </div>
              </>
            )}

            {activeTab === 'achievements' && (
              <>
                {/* Code Block 1: achievements.tsx */}
                <div className="bg-black/45 border border-white/15 rounded-3xl overflow-hidden shadow-xl flex flex-col max-h-[380px]">
                  <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className="text-xs font-mono font-semibold text-slate-300">src/db/achievements.tsx</span>
                    </div>
                    <button
                      onClick={() => handleCopy('achBrief', generateAchievementBriefCode())}
                      className="text-xs text-white flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 border border-white/10 transition px-3.5 py-1.5 rounded-full font-semibold"
                    >
                      {copiedStates['achBrief'] ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Entry</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono overflow-auto flex-1 text-blue-300 bg-transparent selection:bg-white/10">
                    {generateAchievementBriefCode()}
                  </pre>
                </div>

                {/* Code Block 2: achievementDetails.ts */}
                <div className="bg-black/45 border border-white/15 rounded-3xl overflow-hidden shadow-xl flex flex-col max-h-[500px]">
                  <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                      <span className="text-xs font-mono font-semibold text-slate-300">src/db/achievementDetails.ts</span>
                    </div>
                    <button
                      onClick={() => handleCopy('achDetail', generateAchievementDetailsCode())}
                      className="text-xs text-white flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 border border-white/10 transition px-3.5 py-1.5 rounded-full font-semibold"
                    >
                      {copiedStates['achDetail'] ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Details</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono overflow-auto flex-1 text-indigo-300 bg-transparent selection:bg-white/10">
                    {generateAchievementDetailsCode()}
                  </pre>
                </div>
              </>
            )}

            {activeTab === 'publications' && (
              <div className="bg-black/45 border border-white/15 rounded-3xl overflow-hidden shadow-xl flex flex-col max-h-[500px]">
                <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="text-xs font-mono font-semibold text-slate-300">src/db/publications.ts</span>
                  </div>
                  <button
                    onClick={() => handleCopy('pub', generatePublicationCode())}
                    className="text-xs text-white flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 border border-white/10 transition px-3.5 py-1.5 rounded-full font-semibold"
                  >
                    {copiedStates['pub'] ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Entry</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 text-xs font-mono overflow-auto flex-1 text-blue-300 bg-transparent selection:bg-white/10">
                  {generatePublicationCode()}
                </pre>
              </div>
            )}

            {activeTab === 'members' && (
              <div className="bg-black/45 border border-white/15 rounded-3xl overflow-hidden shadow-xl flex flex-col max-h-[500px]">
                <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="text-xs font-mono font-semibold text-slate-300">src/db/db.ts</span>
                  </div>
                  <button
                    onClick={() => handleCopy('member', generateMemberCode())}
                    className="text-xs text-white flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 border border-white/10 transition px-3.5 py-1.5 rounded-full font-semibold"
                  >
                    {copiedStates['member'] ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Entry</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 text-xs font-mono overflow-auto flex-1 text-blue-300 bg-transparent selection:bg-white/10">
                  {generateMemberCode()}
                </pre>
              </div>
            )}

            {/* Quick How-To Instructions */}
            <div className="bg-white/10 border border-white/20 p-6 rounded-3xl space-y-4 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-lg text-white">Quick Guide</h3>
              <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-2.5">
                <li>Select a tab at the top matching the section you want to expand.</li>
                <li>Fill in the fields on the left. Press <strong className="text-green-400">Preset Demo Data</strong> to check fields quickly.</li>
                <li>Click the copy button on the generated preview.</li>
                <li>Open the indicated code file and insert the generated chunk inside its database list.</li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
