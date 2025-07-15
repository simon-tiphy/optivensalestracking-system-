import React, { useContext } from 'react';
import { RecommendationsProvider, RecommendationsContext } from '../context/RecommendationsContext.jsx';

function RecommendationsContent() {
  const { recommendations } = useContext(RecommendationsContext);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="font-bold text-2xl mb-6 text-blue-700">Weekly Insights & Suggestions</h2>
      <ul className="divide-y divide-gray-200">
        {recommendations.length === 0 ? (
          <li className="py-4 text-gray-500">No recommendations available.</li>
        ) : (
          recommendations.map((item, idx) => (
            <li key={idx} className="py-4">
              <span className="font-medium text-lg">{item}</span>
            </li>
          ))
        )}
      </ul>
      <div className="mt-8 flex justify-end">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">Download PDF</button>
      </div>
    </div>
  );
}

export default function Recommendations() {
  return (
    <RecommendationsProvider>
      <RecommendationsContent />
    </RecommendationsProvider>
  );
}
