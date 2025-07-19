// import {ResponsiveContainer,BarChart,CartesianGrid,XAxis,YAxis,Bar,Tooltip} from "recharts"
// export function Campaign({campaignData}){
//     return (

//          <div className="space-y-6">
//       {/* Campaign Performance Table */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Performance</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b border-gray-200">
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">Campaign</th>
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">Impressions</th>
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">Clicks</th>
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">CTR</th>
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">Cost/Lead</th>
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">ROI</th>
//               </tr>
//             </thead>
//             <tbody>
//               {campaignData.map((campaign, index) => (
//                 <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
//                   <td className="py-3 px-4 font-medium text-gray-900">{campaign.name}</td>
//                   <td className="py-3 px-4 text-gray-600">{campaign.impressions.toLocaleString()}</td>
//                   <td className="py-3 px-4 text-gray-600">{campaign.clicks.toLocaleString()}</td>
//                   <td className="py-3 px-4 text-gray-600">{campaign.ctr}%</td>
//                   <td className="py-3 px-4 text-gray-600">${campaign.costPerLead}</td>
//                   <td className="py-3 px-4">
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       campaign.roi > 300 ? 'bg-green-100 text-green-800' :
//                       campaign.roi > 200 ? 'bg-yellow-100 text-yellow-800' :
//                       'bg-red-100 text-red-800'
//                     }`}>
//                       {campaign.roi}%
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Cost per Lead Chart */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost per Lead by Campaign</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={campaignData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip formatter={(value) => [`$${value}`, 'Cost per Lead']} />
//             <Bar dataKey="costPerLead" fill="#3B82F6" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>

//     )
// }


import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts"

export function Campaign({ campaignData }) {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen px-4 sm:px-6 md:px-8 py-8 space-y-8">
      {/* Campaign Performance Table */}
      <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-700 overflow-x-auto">
        <h3 className="text-lg sm:text-xl font-semibold mb-6">
          📊 Campaign Performance
        </h3>
        <table className="min-w-[640px] w-full text-sm text-left table-fixed">
          <thead>
            <tr className="border-b border-gray-700 text-gray-300">
              {["Campaign", "Impressions", "Clicks", "CTR", "Cost/Lead", "ROI"].map((h) => (
                <th key={h} className="py-3 px-4 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {campaignData.map((c, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
              >
                <td className="py-3 px-4 font-medium text-gray-100">{c.name}</td>
                <td className="py-3 px-4 text-gray-300">{c.impressions.toLocaleString()}</td>
                <td className="py-3 px-4 text-gray-300">{c.clicks.toLocaleString()}</td>
                <td className="py-3 px-4 text-gray-300">{c.ctr}%</td>
                <td className="py-3 px-4 text-gray-300">${c.costPerLead}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block text-xs font-medium px-2 py-1 rounded-full
                      ${c.roi > 300
                        ? "bg-green-600 bg-opacity-20 text-green-400"
                        : c.roi > 200
                        ? "bg-yellow-600 bg-opacity-20 text-yellow-400"
                        : "bg-red-600 bg-opacity-20 text-red-400"}
                    `}
                  >
                    {c.roi}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cost per Lead Chart */}
      <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-700">
        <h3 className="text-lg sm:text-xl font-semibold mb-6">
          💰 Cost per Lead by Campaign
        </h3>
        <div className="h-72 sm:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={campaignData} margin={{ top: 10, right: 20, left: 0, bottom: 30 }}>
              {/* Define Gradient Here (Inside BarChart) */}
              <defs>
                <linearGradient id="gradBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#1E40AF" stopOpacity={0.8} />
                </linearGradient>
              </defs>

              <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                angle={-30}
                textAnchor="end"
                height={60}
              />
              <YAxis
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                wrapperStyle={{ backgroundColor: "#1f2937", borderColor: "#374151" }}
                contentStyle={{ color: "#f9fafb" }}
                formatter={(value) => [`$${value}`, "Cost per Lead"]}
              />
              <Bar dataKey="costPerLead" fill="url(#gradBlue)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
