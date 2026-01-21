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

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">{project.title}</h1>

        {project.awards && project.awards !== "None" && (
          <div className="mt-10 mb-6 bg-blue-800 text-white px-4 py-2 rounded-lg block mx-auto w-fit">
            <h2 className="text-lg font-semibold text-center mb-2">🏆 Award</h2>
            <p className="text-md text-center">{project.awards}</p>
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg text-justify">{project.overview}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Technical Innovations</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-justify">
            {project.technicalInnovations.map((innovation, idx) => {
              const [heading, ...rest] = innovation.split(':');
              return (
                <li key={idx}>
                  <strong>{heading}:</strong>{rest.join(':')}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Project Team</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.team.map((member, idx) => (
              <li key={idx}>{member}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Year</h2>
          <p className="text-gray-300 leading-relaxed text-lg">{project.year}</p>
        </div>

      </div>
    </div>
  );
}

