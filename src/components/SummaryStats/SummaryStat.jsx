import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, TrendingUp, Target, MessageCircle } from 'lucide-react';

const SummaryStats = ({ summaryStats = {} }) => {
  // Safely destructure with defaults
  const {
    totalLeads = 0,
    hotLeads = 0,
    warmLeads = 0,
    coldLeads = 0,
    mostActiveChannel = 'N/A'
  } = summaryStats;

  // Prepare data for lead score distribution chart
  const leadScoreData = [
    { name: 'Hot Leads', value: hotLeads, color: '#E74C3C' },
    { name: 'Warm Leads', value: warmLeads, color: '#F39C12' },
    { name: 'Cold Leads', value: coldLeads, color: '#3498DB' }
  ].filter(item => item.value > 0);

  // Calculate conversion potential (Hot + Warm leads)
  const conversionPotential = hotLeads + warmLeads;
  const conversionRate = totalLeads > 0 
    ? Math.round((conversionPotential / totalLeads) * 100) 
    : 0;

  // Stats cards data
  const statsCards = [
    {
      title: 'Total Leads',
      value: totalLeads,
      icon: Users,
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      title: 'Hot Leads',
      value: hotLeads,
      icon: TrendingUp,
      color: 'bg-red-500',
      textColor: 'text-red-600'
    },
    {
      title: 'Conversion Ready',
      value: conversionPotential,
      icon: Target,
      color: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      title: 'Top Channel',
      value: mostActiveChannel,
      icon: MessageCircle,
      color: 'bg-purple-500',
      textColor: 'text-purple-600'
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-semibold">{`${label}: ${payload[0].value}`}</p>
          <p className="text-sm text-gray-600">
            {`${Math.round((payload[0].value / totalLeads) * 100)}% of total leads`}
          </p>
        </div>
      );
    }
    return null;
  };

  if (totalLeads === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Lead Summary</h2>
        <div className="text-center py-8">
          <p className="text-gray-500">No lead data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.textColor}`}>
                    {typeof stat.value === 'string' ? stat.value : stat.value.toLocaleString()}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lead Score Distribution Bar Chart */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Lead Score Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={leadScoreData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="#8884d8">
                {leadScoreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Lead Score Distribution Pie Chart */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Lead Quality Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={leadScoreData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {leadScoreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Conversion Insights */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Conversion Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">{conversionRate}%</p>
            <p className="text-sm text-gray-600">Conversion Ready Rate</p>
            <p className="text-xs text-gray-500">(Hot + Warm leads)</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-orange-600">
              {totalLeads > 0 ? Math.round((hotLeads / totalLeads) * 100) : 0}%
            </p>
            <p className="text-sm text-gray-600">Hot Lead Rate</p>
            <p className="text-xs text-gray-500">Immediate opportunities</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">{mostActiveChannel}</p>
            <p className="text-sm text-gray-600">Top Performing Channel</p>
            <p className="text-xs text-gray-500">Focus your efforts here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryStats;