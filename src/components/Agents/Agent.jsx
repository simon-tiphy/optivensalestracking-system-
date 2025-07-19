// import{ResponsiveContainer,LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Line }from"recharts"
// export function Agent({ agentData }) {
//   return (
//     <div className="space-y-6">
//       {/* Agent Leaderboard */}
//       <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Agent Leaderboard</h3>
//         <div className="space-y-4">
//           {agentData.map((agent, index) => (
//             <div
//               key={index}
//               className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50 rounded-lg gap-2 sm:gap-0"
//             >
//               <div className="flex items-center space-x-3 sm:space-x-4">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
//                   {agent.avatar}
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-900 text-base sm:text-lg">{agent.name}</h4>
//                   <p className="text-xs sm:text-sm text-gray-600">Response Time: {agent.responseTime}</p>
//                 </div>
//               </div>
//               <div className="text-left sm:text-right">
//                 <div className="text-base sm:text-lg font-bold text-gray-900">{agent.deals} deals</div>
//                 <div className="text-xs sm:text-sm text-gray-600">{agent.leads} leads handled</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Response Time Chart */}
//       <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Average Response Time Trend</h3>
//         <div className="h-64 sm:h-72">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart
//               data={[
//                 { name: 'Mon', time: 2.5 },
//                 { name: 'Tue', time: 3.1 },
//                 { name: 'Wed', time: 2.8 },
//                 { name: 'Thu', time: 3.5 },
//                 { name: 'Fri', time: 2.9 },
//                 { name: 'Sat', time: 3.2 },
//                 { name: 'Sun', time: 2.7 }
//               ]}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip formatter={(value) => [`${value} min`, 'Response Time']} />
//               <Line type="monotone" dataKey="time" stroke="#8B5CF6" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion"
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts"

export function Agent({ agentData }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  }

  return (
    <div className="bg-gray-900 min-h-screen p-8 space-y-8">
      {/* Agent Leaderboard */}
      <motion.div
        className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-xl font-semibold text-gray-100 mb-6">
          🏆 Agent Leaderboard
        </h3>
        <div className="space-y-4">
          {agentData.map((agent, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-700 rounded-xl hover:scale-[1.02] hover:bg-gray-600 transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {agent.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-100">
                    {agent.name}
                  </h4>
                  <p className="text-sm text-gray-300">
                    Response Time: {agent.responseTime}
                  </p>
                </div>
              </div>
              <div className="mt-3 sm:mt-0 text-right">
                <div className="text-lg font-bold text-white">
                  {agent.deals} deals
                </div>
                <div className="text-sm text-gray-300">
                  {agent.leads} leads handled
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Response Time Chart */}
      <motion.div
        className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-xl font-semibold text-gray-100 mb-6">
          ⏱️ Average Response Time Trend
        </h3>
        <div className="h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={[
                { name: "Mon", time: 2.5 },
                { name: "Tue", time: 3.1 },
                { name: "Wed", time: 2.8 },
                { name: "Thu", time: 3.5 },
                { name: "Fri", time: 2.9 },
                { name: "Sat", time: 3.2 },
                { name: "Sun", time: 2.7 },
              ]}
            >
              <CartesianGrid stroke="#444" strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151" }}
                labelStyle={{ color: "#e5e7eb" }}
                formatter={(value) => [`${value} min`, "Response Time"]}
              />
              <Line
                type="monotone"
                dataKey="time"
                stroke="#8B5CF6"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  )
}
