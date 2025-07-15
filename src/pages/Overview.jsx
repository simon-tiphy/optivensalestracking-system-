
import React, { useContext } from 'react';
import { OverviewProvider, OverviewContext } from '../context/OverviewContext.jsx';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend,
} from 'recharts';

function OverviewContent() {
  const {
    revenue,
    leadsCaptured,
    hotLeads,
    conversionRate,
    avgTimeToClose,
    campaignROI,
    pendingFollowUps,
  } = useContext(OverviewContext);

  // Prepare data for charts
  const weeklyTrendData = leadsCaptured.weeklyTrend.map((val, idx) => ({
    day: `Day ${idx + 1}`,
    leads: val,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Revenue Card */}
      <div
        className="rounded-xl shadow-lg p-6 flex flex-col justify-center items-start bg-green-600 text-white"
      >
        <h2 className="font-bold text-xl mb-2">Total Revenue</h2>
        <div className="text-lg">Today: <span className="font-bold">${revenue.today.toLocaleString()}</span></div>
        <div className="text-lg">Week: <span className="font-bold">${revenue.week.toLocaleString()}</span></div>
        <div className="text-lg">Month: <span className="font-bold">${revenue.month.toLocaleString()}</span></div>
      </div>

      {/* Leads Captured Card with Chart */}
      <div className="rounded-xl shadow-lg p-6" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
        <h2 className="font-bold text-xl mb-4">Leads Captured</h2>
        <div className="mb-2">Today: <span className="font-bold">{leadsCaptured.today}</span></div>
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={weeklyTrendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Line type="monotone" dataKey="leads" stroke="var(--color-accent)" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Hot Leads Engaged */}
      <div className="rounded-xl shadow-lg p-6 flex flex-col justify-center items-start" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
        <h2 className="font-bold text-xl mb-2">Hot Leads Engaged</h2>
        <div className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>{hotLeads}</div>
      </div>

      {/* Conversion Rate */}
      <div className="rounded-xl shadow-lg p-6 flex flex-col justify-center items-start" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
        <h2 className="font-bold text-xl mb-2">Conversion Rate</h2>
        <div className="text-2xl font-bold" style={{ color: 'var(--color-secondary)' }}>{conversionRate}%</div>
      </div>

      {/* Average Time to Close */}
      <div className="rounded-xl shadow-lg p-6 flex flex-col justify-center items-start" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
        <h2 className="font-bold text-xl mb-2">Average Time to Close</h2>
        <div className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>{avgTimeToClose} days</div>
      </div>

      {/* Campaign ROI Heatmap (Bar Chart) */}
      <div className="rounded-xl shadow-lg p-6" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
        <h2 className="font-bold text-xl mb-4">Campaign ROI</h2>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={campaignROI} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="campaign" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Legend />
            <Bar dataKey="roi" fill="var(--color-secondary)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pending Follow-ups */}
      <div className="rounded-xl shadow-lg p-6 col-span-1 md:col-span-2 lg:col-span-3" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
        <h2 className="font-bold text-xl mb-4">Pending Follow-ups</h2>
        <ul className="divide-y" style={{ borderColor: 'var(--color-accent)' }}>
          {pendingFollowUps.map((item, idx) => (
            <li key={idx} className="py-2 flex justify-between items-center">
              <span className="font-medium">{item.lead}</span>
              <span style={{ color: 'var(--color-secondary)' }}>Due: {item.due}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Overview() {
  return (
    <OverviewProvider>
      <OverviewContent />
    </OverviewProvider>
  );
}
