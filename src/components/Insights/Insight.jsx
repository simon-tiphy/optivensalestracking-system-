// import {CheckCircle,AlertTriangle,Download} from "lucide-react"
// import {} from "recharts"
// export function Insight(){
//     return (
//          <div className="space-y-6">
//       {/* Performance Summary */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Performance Summary</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <CheckCircle className="w-5 h-5 text-green-500" />
//               <span className="text-gray-700">Revenue increased by 12.5% this week</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <CheckCircle className="w-5 h-5 text-green-500" />
//               <span className="text-gray-700">Conversion rate improved to 24.8%</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <CheckCircle className="w-5 h-5 text-green-500" />
//               <span className="text-gray-700">Average response time decreased</span>
//             </div>
//           </div>
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <AlertTriangle className="w-5 h-5 text-yellow-500" />
//               <span className="text-gray-700">Social media engagement dropped 5%</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <AlertTriangle className="w-5 h-5 text-yellow-500" />
//               <span className="text-gray-700">Campaign costs increased by 8%</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* AI Recommendations */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Recommendations</h3>
//         <div className="space-y-6">
//           <div>
//             <h4 className="font-medium text-gray-900 mb-3">Content to Post More</h4>
//             <div className="space-y-2">
//               <div className="p-3 bg-blue-50 rounded-lg">
//                 <span className="text-blue-800">Product demonstration videos show 45% higher engagement</span>
//               </div>
//               <div className="p-3 bg-blue-50 rounded-lg">
//                 <span className="text-blue-800">Customer testimonials generate 32% more leads</span>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-medium text-gray-900 mb-3">Audiences to Target</h4>
//             <div className="space-y-2">
//               <div className="p-3 bg-green-50 rounded-lg">
//                 <span className="text-green-800">Tech professionals aged 25-34 show highest conversion rates</span>
//               </div>
//               <div className="p-3 bg-green-50 rounded-lg">
//                 <span className="text-green-800">LinkedIn campaigns perform 23% better than Facebook</span>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-medium text-gray-900 mb-3">Drop-off Triggers Detected</h4>
//             <div className="space-y-2">
//               <div className="p-3 bg-red-50 rounded-lg">
//                 <span className="text-red-800">60% of leads drop off after pricing discussion</span>
//               </div>
//               <div className="p-3 bg-red-50 rounded-lg">
//                 <span className="text-red-800">Response delays over 4 hours reduce conversion by 40%</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//     )
// }



import { CheckCircle, AlertTriangle, Download } from "lucide-react"
import { motion } from "framer-motion"

export function Insight() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  }

  return (
    <div className="bg-gray-900 min-h-screen p-8 space-y-8 text-gray-100">
      {/* Header with Download */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold">Weekly Insights</h2>
        <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-lg">
          <Download className="w-5 h-5 text-green-400" />
          <span className="text-sm font-medium text-green-400">Download Report</span>
        </button>
      </motion.div>

      {/* Performance Summary */}
      <motion.div
        className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h3 className="text-xl font-semibold mb-4">📈 Performance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { icon: CheckCircle, text: "Revenue increased by 12.5%" },
              { icon: CheckCircle, text: "Conversion rate improved to 24.8%" },
              { icon: CheckCircle, text: "Avg response time decreased by 15%" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center space-x-3"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <item.icon className="w-6 h-6 text-green-400" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
          <div className="space-y-4">
            {[
              { icon: AlertTriangle, text: "Social engagement dropped 5%" },
              { icon: AlertTriangle, text: "Campaign costs up by 8%" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center space-x-3"
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <item.icon className="w-6 h-6 text-yellow-400" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* AI Recommendations */}
      <motion.div
        className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 space-y-6"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h3 className="text-xl font-semibold mb-4">🤖 AI Recommendations</h3>

        {[
          {
            title: "Content to Post More",
            bg: "bg-blue-700",
            items: [
              "Product demos drive 45% more engagement",
              "Customer testimonials generate 32% more leads",
            ],
          },
          {
            title: "Audiences to Target",
            bg: "bg-green-700",
            items: [
              "Tech pros aged 25–34 have highest conversions",
              "LinkedIn campaigns outperform Facebook by 23%",
            ],
          },
          {
            title: "Drop‑off Triggers Detected",
            bg: "bg-red-700",
            items: [
              "60% of leads leave after pricing discussion",
              "Delays >4h reduce conversion by 40%",
            ],
          },
        ].map((section, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            <h4 className="font-medium text-gray-100">{section.title}</h4>
            <div className="space-y-2">
              {section.items.map((text, j) => (
                <div
                  key={j}
                  className={`${section.bg} bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition`}
                >
                  <span className="text-gray-100">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
