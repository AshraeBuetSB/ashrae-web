// App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Members from './pages/Members';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetails';
import ActivityDetail from './pages/ActivityDetails';
import Publications from './pages/Publications';
import Achievements from './pages/Achievements';
import AchievementDetail from './pages/AchievementDetails';


function App() {
  return (
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
        <Route path="achievements" element={<Achievements />}/>
        <Route path="achievements/:slug" element={<AchievementDetail/>}/>

      </Route>
    </Routes>
  );
}

export default App;