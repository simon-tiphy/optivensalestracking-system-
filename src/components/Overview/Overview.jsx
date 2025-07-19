
// import {DollarSign,Users,Target,Clock} from "lucide-react"
// import {ResponsiveContainer,AreaChart,Area, CartesianGrid,XAxis,YAxis,Tooltip} from "recharts"
// import { MetricCard } from "../Metrics/MetricCard"
// export function Overview({revenueData}){
//     return (
//          <div className="space-y-6">
//       {/* Key Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <MetricCard 
//           title="Total Revenue" 
//           value="$152,000" 
//           change="+12.5%" 
//           changeType="increase"
//           icon={DollarSign}
//           color="green"
//         />
//         <MetricCard 
//           title="Leads Captured" 
//           value="1,247" 
//           change="+8.2%" 
//           changeType="increase"
//           icon={Users}
//           color="blue"
//         />
//         <MetricCard 
//           title="Conversion Rate" 
//           value="24.8%" 
//           change="+2.1%" 
//           changeType="increase"
//           icon={Target}
//           color="purple"
//         />
//         <MetricCard 
//           title="Avg Time to Close" 
//           value="12.5 days" 
//           change="-1.2 days" 
//           changeType="decrease"
//           icon={Clock}
//           color="orange"
//         />
//       </div>

//       {/* Revenue Chart */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <AreaChart data={revenueData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
//             <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.2} />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
      
//       {/* Hot Leads & Pending Follow-ups */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Hot Leads</h3>
//           <div className="space-y-3">
//             {['Acme Corp', 'Tech Solutions Inc', 'Global Dynamics', 'Innovation Hub'].map((lead, index) => (
//               <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
//                 <span className="font-medium text-gray-900">{lead}</span>
//                 <span className="text-sm text-red-600 font-medium">High Priority</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Follow-ups</h3>
//           <div className="space-y-3">
//             {['Sarah Johnson: 3 leads', 'Mike Chen: 5 leads', 'Emily Davis: 2 leads', 'Alex Rodriguez: 4 leads'].map((item, index) => (
//               <div key={index} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
//                 <span className="font-medium text-gray-900">{item}</span>
//                 <Clock className="w-4 h-4 text-yellow-600" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//     )
// }


import { DollarSign, Users, Target, Clock } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { MetricCard } from "../Metrics/MetricCard";

export function Overview({ revenueData }) {
  return (
    <div className="space-y-8 px-4 md:px-8 py-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value="$152,000"
          change="+12.5%"
          changeType="increase"
          icon={DollarSign}
          color="green"
          className="hover:shadow-xl transform hover:-translate-y-1 transition"
        />
        <MetricCard
          title="Leads Captured"
          value="1,247"
          change="+8.2%"
          changeType="increase"
          icon={Users}
          color="blue"
          className="hover:shadow-xl transform hover:-translate-y-1 transition"
        />
        <MetricCard
          title="Conversion Rate"
          value="24.8%"
          change="+2.1%"
          changeType="increase"
          icon={Target}
          color="purple"
          className="hover:shadow-xl transform hover:-translate-y-1 transition"
        />
        <MetricCard
          title="Avg Time to Close"
          value="12.5 days"
          change="-1.2 days"
          changeType="decrease"
          icon={Clock}
          color="orange"
          className="hover:shadow-xl transform hover:-translate-y-1 transition"
        />
      </div>

      {/* Revenue Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Revenue Trend
        </h3>
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={revenueData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: 8, borderColor: "#E5E7EB" }}
              formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3B82F6"
              fill="url(#revenueGradient)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Hot Leads & Pending Follow-ups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Hot Leads
          </h3>
          <div className="space-y-3">
            {["Acme Corp", "Tech Solutions Inc", "Global Dynamics", "Innovation Hub"].map(
              (lead, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/30 rounded-xl hover:bg-red-100 dark:hover:bg-red-800 transition"
                >
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {lead}
                  </span>
                  <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                    High Priority
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Pending Follow-ups
          </h3>
          <div className="space-y-3">
            {[
              "Sarah Johnson: 3 leads",
              "Mike Chen: 5 leads",
              "Emily Davis: 2 leads",
              "Alex Rodriguez: 4 leads",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl hover:bg-yellow-100 dark:hover:bg-yellow-800 transition"
              >
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {item}
                </span>
                <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


