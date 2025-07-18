// import {ResponsiveContainer,Line,LineChart,BarChart,Bar,Tooltip,PieChart,Pie,Cell,XAxis,YAxis,Legend,CartesianGrid} from "recharts"
// import{} from "lucide-react"
// import { useState } from "react";
// export function LeadSource({leadSourceData, trendData}){
//       const [viewType, setViewType] = useState('pie');
//   const [timeframe, setTimeframe] = useState('week');
// // Bar chart data for comparison
//   const barChartData = leadSourceData.map(item => ({
//     name: item.name.length > 10 ? item.name.substring(0, 10) + '...' : item.name,
//     leads: item.value,
//     conversion: item.conversionRate
//   }));
//     return (
//         <div className="space-y-6">
//       {/* Header with Controls */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Lead Sources Analysis</h2>
//           <div className="flex flex-wrap gap-3">
//             <select 
//               value={timeframe} 
//               onChange={(e) => setTimeframe(e.target.value)}
//               className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="week">This Week</option>
//               <option value="month">This Month</option>
//               <option value="quarter">This Quarter</option>
//             </select>
//             <div className="flex border border-gray-300 rounded-lg overflow-hidden">
//               <button
//                 onClick={() => setViewType('pie')}
//                 className={`px-4 py-2 text-sm font-medium ${
//                   viewType === 'pie' 
//                     ? 'bg-blue-500 text-white' 
//                     : 'bg-white text-gray-700 hover:bg-gray-50'
//                 }`}
//               >
//                 Pie Chart
//               </button>
//               <button
//                 onClick={() => setViewType('bar')}
//                 className={`px-4 py-2 text-sm font-medium ${
//                   viewType === 'bar' 
//                     ? 'bg-blue-500 text-white' 
//                     : 'bg-white text-gray-700 hover:bg-gray-50'
//                 }`}
//               >
//                 Bar Chart
//               </button>
//               <button
//                 onClick={() => setViewType('trend')}
//                 className={`px-4 py-2 text-sm font-medium ${
//                   viewType === 'trend' 
//                     ? 'bg-blue-500 text-white' 
//                     : 'bg-white text-gray-700 hover:bg-gray-50'
//                 }`}
//               >
//                 Trend
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Chart Display */}
//         <div className="h-96">
//           {viewType === 'pie' && (
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={leadSourceData}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
//                   outerRadius={120}
//                   fill="#8884d8"
//                   dataKey="value"
//                 >
//                   {leadSourceData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//                 <Tooltip formatter={(value) => [value, 'Leads']} />
//               </PieChart>
//             </ResponsiveContainer>
//           )}

//           {viewType === 'bar' && (
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
//                 <YAxis yAxisId="left" />
//                 <YAxis yAxisId="right" orientation="right" />
//                 <Tooltip />
//                 <Legend />
//                 <Bar yAxisId="left" dataKey="leads" fill="#3B82F6" name="Leads" />
//                 <Bar yAxisId="right" dataKey="conversion" fill="#10B981" name="Conversion Rate %" />
//               </BarChart>
//             </ResponsiveContainer>
//           )}

//           {viewType === 'trend' && (
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={trendData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="week" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="WhatsApp" stroke="#25D366" strokeWidth={2} />
//                 <Line type="monotone" dataKey="Instagram" stroke="#E4405F" strokeWidth={2} />
//                 <Line type="monotone" dataKey="LinkedIn" stroke="#0077B5" strokeWidth={2} />
//                 <Line type="monotone" dataKey="Facebook" stroke="#1877F2" strokeWidth={2} />
//                 <Line type="monotone" dataKey="Website" stroke="#FF6B6B" strokeWidth={2} />
//                 <Line type="monotone" dataKey="Others" stroke="#666666" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           )}
//         </div>
//       </div>

//       {/* Detailed Stats Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//         {leadSourceData.map((source, index) => (
//           <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between mb-3">
//               <div className="flex items-center space-x-3">
//                 <div 
//                   className="w-4 h-4 rounded-full"
//                   style={{ backgroundColor: source.color }}
//                 />
//                 <span className="font-medium text-gray-900 text-sm">{source.name}</span>
//               </div>
//               <span className={`text-xs px-2 py-1 rounded-full ${
//                 source.growth.startsWith('+') 
//                   ? 'bg-green-100 text-green-800' 
//                   : 'bg-red-100 text-red-800'
//               }`}>
//                 {source.growth}
//               </span>
//             </div>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-sm text-gray-600">Leads</span>
//                 <span className="font-bold text-gray-900">{source.value}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-sm text-gray-600">Conversion</span>
//                 <span className="font-bold text-gray-900">{source.conversionRate}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div 
//                   className="h-2 rounded-full transition-all duration-300"
//                   style={{ 
//                     width: `${source.conversionRate}%`,
//                     backgroundColor: source.color
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Summary Statistics */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Source Summary</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="text-center">
//             <div className="text-3xl font-bold text-blue-600 mb-1">
//               {leadSourceData.reduce((sum, source) => sum + source.value, 0)}
//             </div>
//             <div className="text-sm text-gray-600">Total Leads</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-green-600 mb-1">
//               {leadSourceData.length}
//             </div>
//             <div className="text-sm text-gray-600">Active Channels</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-purple-600 mb-1">
//               {Math.round(leadSourceData.reduce((sum, source) => sum + source.conversionRate, 0) / leadSourceData.length)}%
//             </div>
//             <div className="text-sm text-gray-600">Avg Conversion</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-orange-600 mb-1">
//               {leadSourceData.find(s => s.name === 'Referrals')?.name || 'Referrals'}
//             </div>
//             <div className="text-sm text-gray-600">Top Converter</div>
//           </div>
//         </div>
//       </div>

//       {/* Top Performers */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Sources</h3>
//         <div className="space-y-4">
//           {[...leadSourceData]
//             .sort((a, b) => b.conversionRate - a.conversionRate)
//             .slice(0, 5)
//             .map((source, index) => (
//               <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                 <div className="flex items-center space-x-4">
//                   <div className="text-lg font-bold text-gray-500">#{index + 1}</div>
//                   <div 
//                     className="w-3 h-3 rounded-full"
//                     style={{ backgroundColor: source.color }}
//                   />
//                   <div>
//                     <div className="font-medium text-gray-900">{source.name}</div>
//                     <div className="text-sm text-gray-600">{source.value} leads</div>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-lg font-bold text-gray-900">{source.conversionRate}%</div>
//                   <div className="text-sm text-gray-600">conversion rate</div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//     )
// }


import {
  ResponsiveContainer,
  Line,
  LineChart,
  BarChart,
  Bar,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid
} from "recharts";
import { useState } from "react";

export function LeadSource({ leadSourceData, trendData }) {
  const [viewType, setViewType] = useState("pie");
  const [timeframe, setTimeframe] = useState("week");

  const barChartData = leadSourceData.map(item => ({
    name: item.name.length > 10 ? item.name.substring(0, 10) + "..." : item.name,
    leads: item.value,
    conversion: item.conversionRate
  }));

  return (
    <div className="space-y-6 px-2 sm:px-6">
      {/* Header */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Lead Sources Analysis</h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden w-full sm:w-auto">
              {["pie", "bar", "trend"].map(type => (
                <button
                  key={type}
                  onClick={() => setViewType(type)}
                  className={`flex-1 sm:flex-none px-4 py-2 text-sm font-medium ${
                    viewType === type ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[400px] mt-6 -mx-2 sm:mx-0">
          {viewType === "pie" && (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leadSourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {leadSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [value, "Leads"]} />
              </PieChart>
            </ResponsiveContainer>
          )}

          {viewType === "bar" && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="leads" fill="#3B82F6" name="Leads" />
                <Bar yAxisId="right" dataKey="conversion" fill="#10B981" name="Conversion %" />
              </BarChart>
            </ResponsiveContainer>
          )}

          {viewType === "trend" && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                {["WhatsApp", "Instagram", "LinkedIn", "Facebook", "Website", "Others"].map((key, index) => (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={leadSourceData[index]?.color || "#8884d8"}
                    strokeWidth={2}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Stat Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-1">
        {leadSourceData.map((source, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: source.color }} />
                <span className="font-medium text-sm text-gray-900">{source.name}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                source.growth.startsWith("+") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}>
                {source.growth}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Leads</span>
                <span className="font-bold text-gray-900">{source.value}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Conversion</span>
                <span className="font-bold text-gray-900">{source.conversionRate}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: `${source.conversionRate}%`, backgroundColor: source.color }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Source Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {leadSourceData.reduce((sum, source) => sum + source.value, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Leads</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 mb-1">{leadSourceData.length}</div>
            <div className="text-sm text-gray-600">Active Channels</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {Math.round(leadSourceData.reduce((sum, source) => sum + source.conversionRate, 0) / leadSourceData.length)}%
            </div>
            <div className="text-sm text-gray-600">Avg Conversion</div>
          </div>
          <div>
            <div className="text-base font-bold text-orange-600 mb-1">
              {leadSourceData.find(s => s.name === "Referrals")?.name || "Referrals"}
            </div>
            <div className="text-sm text-gray-600">Top Converter</div>
          </div>
        </div>
      </div>

      {/* Top Performers */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Sources</h3>
        <div className="space-y-4">
          {[...leadSourceData]
            .sort((a, b) => b.conversionRate - a.conversionRate)
            .slice(0, 5)
            .map((source, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                  <div className="text-lg font-bold text-gray-500">#{index + 1}</div>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }} />
                  <div>
                    <div className="font-medium text-gray-900">{source.name}</div>
                    <div className="text-sm text-gray-600">{source.value} leads</div>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-lg font-bold text-gray-900">{source.conversionRate}%</div>
                  <div className="text-sm text-gray-600">conversion rate</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
