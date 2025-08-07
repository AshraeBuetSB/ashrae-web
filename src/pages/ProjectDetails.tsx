import { useParams } from 'react-router-dom';
import projectDetails from '../db/projectDetails';


export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectDetails[slug as keyof typeof projectDetails];

  if (!project) {
    return <div className="text-white p-8">Project not found.</div>;
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 p-10">{project.title}</h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg">{project.overview}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Objectives</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.objectives.map((objective, idx) => (
              <li key={idx}>{objective}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Team</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.team.map((member, idx) => (
              <li key={idx}>{member}</li>
            ))}
          </ul>
        </div>

        {project.awards && project.awards !== "None" && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Awards</h2>
            <p className="text-gray-300">{project.awards}</p>
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Year</h2>
          <p className="text-gray-300 leading-relaxed text-lg">{project.year}</p>
        </div>

      </div>
    </div>
  );
}

