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
} from "recharts";

export function Campaign({ campaignData }) {
  return (
    <div className="space-y-6">
      {/* Campaign Performance Table */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
          Campaign Performance
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 md:py-3 md:px-4 font-medium text-gray-700">
                  Campaign
                </th>
                <th className="text-left py-2 px-3 md:py-3 md:px-4 font-medium text-gray-700">
                  Impressions
                </th>
                <th className="text-left py-2 px-3 md:py-3 md:px-4 font-medium text-gray-700">
                  Clicks
                </th>
                <th className="text-left py-2 px-3 md:py-3 md:px-4 font-medium text-gray-700">
                  CTR
                </th>
                <th className="text-left py-2 px-3 md:py-3 md:px-4 font-medium text-gray-700">
                  Cost/Lead
                </th>
                <th className="text-left py-2 px-3 md:py-3 md:px-4 font-medium text-gray-700">
                  ROI
                </th>
              </tr>
            </thead>
            <tbody>
              {campaignData.map((campaign, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-2 px-3 md:py-3 md:px-4 font-medium text-gray-900">
                    {campaign.name}
                  </td>
                  <td className="py-2 px-3 md:py-3 md:px-4 text-gray-600">
                    {campaign.impressions.toLocaleString()}
                  </td>
                  <td className="py-2 px-3 md:py-3 md:px-4 text-gray-600">
                    {campaign.clicks.toLocaleString()}
                  </td>
                  <td className="py-2 px-3 md:py-3 md:px-4 text-gray-600">
                    {campaign.ctr}%
                  </td>
                  <td className="py-2 px-3 md:py-3 md:px-4 text-gray-600">
                    ${campaign.costPerLead}
                  </td>
                  <td className="py-2 px-3 md:py-3 md:px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        campaign.roi > 300
                          ? "bg-green-100 text-green-800"
                          : campaign.roi > 200
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {campaign.roi}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cost per Lead Chart */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
          Cost per Lead by Campaign
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={campaignData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`$${value}`, "Cost per Lead"]} />
            <Bar dataKey="costPerLead" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
