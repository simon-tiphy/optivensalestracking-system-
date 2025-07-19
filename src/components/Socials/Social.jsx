// import { Heart, MessageCircle, Bookmark } from "lucide-react"
// import {
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   Line,
//   LineChart,
//   ResponsiveContainer,
// } from "recharts"

// export function Social({ socialMediaData }) {
//   return (
//     <div className="space-y-6">
//       {/* Social Media Overview */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//         {socialMediaData.map((platform, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200"
//           >
//             <h4 className="text-base font-medium text-gray-900 mb-2">{platform.platform}</h4>
//             <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
//               {platform.posts} posts
//             </div>
//             <div className="space-y-1 text-sm text-gray-600">
//               <div className="flex items-center justify-between">
//                 <span className="flex items-center">
//                   <Heart className="w-4 h-4 mr-1" /> Likes
//                 </span>
//                 <span>{platform.likes}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="flex items-center">
//                   <MessageCircle className="w-4 h-4 mr-1" /> Comments
//                 </span>
//                 <span>{platform.comments}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="flex items-center">
//                   <Bookmark className="w-4 h-4 mr-1" /> Saves
//                 </span>
//                 <span>{platform.saves}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Engagement Chart */}
//       <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
//           Engagement Trend
//         </h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart
//             data={[
//               { name: "Mon", likes: 120, comments: 45, saves: 23 },
//               { name: "Tue", likes: 150, comments: 52, saves: 28 },
//               { name: "Wed", likes: 180, comments: 48, saves: 31 },
//               { name: "Thu", likes: 200, comments: 65, saves: 35 },
//               { name: "Fri", likes: 220, comments: 58, saves: 42 },
//               { name: "Sat", likes: 190, comments: 70, saves: 38 },
//               { name: "Sun", likes: 160, comments: 55, saves: 33 },
//             ]}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="likes" stroke="#E91E63" strokeWidth={2} />
//             <Line type="monotone" dataKey="comments" stroke="#2196F3" strokeWidth={2} />
//             <Line type="monotone" dataKey="saves" stroke="#4CAF50" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Top Performing Content */}
//       <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
//           Top Performing Content
//         </h3>
//         <div className="space-y-4">
//           {[
//             { title: "Product Demo Video", engagement: 2450, platform: "Instagram" },
//             { title: "Customer Success Story", engagement: 1890, platform: "LinkedIn" },
//             { title: "Industry Insights Post", engagement: 1560, platform: "Twitter" },
//             { title: "Behind the Scenes", engagement: 1340, platform: "Instagram" },
//           ].map((content, index) => (
//             <div
//               key={index}
//               className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-lg"
//             >
//               <div className="mb-2 sm:mb-0">
//                 <h4 className="font-medium text-gray-900">{content.title}</h4>
//                 <p className="text-sm text-gray-600">{content.platform}</p>
//               </div>
//               <div className="text-left sm:text-right">
//                 <div className="text-lg font-bold text-gray-900">{content.engagement}</div>
//                 <div className="text-sm text-gray-600">engagements</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


import { Heart, MessageCircle, Bookmark } from "lucide-react"
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts"
import { motion } from "framer-motion"

export function Social({ socialMediaData }) {
  // Animation variants for staggered fade+slide
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  }

  return (
    <div className="bg-gray-900 min-h-screen p-8 space-y-8">
      {/* Social Media Overview */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
      >
        {socialMediaData.map((platform, index) => (
          <motion.div
            key={index}
            variants={containerVariants}
            custom={index}
            className="bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 transition-transform hover:scale-[1.02]"
          >
            <h4 className="text-lg font-semibold text-gray-100 mb-3">
              {platform.platform}
            </h4>
            <div className="text-2xl font-bold text-white mb-3">
              {platform.posts}{" "}
              <span className="text-sm font-medium text-gray-400">posts</span>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-pink-400 font-medium">
                  <Heart className="w-4 h-4" /> Likes
                </span>
                <span>{platform.likes}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-blue-400 font-medium">
                  <MessageCircle className="w-4 h-4" /> Comments
                </span>
                <span>{platform.comments}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-green-400 font-medium">
                  <Bookmark className="w-4 h-4" /> Saves
                </span>
                <span>{platform.saves}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Engagement Chart */}
      <motion.div
        className="bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-lg font-semibold text-gray-100 mb-5">
          📊 Engagement Trend
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={[
              { name: "Mon", likes: 120, comments: 45, saves: 23 },
              { name: "Tue", likes: 150, comments: 52, saves: 28 },
              { name: "Wed", likes: 180, comments: 48, saves: 31 },
              { name: "Thu", likes: 200, comments: 65, saves: 35 },
              { name: "Fri", likes: 220, comments: 58, saves: 42 },
              { name: "Sat", likes: 190, comments: 70, saves: 38 },
              { name: "Sun", likes: 160, comments: 55, saves: 33 },
            ]}
          >
            <CartesianGrid stroke="#444" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151" }}
              labelStyle={{ color: "#e5e7eb" }}
            />
            <Legend wrapperStyle={{ color: "#ccc" }} />
            <Line type="monotone" dataKey="likes" stroke="#E91E63" strokeWidth={3} />
            <Line type="monotone" dataKey="comments" stroke="#2196F3" strokeWidth={3} />
            <Line type="monotone" dataKey="saves" stroke="#4CAF50" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Top Performing Content */}
      <motion.div
        className="bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-lg font-semibold text-gray-100 mb-5">
          🚀 Top Performing Content
        </h3>
        <div className="space-y-4">
          {[
            { title: "Product Demo Video", engagement: 2450, platform: "Instagram" },
            { title: "Customer Success Story", engagement: 1890, platform: "LinkedIn" },
            { title: "Industry Insights Post", engagement: 1560, platform: "Twitter" },
            { title: "Behind the Scenes", engagement: 1340, platform: "Instagram" },
          ].map((content, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-700 rounded-xl hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div>
                <h4 className="font-medium text-gray-100">{content.title}</h4>
                <p className="text-sm text-gray-400">{content.platform}</p>
              </div>
              <div className="text-left sm:text-right mt-2 sm:mt-0">
                <div className="text-xl font-bold text-white">{content.engagement}</div>
                <div className="text-sm text-gray-400">engagements</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
