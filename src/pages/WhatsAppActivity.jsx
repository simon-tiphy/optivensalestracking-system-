import React, { useContext } from 'react';
import { WhatsAppActivityProvider, WhatsAppActivityContext } from '../context/WhatsAppActivityContext.jsx';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function WhatsAppActivityContent() {
  const {
    responseTime,
    followUpActivity,
    autoManual,
    conversations,
    aiReplies,
    leadLogs,
  } = useContext(WhatsAppActivityContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* WhatsApp Response Time Gauge */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-start">
        <h2 className="font-bold text-xl mb-2">WhatsApp Response Time</h2>
        <div className="text-2xl font-bold text-blue-600">{responseTime} min</div>
      </div>

      {/* Follow-Up Activity Graph */}
      <div className="bg-white rounded-xl shadow-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
        <h2 className="font-bold text-xl mb-4">Follow-Up Activity</h2>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={followUpActivity} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Bar dataKey="auto" fill="#2563eb" radius={[8, 8, 0, 0]} />
            <Bar dataKey="manual" fill="#10b981" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Auto-followups vs Manual */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-start">
        <h2 className="font-bold text-xl mb-2">Auto vs Manual Follow-ups</h2>
        <div className="text-lg">Auto: <span className="font-bold text-blue-600">{autoManual.auto}</span></div>
        <div className="text-lg">Manual: <span className="font-bold text-green-600">{autoManual.manual}</span></div>
      </div>

      {/* Conversations Open vs Closed */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-start">
        <h2 className="font-bold text-xl mb-2">Conversations</h2>
        <div className="text-lg">Open: <span className="font-bold text-yellow-600">{conversations.open}</span></div>
        <div className="text-lg">Closed: <span className="font-bold text-gray-600">{conversations.closed}</span></div>
      </div>

      {/* AI-Generated Replies (Review Section) */}
      <div className="bg-white rounded-xl shadow-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
        <h2 className="font-bold text-xl mb-4">AI-Generated Replies</h2>
        <ul className="divide-y divide-gray-200">
          {aiReplies.map((item, idx) => (
            <li key={idx} className="py-2 flex justify-between items-center">
              <span className="font-medium">{item.reply}</span>
              <span className="text-gray-500">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Lead Response Logs (Expandable Cards) */}
      <div className="bg-white rounded-xl shadow-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
        <h2 className="font-bold text-xl mb-4">Lead Response Logs</h2>
        <ul className="divide-y divide-gray-200">
          {leadLogs.map((item, idx) => (
            <li key={idx} className="py-2 flex flex-col md:flex-row md:justify-between md:items-center">
              <span className="font-medium">{item.lead}</span>
              <span className="text-gray-500">{item.status} - {item.details}</span>
              <span className="text-gray-400">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function WhatsAppActivity() {
  return (
    <WhatsAppActivityProvider>
      <WhatsAppActivityContent />
    </WhatsAppActivityProvider>
  );
}
