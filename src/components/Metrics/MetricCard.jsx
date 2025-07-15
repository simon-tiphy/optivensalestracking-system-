
import {ArrowUp,ArrowDown, Minus} from "lucide-react"
export function MetricCard({ title, value, change, changeType, icon: Icon, color = "blue" }){
    return (
         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        {change && (
          <div className="flex items-center mt-2">
            {changeType === 'increase' ? (
              <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
            ) : changeType === 'decrease' ? (
              <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
            ) : (
              <Minus className="w-4 h-4 text-gray-500 mr-1" />
            )}
            <span className={`text-sm ${
              changeType === 'increase' ? 'text-green-600' : 
              changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'
            }`}>
              {change}
            </span>
          </div>
        )}
      </div>
      <div className={`p-3 rounded-full bg-${color}-100`}>
        <Icon className={`w-6 h-6 text-${color}-600`} />
      </div>
    </div>
  </div>
    )
}