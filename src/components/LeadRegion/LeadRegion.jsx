import{BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer} from "recharts"
import {TrendingUp} from "lucide-react"
const leadsByRegion = [
  { region: 'Nyeri', value: 245, growth: '+12%' },
  { region: 'Nakuru', value: 189, growth: '+8%' },
  { region: 'Nairobi', value: 156, growth: '+23%' },
  { region: 'Mombasa', value: 89, growth: '+15%' },
  { region: 'Kisumu', value: 67, growth: '+5%' },
  { region: 'Eldoret', value: 34, growth: '+28%' }
];


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-800">{label}</p>
        <p className="text-blue-600 font-medium">
          Leads: {payload[0].value}
        </p>
        <p className="text-green-600 text-sm">
          Growth: {payload[0].payload.growth}
        </p>
      </div>
    );
  }
  return null;
};

export function LeadsRegion(){
const totalLeads = leadsByRegion.reduce((sum, item) => sum + item.value, 0);

return (
    <div className="w-full p-6">
      <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-shadow duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Leads by Region</h2>
              <p className="text-gray-600 text-sm">Regional performance overview</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900">{totalLeads.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Total Leads</div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-80 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={leadsByRegion} 
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              barCategoryGap="20%"
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
              <XAxis 
                dataKey="region" 
                fontSize={12} 
                tick={{ fill: '#6b7280' }}
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
              />
              <YAxis 
                fontSize={12} 
                tick={{ fill: '#6b7280' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="value" 
                fill="url(#barGradient)"
                radius={[6, 6, 0, 0]}
                stroke="#1e40af"
                strokeWidth={1}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
          {leadsByRegion.slice(0, 3).map((region, index) => (
            <div key={region.region} className="text-center">
              <div className="text-lg font-semibold text-gray-900">{region.value}</div>
              <div className="text-sm text-gray-600 truncate">{region.region}</div>
              <div className="text-xs text-green-600 font-medium">{region.growth}</div>
            </div>
          ))}
        </div>

        {/* Performance Indicator */}
        <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              <span className="font-medium">Top performer:</span> Nairobi
            </div>
            <div className="text-sm font-medium text-green-600">
              +12% growth
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
