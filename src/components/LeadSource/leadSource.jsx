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

import { useState } from "react"
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts"

export function LeadSource({ leadSourceData, trendData }) {
  const [viewType, setViewType] = useState("pie")
  const [timeframe, setTimeframe] = useState("week")

  // Prepare bar chart data
  const barChartData = leadSourceData.map((item) => ({
    name: item.name.length > 10 ? item.name.slice(0, 10) + "…" : item.name,
    leads: item.value,
    conversion: item.conversionRate,
  }))

  return (
    <div className="bg-gray-900 min-h-screen p-6 space-y-8 text-gray-100">
      {/* Header Controls */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold">Lead Sources Analysis</h2>
          <div className="flex items-center gap-3">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="bg-gray-700 text-gray-200 px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
            <div className="bg-gray-700 rounded-full flex overflow-hidden border border-gray-600">
              {["pie", "bar", "trend"].map((type) => (
                <button
                  key={type}
                  onClick={() => setViewType(type)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    viewType === type
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {type === "pie"
                    ? "Pie Chart"
                    : type === "bar"
                    ? "Bar Chart"
                    : "Trend"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-96">
          {viewType === "pie" && (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leadSourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(1)}%`
                  }
                  outerRadius={120}
                  dataKey="value"
                >
                  {leadSourceData.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  wrapperStyle={{ backgroundColor: "#1f2937", borderColor: "#374151" }}
                  contentStyle={{ color: "#f9fafb" }}
                  formatter={(value) => [`${value}`, "Leads"]}
                />
              </PieChart>
            </ResponsiveContainer>
          )}

          {viewType === "bar" && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#9ca3af" }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fill: "#9ca3af" }} />
                <Tooltip
                  wrapperStyle={{ backgroundColor: "#1f2937", borderColor: "#374151" }}
                  contentStyle={{ color: "#f9fafb" }}
                />
                <Bar dataKey="leads" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                <Bar dataKey="conversion" fill="#10B981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}

          {viewType === "trend" && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
                <XAxis dataKey="week" tick={{ fill: "#9ca3af" }} />
                <YAxis tick={{ fill: "#9ca3af" }} />
                <Tooltip
                  wrapperStyle={{ backgroundColor: "#1f2937", borderColor: "#374151" }}
                  contentStyle={{ color: "#f9fafb" }}
                />
                <Line type="monotone" dataKey="WhatsApp" stroke="#25D366" strokeWidth={2} />
                <Line type="monotone" dataKey="Instagram" stroke="#E4405F" strokeWidth={2} />
                <Line type="monotone" dataKey="LinkedIn" stroke="#0077B5" strokeWidth={2} />
                <Line type="monotone" dataKey="Facebook" stroke="#1877F2" strokeWidth={2} />
                <Line type="monotone" dataKey="Website" stroke="#FF6B6B" strokeWidth={2} />
                <Line type="monotone" dataKey="Others" stroke="#888888" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Detailed Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {leadSourceData.map((source, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-4 rounded-2xl shadow-md border border-gray-700 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: source.color }}
                />
                <span className="font-medium">{source.name}</span>
              </div>
             
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Leads</span>
                <span className="font-semibold text-gray-100">{source.value}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Conversion</span>
                <span className="font-semibold text-gray-100">
                  {source.conversionRate}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${source.conversionRate}%`,
                    backgroundColor: source.color,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
