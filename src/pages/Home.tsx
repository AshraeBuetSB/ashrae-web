import ParticleBackground from '../components/ParticleBackground';
import HeroSection from '../components/HeroSection';
import AdvisorQuote  from '../components/AdvisorQuote';
import MissionAndValues from '../components/MissionAndValues';
import StudentActivities from '../components/StudentActivities';
import PanelMembers from '../components/PanelMembers';
import ChapterInfo from '../components/ChapterInfo';
import Stats from '../components/Stats';
import CTA from '../components/CTA';

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <HeroSection />
      <AdvisorQuote />
      <MissionAndValues />
      <StudentActivities />
      <PanelMembers />
      <ChapterInfo />
      <Stats />
      <CTA />
    </div>
  );
}

export default App;