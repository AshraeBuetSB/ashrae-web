import { useParams } from 'react-router-dom';
import achievementDetails from '../db/achievementDetails';
import { Calendar } from 'lucide-react';

interface Achievement {
  title: string;
  overview: string;
  date: string;
  recipients?: string[];
  awards?: { team: string; amount: string }[];
  gallery?: string[];
  key_takeouts?: string[];
}

export default function AchievementDetail() {
  const { slug } = useParams();
  const achievement = achievementDetails[slug as keyof typeof achievementDetails] as Achievement;

  if (!achievement) {
    return <div className="text-white p-8">Achievement not found.</div>;
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 p-10 text-center">{achievement.title}</h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg text-justify">{achievement.overview}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                <span>{achievement.date}</span>
            </div>
        </div>

        {achievement.recipients && (
            <div className="mb-6">
            {/* <h2 className="text-2xl font-semibold mb-2">Recipients</h2> */}
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                {achievement.recipients.map((recipients, idx) => (
                <li key={idx}>{recipients}</li>
                ))}
            </ul>
            </div>
        )}

        {achievement.awards && (
            <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Awards</h2>
            <div className="space-y-4">
                {achievement.awards.map((award, idx) => (
                <div key={idx} className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-4 rounded-lg border border-blue-500/30">
                    <p className="text-gray-300 mb-2">{award.team}</p>
                    {award.amount && (
                        <p className="text-green-400 font-bold text-xl">{award.amount}</p>
                    )}
                </div>
                ))}
            </div>
            </div>
        )}

        {achievement.key_takeouts && (
            <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Key Takeouts</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                {achievement.key_takeouts.map((moment, idx) => (
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
