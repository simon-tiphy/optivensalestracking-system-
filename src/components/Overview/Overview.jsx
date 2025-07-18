
import {DollarSign,Users,Target,Clock} from "lucide-react"
import {ResponsiveContainer,AreaChart,Area, CartesianGrid,XAxis,YAxis,Tooltip} from "recharts"
import { MetricCard } from "../Metrics/MetricCard"
export function Overview({revenueData}){
    return (
         <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Total Revenue" 
          value="$152,000" 
          change="+12.5%" 
          changeType="increase"
          icon={DollarSign}
          color="green"
        />
        <MetricCard 
          title="Leads Captured" 
          value="1,247" 
          change="+8.2%" 
          changeType="increase"
          icon={Users}
          color="blue"
        />
        <MetricCard 
          title="Conversion Rate" 
          value="24.8%" 
          change="+2.1%" 
          changeType="increase"
          icon={Target}
          color="purple"
        />
        <MetricCard 
          title="Avg Time to Close" 
          value="12.5 days" 
          change="-1.2 days" 
          changeType="decrease"
          icon={Clock}
          color="orange"
        />
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
            <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Hot Leads & Pending Follow-ups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Hot Leads</h3>
          <div className="space-y-3">
            {['Acme Corp', 'Tech Solutions Inc', 'Global Dynamics', 'Innovation Hub'].map((lead, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="font-medium text-gray-900">{lead}</span>
                <span className="text-sm text-red-600 font-medium">High Priority</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Follow-ups</h3>
          <div className="space-y-3">
            {['Sarah Johnson: 3 leads', 'Mike Chen: 5 leads', 'Emily Davis: 2 leads', 'Alex Rodriguez: 4 leads'].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium text-gray-900">{item}</span>
                <Clock className="w-4 h-4 text-yellow-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
}

