import { useParams } from 'react-router-dom';
import achievementDetails from '../db/achievementDetails';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function AchievementDetail() {
  const { slug } = useParams();
  const achievement = achievementDetails[slug as keyof typeof achievementDetails];

  if (!achievement) {
    return <div className="text-white p-8">Achievement not found.</div>;
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 p-10">{achievement.title}</h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg">{achievement.overview}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                <span>{achievement.date}</span>
            </div>
            <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-green-400" />
                <span>{achievement.location}</span>
            </div>
            <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2 text-purple-400" />
                <span>{achievement.category}</span>
            </div>
        </div>

        {achievement.attendees && (
            <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Attendees</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                {achievement.attendees.map((attendee, idx) => (
                <li key={idx}>{attendee}</li>
                ))}
            </ul>
            </div>
        )}

        {achievement.key_moments && (
            <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Key Moments</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                {achievement.key_moments.map((moment, idx) => (
                <li key={idx}>{moment}</li>
                ))}
</ul>
            </div>
        )}
    

        {achievement.gallery && (
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {achievement.gallery && achievement.gallery.map((image, idx) => (
                        <img key={idx} src={image} alt={`${achievement.title} gallery image ${idx + 1}`} className="rounded-lg" />
                    ))}
                </div>
            </div>
        )}

      </div>
    </div>
  );
}
