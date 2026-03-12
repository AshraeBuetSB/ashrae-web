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

        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center mt-10">{project.title}</h1>

        {project.banner && project.banner !== "None" && (
          <div className="mt-10 mb-6 flex justify-center">
            <div className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-full shadow-2xl">
              <span className="absolute inset-0 rounded-full opacity-30 bg-gradient-to-r blur-lg"></span>
              <span className="relative flex items-center space-x-3 text-center whitespace-normal">
                <span className="font-semibold text-lg">{project.banner}</span>
              </span>
            </div>
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

        {project.gallery && (
            <div className="mb-6">
                {/* <h2 className="text-2xl font-semibold mb-2">Gallery</h2> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery && project.gallery.map((image, idx) => (
                        <img key={idx} src={image} alt={`${project.title} gallery image ${idx + 1}`} className="rounded-lg" />
                    ))}
                </div>
            </div>
        )}

      </div>
    </div>
  );
}

