import React, { useContext } from 'react';
import { AgentPerformanceProvider, AgentPerformanceContext } from '../context/AgentPerformanceContext.jsx';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function AgentPerformanceContent() {
  const {
    leaderboard,
    responseSpeed,
    avgResponseTime,
    abandonedLeads,
    workload,
  } = useContext(AgentPerformanceContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Agent Leaderboard */}
      <div className="bg-white rounded-xl shadow-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
        <h2 className="font-bold text-xl mb-4">Agent Leaderboard</h2>
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-1">Agent</th>
              <th className="px-2 py-1">Leads Handled</th>
              <th className="px-2 py-1">Deals Closed</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((row, idx) => (
              <tr key={idx} className="border-b">
                <td className="px-2 py-1 font-medium">{row.agent}</td>
                <td className="px-2 py-1">{row.leadsHandled}</td>
                <td className="px-2 py-1">{row.dealsClosed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Response Speed Bar Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Response Speed (minutes)</h2>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={responseSpeed} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="agent" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Bar dataKey="speed" fill="#2563eb" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Average Response Time Bar Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Average Response Time (hours)</h2>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={avgResponseTime} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="agent" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Bar dataKey="time" fill="#10b981" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Abandoned/Dormant Leads per Agent */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Abandoned/Dormant Leads</h2>
        <ul className="divide-y divide-gray-200">
          {abandonedLeads.map((item, idx) => (
            <li key={idx} className="py-2 flex justify-between items-center">
              <span className="font-medium">{item.agent}</span>
              <span className="text-red-500">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Daily/Weekly Workload */}
      <div className="bg-white rounded-xl shadow-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
        <h2 className="font-bold text-xl mb-4">Daily/Weekly Workload</h2>
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-1">Agent</th>
              <th className="px-2 py-1">Daily</th>
              <th className="px-2 py-1">Weekly</th>
            </tr>
          </thead>
          <tbody>
            {workload.map((row, idx) => (
              <tr key={idx} className="border-b">
                <td className="px-2 py-1 font-medium">{row.agent}</td>
                <td className="px-2 py-1">{row.daily}</td>
                <td className="px-2 py-1">{row.weekly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AgentPerformance() {
  return (
    <AgentPerformanceProvider>
      <AgentPerformanceContent />
    </AgentPerformanceProvider>
  );
}
