import React, { useContext } from 'react';
import { SocialMediaSummaryProvider, SocialMediaSummaryContext } from '../context/SocialMediaSummaryContext.jsx';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function SocialMediaSummaryContent() {
  const {
    postingActivity,
    engagement,
    listeningOutput,
    topOrganicPosts,
    contentRecommendations,
  } = useContext(SocialMediaSummaryContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Posting Activity (Bar Chart) */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Posting Activity</h2>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={postingActivity} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Bar dataKey="posts" fill="#2563eb" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Engagement Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Engagement</h2>
        <ul className="divide-y divide-gray-200">
          {engagement.map((item, idx) => (
            <li key={idx} className="py-2 flex justify-between items-center">
              <span className="font-medium">{item.type}</span>
              <span className="text-blue-600">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Listening Agent Output */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Listening Agent Output</h2>
        <ul className="divide-y divide-gray-200">
          {listeningOutput.map((item, idx) => (
            <li key={idx} className="py-2 flex justify-between items-center">
              <span className="font-medium">{item.source}</span>
              <span className="text-green-600">{item.leads} leads</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Performing Organic Posts */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Top Performing Organic Posts</h2>
        <ul className="divide-y divide-gray-200">
          {topOrganicPosts.map((item, idx) => (
            <li key={idx} className="py-2 flex flex-col md:flex-row md:justify-between md:items-center">
              <span className="font-medium">{item.title}</span>
              <span className="text-blue-600">Likes: {item.likes}</span>
              <span className="text-green-600">Comments: {item.comments}</span>
              <span className="text-yellow-600">Saves: {item.saves}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Recommendations from Relevance AI */}
      <div className="bg-white rounded-xl shadow-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
        <h2 className="font-bold text-xl mb-4">Content Recommendations</h2>
        <ul className="divide-y divide-gray-200">
          {contentRecommendations.map((item, idx) => (
            <li key={idx} className="py-2">
              <span className="font-medium">{item.recommendation}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SocialMediaSummary() {
  return (
    <SocialMediaSummaryProvider>
      <SocialMediaSummaryContent />
    </SocialMediaSummaryProvider>
  );
}
