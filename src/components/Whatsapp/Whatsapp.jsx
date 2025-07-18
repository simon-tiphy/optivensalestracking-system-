// import { MetricCard } from "../Metrics/MetricCard";
// import {Clock,MessageSquare,Activity} from "lucide-react"
// import {ResponsiveContainer,XAxis,YAxis,Tooltip,Area,CartesianGrid,Legend,AreaChart} from "recharts"


// export function WhatsApp(){
//     return(
//         <div className="space-y-6">
//       {/* WhatsApp Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow-up Activity</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <AreaChart data={[
//             { name: 'Mon', auto: 45, manual: 12 },
//             { name: 'Tue', auto: 52, manual: 8 },
//             { name: 'Wed', auto: 48, manual: 15 },
//             { name: 'Thu', auto: 61, manual: 10 },
//             { name: 'Fri', auto: 55, manual: 18 },
//             { name: 'Sat', auto: 42, manual: 22 },
//             { name: 'Sun', auto: 38, manual: 25 }
//           ]}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Area type="monotone" dataKey="auto" stackId="1" stroke="#3B82F6" fill="#3B82F6" />
//             <Area type="monotone" dataKey="manual" stackId="1" stroke="#10B981" fill="#10B981" />
//             <Legend />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Recent Conversations */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Conversations</h3>
//         <div className="space-y-4">
//           {[
//             { contact: 'John Smith', message: 'Interested in your product demo', time: '2 min ago', status: 'active' },
//             { contact: 'Sarah Wilson', message: 'Can you send me the pricing?', time: '5 min ago', status: 'responded' },
//             { contact: 'Mike Johnson', message: 'When is the next webinar?', time: '10 min ago', status: 'pending' },
//             { contact: 'Lisa Brown', message: 'Thank you for the information', time: '15 min ago', status: 'closed' }
//           ].map((conversation, index) => (
//             <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//               <div className="flex items-center space-x-4">
//                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
//                   {conversation.contact.split(' ').map(n => n[0]).join('')}
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-900">{conversation.contact}</h4>
//                   <p className="text-sm text-gray-600">{conversation.message}</p>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <div className="text-sm text-gray-500">{conversation.time}</div>
//                 <div className={`text-xs px-2 py-1 rounded-full ${
//                   conversation.status === 'active' ? 'bg-green-100 text-green-800' :
//                   conversation.status === 'responded' ? 'bg-blue-100 text-blue-800' :
//                   conversation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
//                   'bg-gray-100 text-gray-800'
//                 }`}>
//                   {conversation.status}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     )
// }

import { MetricCard } from "../Metrics/MetricCard";
import { Clock, MessageSquare, Activity } from "lucide-react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
  Legend,
  AreaChart,
} from "recharts";

export function WhatsApp() {
  return (
    <div className="space-y-6">
      {/* WhatsApp Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <MetricCard
          title="Avg Response Time"
          value="1.2 min"
          change="-0.3 min"
          changeType="decrease"
          icon={Clock}
          color="green"
        />
        <MetricCard
          title="Active Conversations"
          value="67"
          change="+12"
          changeType="increase"
          icon={MessageSquare}
          color="blue"
        />
        <MetricCard
          title="AI Generated Replies"
          value="89%"
          change="+5%"
          changeType="increase"
          icon={Activity}
          color="purple"
        />
      </div>

      {/* Follow-up Activity */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
          Follow-up Activity
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={[
              { name: "Mon", auto: 45, manual: 12 },
              { name: "Tue", auto: 52, manual: 8 },
              { name: "Wed", auto: 48, manual: 15 },
              { name: "Thu", auto: 61, manual: 10 },
              { name: "Fri", auto: 55, manual: 18 },
              { name: "Sat", auto: 42, manual: 22 },
              { name: "Sun", auto: 38, manual: 25 },
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="auto"
              stackId="1"
              stroke="#3B82F6"
              fill="#3B82F6"
            />
            <Area
              type="monotone"
              dataKey="manual"
              stackId="1"
              stroke="#10B981"
              fill="#10B981"
            />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Conversations */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
          Recent Conversations
        </h3>
        <div className="space-y-4">
          {[
            {
              contact: "John Smith",
              message: "Interested in your product demo",
              time: "2 min ago",
              status: "active",
            },
            {
              contact: "Sarah Wilson",
              message: "Can you send me the pricing?",
              time: "5 min ago",
              status: "responded",
            },
            {
              contact: "Mike Johnson",
              message: "When is the next webinar?",
              time: "10 min ago",
              status: "pending",
            },
            {
              contact: "Lisa Brown",
              message: "Thank you for the information",
              time: "15 min ago",
              status: "closed",
            },
          ].map((conversation, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {conversation.contact
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{conversation.contact}</h4>
                  <p className="text-sm text-gray-600">{conversation.message}</p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-sm text-gray-500">{conversation.time}</div>
                <div
                  className={`text-xs px-2 py-1 rounded-full mt-1 sm:mt-0 inline-block ${
                    conversation.status === "active"
                      ? "bg-green-100 text-green-800"
                      : conversation.status === "responded"
                      ? "bg-blue-100 text-blue-800"
                      : conversation.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {conversation.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
