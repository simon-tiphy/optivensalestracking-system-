// import { MetricCard } from "../Metrics/MetricCard";
// import { Clock, MessageSquare, Activity } from "lucide-react";
// import {
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Area,
//   CartesianGrid,
//   Legend,
//   AreaChart,
// } from "recharts";

// export function WhatsApp() {
//   return (
//     <div className="space-y-6">
//       {/* WhatsApp Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
//         <MetricCard
//           title="Avg Response Time"
//           value="1.2 min"
//           change="-0.3 min"
//           changeType="decrease"
//           icon={Clock}
//           color="green"
//         />
//         <MetricCard
//           title="Active Conversations"
//           value="67"
//           change="+12"
//           changeType="increase"
//           icon={MessageSquare}
//           color="blue"
//         />
//         <MetricCard
//           title="AI Generated Replies"
//           value="89%"
//           change="+5%"
//           changeType="increase"
//           icon={Activity}
//           color="purple"
//         />
//       </div>

//       {/* Follow-up Activity */}
//       <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
//           Follow-up Activity
//         </h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <AreaChart
//             data={[
//               { name: "Mon", auto: 45, manual: 12 },
//               { name: "Tue", auto: 52, manual: 8 },
//               { name: "Wed", auto: 48, manual: 15 },
//               { name: "Thu", auto: 61, manual: 10 },
//               { name: "Fri", auto: 55, manual: 18 },
//               { name: "Sat", auto: 42, manual: 22 },
//               { name: "Sun", auto: 38, manual: 25 },
//             ]}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Area
//               type="monotone"
//               dataKey="auto"
//               stackId="1"
//               stroke="#3B82F6"
//               fill="#3B82F6"
//             />
//             <Area
//               type="monotone"
//               dataKey="manual"
//               stackId="1"
//               stroke="#10B981"
//               fill="#10B981"
//             />
//             <Legend />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Recent Conversations */}
//       <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
//           Recent Conversations
//         </h3>
//         <div className="space-y-4">
//           {[
//             {
//               contact: "John Smith",
//               message: "Interested in your product demo",
//               time: "2 min ago",
//               status: "active",
//             },
//             {
//               contact: "Sarah Wilson",
//               message: "Can you send me the pricing?",
//               time: "5 min ago",
//               status: "responded",
//             },
//             {
//               contact: "Mike Johnson",
//               message: "When is the next webinar?",
//               time: "10 min ago",
//               status: "pending",
//             },
//             {
//               contact: "Lisa Brown",
//               message: "Thank you for the information",
//               time: "15 min ago",
//               status: "closed",
//             },
//           ].map((conversation, index) => (
//             <div
//               key={index}
//               className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-gray-200 rounded-lg"
//             >
//               <div className="flex items-center space-x-4 mb-2 sm:mb-0">
//                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
//                   {conversation.contact
//                     .split(" ")
//                     .map((n) => n[0])
//                     .join("")}
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-900">{conversation.contact}</h4>
//                   <p className="text-sm text-gray-600">{conversation.message}</p>
//                 </div>
//               </div>
//               <div className="text-left sm:text-right">
//                 <div className="text-sm text-gray-500">{conversation.time}</div>
//                 <div
//                   className={`text-xs px-2 py-1 rounded-full mt-1 sm:mt-0 inline-block ${
//                     conversation.status === "active"
//                       ? "bg-green-100 text-green-800"
//                       : conversation.status === "responded"
//                       ? "bg-blue-100 text-blue-800"
//                       : conversation.status === "pending"
//                       ? "bg-yellow-100 text-yellow-800"
//                       : "bg-gray-100 text-gray-800"
//                   }`}
//                 >
//                   {conversation.status}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { motion } from "framer-motion"
import { MetricCard } from "../Metrics/MetricCard"
import { Clock, MessageSquare, Activity } from "lucide-react"
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend
} from "recharts"
import { HotColdDealsComponent } from "./HotDealsComponent"

export function WhatsApp({appData, dealsData,hot,cold}) {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }

  return (
    <div className="bg-gray-900 min-h-screen p-8 space-y-8">
      {/* WhatsApp Metrics */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {[
          { title: "⏱️ Avg Response Time", value: "1.2 min", change: "-0.3 min", changeType: "decrease", icon: Clock, color: "green" },
          { title: "💬 Active Conversations", value: "67", change: "+12", changeType: "increase", icon: MessageSquare, color: "blue" },
          { title: "🤖 AI Replies", value: "89%", change: "+5%", changeType: "increase", icon: Activity, color: "purple" },
        ].map((props, i) => (
          <motion.div key={i} variants={fadeUp}>
            <MetricCard {...props} className="bg-gray-800 text-gray-100 shadow-lg hover:shadow-xl transition-shadow" />
          </motion.div>
        ))}
      </motion.div>

      {/* Follow‑up Activity */}
      
<motion.div
  className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700"
  initial="hidden"
  animate="visible"
  variants={fadeUp}
>
  <h3 className="text-lg font-semibold text-gray-100 mb-4">📈 Deals Overview</h3>
  
  {/* Summary Cards */}
  <div className="grid grid-cols-3 gap-4 mb-6">
    <div className="bg-red-900/30 p-4 rounded-xl border border-red-700/50">
      <div className="text-red-400 text-sm font-medium">Hot Deals</div>
      <div className="text-2xl font-bold text-red-300">{dealsData.hot || 0}</div>
      <div className="text-xs text-red-500 mt-1">High priority</div>
    </div>
    
    <div className="bg-yellow-900/30 p-4 rounded-xl border border-yellow-700/50">
      <div className="text-yellow-400 text-sm font-medium">Warm Deals</div>
      <div className="text-2xl font-bold text-yellow-300">{dealsData.warm || 0}</div>
      <div className="text-xs text-yellow-500 mt-1">Medium priority</div>
    </div>
    
    <div className="bg-blue-900/30 p-4 rounded-xl border border-blue-700/50">
      <div className="text-blue-400 text-sm font-medium">Cold Deals</div>
      <div className="text-2xl font-bold text-blue-300">{dealsData.cold || 0}</div>
      <div className="text-xs text-blue-500 mt-1">Low priority</div>
    </div>
  </div>

  {/* Chart */}
  <div className="h-48">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={[
            { name: 'Hot', value: dealsData.hot || 0, fill: '#DC2626' },
            { name: 'Warm', value: dealsData.warm || 0, fill: '#D97706' },
            { name: 'Cold', value: dealsData.cold || 0, fill: '#2563EB' }
          ]}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {[
            { name: 'Hot', value: dealsData.hot || 0, fill: '#DC2626' },
            { name: 'Warm', value: dealsData.warm || 0, fill: '#D97706' },
            { name: 'Cold', value: dealsData.cold || 0, fill: '#2563EB' }
          ].map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ 
            backgroundColor: "#1f2937", 
            borderColor: "#374151",
            color: "#e5e7eb"
          }}
        />
        <Legend 
          wrapperStyle={{ color: "#ccc" }}
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
  
  {/* Total Count */}
  <div className="mt-4 pt-4 border-t border-gray-700">
    <div className="flex justify-between items-center">
      <span className="text-gray-400 text-sm">Total Deals</span>
      <span className="text-xl font-bold text-gray-100">
        {(dealsData.hot || 0) + (dealsData.warm || 0) + (dealsData.cold || 0)}
      </span>
    </div>
  </div>
</motion.div>
      {/* Recent Conversations */}
      <motion.div
        className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h3 className="text-lg font-semibold text-gray-100 mb-4">📜 Recent Conversations</h3>
        <div className="space-y-4">
          {appData.map((conv, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-bg"
            >
              <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  {conv.contact
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-100">{conv.contact}</h4>
                  <p className="text-sm text-gray-300">{conv.message}</p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-sm text-gray-400">{conv.time}</div>
                <span
                  className={`
                    inline-block text-xs font-medium px-2 py-1 mt-1 rounded-full
                    ${conv.status === "active"
                      ? "bg-green-100 text-green-800"
                      : conv.status === "responded"
                      ? "bg-blue-100 text-blue-800"
                      : conv.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"}
                  `}
                >
                  {conv.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <HotColdDealsComponent hotDeals={hot} coldDeals={cold}/>
    </div>
  )
}
