
// import { Heart,MessageCircle,Bookmark } from "lucide-react"
// import {CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line,LineChart,ResponsiveContainer} from "recharts"
// export function Social({socialMediaData}){
//     return(
//         <div className="space-y-6">
//       {/* Social Media Overview */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {socialMediaData.map((platform, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//             <h4 className="font-medium text-gray-900 mb-2">{platform.platform}</h4>
//             <div className="text-2xl font-bold text-gray-900 mb-2">{platform.posts} posts</div>
//             <div className="space-y-1 text-sm text-gray-600">
//               <div className="flex items-center justify-between">
//                 <span className="flex items-center"><Heart className="w-4 h-4 mr-1" /> Likes</span>
//                 <span>{platform.likes}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="flex items-center"><MessageCircle className="w-4 h-4 mr-1" /> Comments</span>
//                 <span>{platform.comments}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="flex items-center"><Bookmark className="w-4 h-4 mr-1" /> Saves</span>
//                 <span>{platform.saves}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Engagement Chart */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Trend</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={[
//             { name: 'Mon', likes: 120, comments: 45, saves: 23 },
//             { name: 'Tue', likes: 150, comments: 52, saves: 28 },
//             { name: 'Wed', likes: 180, comments: 48, saves: 31 },
//             { name: 'Thu', likes: 200, comments: 65, saves: 35 },
//             { name: 'Fri', likes: 220, comments: 58, saves: 42 },
//             { name: 'Sat', likes: 190, comments: 70, saves: 38 },
//             { name: 'Sun', likes: 160, comments: 55, saves: 33 }
//           ]}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="likes" stroke="#E91E63" strokeWidth={2} />
//             <Line type="monotone" dataKey="comments" stroke="#2196F3" strokeWidth={2} />
//             <Line type="monotone" dataKey="saves" stroke="#4CAF50" strokeWidth={2} />
//             <Legend />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Top Performing Content */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Content</h3>
//         <div className="space-y-4">
//           {[
//             { title: 'Product Demo Video', engagement: 2450, platform: 'Instagram' },
//             { title: 'Customer Success Story', engagement: 1890, platform: 'LinkedIn' },
//             { title: 'Industry Insights Post', engagement: 1560, platform: 'Twitter' },
//             { title: 'Behind the Scenes', engagement: 1340, platform: 'Instagram' }
//           ].map((content, index) => (
//             <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//               <div>
//                 <h4 className="font-medium text-gray-900">{content.title}</h4>
//                 <p className="text-sm text-gray-600">{content.platform}</p>
//               </div>
//               <div className="text-right">
//                 <div className="text-lg font-bold text-gray-900">{content.engagement}</div>
//                 <div className="text-sm text-gray-600">engagements</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     )
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

export function Social({ socialMediaData }) {
  return (
    <div className="space-y-6">
      {/* Social Media Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {socialMediaData.map((platform, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <h4 className="text-base font-medium text-gray-900 mb-2">{platform.platform}</h4>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {platform.posts} posts
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <Heart className="w-4 h-4 mr-1" /> Likes
                </span>
                <span>{platform.likes}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" /> Comments
                </span>
                <span>{platform.comments}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <Bookmark className="w-4 h-4 mr-1" /> Saves
                </span>
                <span>{platform.saves}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Engagement Chart */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
          Engagement Trend
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="likes" stroke="#E91E63" strokeWidth={2} />
            <Line type="monotone" dataKey="comments" stroke="#2196F3" strokeWidth={2} />
            <Line type="monotone" dataKey="saves" stroke="#4CAF50" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top Performing Content */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
          Top Performing Content
        </h3>
        <div className="space-y-4">
          {[
            { title: "Product Demo Video", engagement: 2450, platform: "Instagram" },
            { title: "Customer Success Story", engagement: 1890, platform: "LinkedIn" },
            { title: "Industry Insights Post", engagement: 1560, platform: "Twitter" },
            { title: "Behind the Scenes", engagement: 1340, platform: "Instagram" },
          ].map((content, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="mb-2 sm:mb-0">
                <h4 className="font-medium text-gray-900">{content.title}</h4>
                <p className="text-sm text-gray-600">{content.platform}</p>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-lg font-bold text-gray-900">{content.engagement}</div>
                <div className="text-sm text-gray-600">engagements</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
