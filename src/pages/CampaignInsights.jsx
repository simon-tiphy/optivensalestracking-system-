import React, { useContext } from 'react';
import { CampaignInsightsProvider, CampaignInsightsContext } from '../context/CampaignInsightsContext.jsx';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#2563eb', '#10b981', '#f59e42', '#ef4444', '#6366f1'];

function CampaignInsightsContent() {
  const {
    costPerLead,
    campaignPerformance,
    audienceProfile,
    topContent,
    lowContent,
    viralityIndex,
  } = useContext(CampaignInsightsContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Cost per Lead by Campaign (Bar Chart) */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Cost per Lead by Campaign</h2>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={costPerLead} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="campaign" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Bar dataKey="cost" fill="#2563eb" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Campaign Performance Table */}
      <div className="bg-white rounded-xl shadow-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
        <h2 className="font-bold text-xl mb-4">Campaign Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-1">Name</th>
                <th className="px-2 py-1">Impressions</th>
                <th className="px-2 py-1">Clicks</th>
                <th className="px-2 py-1">CTR</th>
                <th className="px-2 py-1">Cost/Lead</th>
                <th className="px-2 py-1">ROI</th>
              </tr>
            </thead>
            <tbody>
              {campaignPerformance.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-2 py-1 font-medium">{row.name}</td>
                  <td className="px-2 py-1">{row.impressions.toLocaleString()}</td>
                  <td className="px-2 py-1">{row.clicks}</td>
                  <td className="px-2 py-1">{row.ctr}%</td>
                  <td className="px-2 py-1">${row.costPerLead}</td>
                  <td className="px-2 py-1">{row.roi}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Audience Profile Breakdown */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Audience Profile: Age</h2>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={audienceProfile.age} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Bar dataKey="value" fill="#10b981" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Audience Profile: Gender</h2>
        <ResponsiveContainer width="100%" height={120}>
          <PieChart>
            <Pie data={audienceProfile.gender} dataKey="value" nameKey="gender" cx="50%" cy="50%" outerRadius={50} label>
              {audienceProfile.gender.map((entry, idx) => (
                <Cell key={`cell-gender-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Audience Profile: Location</h2>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={audienceProfile.location} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="location" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Bar dataKey="value" fill="#f59e42" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Audience Profile: Device</h2>
        <ResponsiveContainer width="100%" height={120}>
          <PieChart>
            <Pie data={audienceProfile.device} dataKey="value" nameKey="device" cx="50%" cy="50%" outerRadius={50} label>
              {audienceProfile.device.map((entry, idx) => (
                <Cell key={`cell-device-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Top Performing Content Feed */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Top Performing Content</h2>
        <ul className="divide-y divide-gray-200">
          {topContent.map((item, idx) => (
            <li key={idx} className="py-2 flex justify-between items-center">
              <span className="font-medium">{item.title}</span>
              <span className="text-green-600">{item.views} views</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Low Performing Content Warning */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Low Performing Content</h2>
        <ul className="divide-y divide-gray-200">
          {lowContent.map((item, idx) => (
            <li key={idx} className="py-2 flex justify-between items-center">
              <span className="font-medium">{item.title}</span>
              <span className="text-red-600">{item.views} views</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Virality Index Tracker (Bar Chart) */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">Virality Index Tracker</h2>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={viralityIndex} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="campaign" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Bar dataKey="score" fill="#6366f1" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function CampaignInsights() {
  return (
    <CampaignInsightsProvider>
      <CampaignInsightsContent />
    </CampaignInsightsProvider>
  );
}
