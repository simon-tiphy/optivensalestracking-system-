import React, { useContext } from 'react';
import { LeadsConversionsProvider, LeadsConversionsContext } from '../context/LeadsConversionsContext.jsx';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, LineChart, Line } from 'recharts';

const COLORS = ['#2563eb', '#10b981', '#f59e42', '#ef4444', '#6366f1'];

function LeadsConversionsContent() {
  const {
    leadSources,
    funnelProgression,
    timeToConversion,
    dropOffTriggers,
    leadsByRegion,
  } = useContext(LeadsConversionsContext);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Lead Source Pie Chart */}
      <div className="rounded-xl shadow-lg p-6" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
        <h2 className="font-bold text-xl mb-4">Lead Source</h2>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie data={leadSources} dataKey="value" nameKey="source" cx="50%" cy="50%" outerRadius={60} label>
              {leadSources.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={`var(--color-accent)`} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <ul className="mt-4">
          {leadSources.map((src, idx) => (
            <li key={src.source} className="flex justify-between">
              <span className="font-medium">{src.source}</span>
              <span>{src.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Lead Funnel Progression Bar Chart */}
      <div className="rounded-xl shadow-lg p-6" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
        <h2 className="font-bold text-xl mb-4">Lead Funnel Progression</h2>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={funnelProgression} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stage" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Bar dataKey="value" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Time-to-Conversion Line Chart */}
      <div className="rounded-xl shadow-lg p-6" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
        <h2 className="font-bold text-xl mb-4">Time to Conversion (days)</h2>
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={timeToConversion} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="var(--color-secondary)" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Drop-off Triggers */}
      <div className="rounded-xl shadow-lg p-6 col-span-1 md:col-span-2 lg:col-span-3" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
        <h2 className="font-bold text-xl mb-4">Drop-off Triggers</h2>
        <ul className="divide-y" style={{ borderColor: 'var(--color-accent)' }}>
          {dropOffTriggers.map((item, idx) => (
            <li key={idx} className="py-2 flex justify-between items-center">
              <span className="font-medium">{item.stage} - {item.reason}</span>
              <span style={{ color: 'var(--color-accent)' }}>{item.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Leads by Region Heatmap (Bar Chart) */}
      <div className="rounded-xl shadow-lg p-6" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
        <h2 className="font-bold text-xl mb-4">Leads by Region</h2>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={leadsByRegion} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Bar dataKey="value" fill="var(--color-secondary)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )};

export default function LeadsConversions() {
  return (
    <LeadsConversionsProvider>
      <LeadsConversionsContent />
    </LeadsConversionsProvider>
  );
}