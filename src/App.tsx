import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Activities = lazy(() => import('./pages/Activities'));
const Members = lazy(() => import('./pages/Members'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetails'));
const ActivityDetail = lazy(() => import('./pages/ActivityDetails'));
const Publications = lazy(() => import('./pages/Publications'));
const Achievements = lazy(() => import('./pages/Achievements'));
const AchievementDetail = lazy(() => import('./pages/AchievementDetails'));
const DbGenerator = lazy(() => import('./pages/DbGenerator'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-white">Loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="activities" element={<Activities />} />
          <Route path="activities/:slug" element={<ActivityDetail />} />
          <Route path="members" element={<Members />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="publications" element={<Publications />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="achievements/:slug" element={<AchievementDetail />} />
        </Route>
        <Route path="tools/db-generator" element={<DbGenerator />} />
      </Routes>
    </Suspense>
  );
}

export default App;