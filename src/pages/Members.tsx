import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import MemberCard from '../components/MemberCard';

function Members() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      <ParticleBackground />
      {/* Add your Members section content here */}
      <MemberCard />
      {/* ...more content... */}
    </div>
  );
}

export default Members;