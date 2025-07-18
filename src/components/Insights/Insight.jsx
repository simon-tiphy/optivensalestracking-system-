import {CheckCircle,AlertTriangle,Download} from "lucide-react"
import {} from "recharts"
export function Insight(){
    return (
         <div className="space-y-6">
      {/* Performance Summary */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Performance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Revenue increased by 12.5% this week</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Conversion rate improved to 24.8%</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Average response time decreased</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">Social media engagement dropped 5%</span>
            </div>
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">Campaign costs increased by 8%</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Recommendations</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Content to Post More</h4>
            <div className="space-y-2">
              <div className="p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-800">Product demonstration videos show 45% higher engagement</span>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-800">Customer testimonials generate 32% more leads</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Audiences to Target</h4>
            <div className="space-y-2">
              <div className="p-3 bg-green-50 rounded-lg">
                <span className="text-green-800">Tech professionals aged 25-34 show highest conversion rates</span>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <span className="text-green-800">LinkedIn campaigns perform 23% better than Facebook</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Drop-off Triggers Detected</h4>
            <div className="space-y-2">
              <div className="p-3 bg-red-50 rounded-lg">
                <span className="text-red-800">60% of leads drop off after pricing discussion</span>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <span className="text-red-800">Response delays over 4 hours reduce conversion by 40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    )
}

