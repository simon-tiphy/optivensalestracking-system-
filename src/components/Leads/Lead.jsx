import { LeadsRegion } from "../LeadRegion/LeadRegion";
import {LeadSource} from "../LeadSource/leadSource"
import {PieChart,ResponsiveContainer,Pie,Tooltip,LineChart,CartesianGrid,XAxis,YAxis,Cell,Line} from "recharts"

 const trendData = [
    { week: 'Week 1', WhatsApp: 110, Instagram: 85, LinkedIn: 72, Facebook: 58, Website: 45, Others: 60 },
    { week: 'Week 2', WhatsApp: 118, Instagram: 92, LinkedIn: 78, Facebook: 62, Website: 48, Others: 65 },
    { week: 'Week 3', WhatsApp: 125, Instagram: 88, LinkedIn: 85, Facebook: 59, Website: 52, Others: 58 },
    { week: 'Week 4', WhatsApp: 132, Instagram: 77, LinkedIn: 63, Facebook: 55, Website: 42, Others: 55 }
  ];

    const leadSourceData1 = [
    { name: 'WhatsApp Business', value: 485, color: '#25D366', growth: '+15%', conversionRate: 32 },
    { name: 'Instagram', value: 342, color: '#E4405F', growth: '+8%', conversionRate: 28 },
    { name: 'LinkedIn', value: 298, color: '#0077B5', growth: '+22%', conversionRate: 45 },
    { name: 'Facebook', value: 234, color: '#1877F2', growth: '+5%', conversionRate: 24 },
    { name: 'Website Forms', value: 187, color: '#FF6B6B', growth: '+12%', conversionRate: 38 },
    { name: 'Google Ads', value: 156, color: '#4285F4', growth: '+18%', conversionRate: 41 },
    { name: 'Email Marketing', value: 123, color: '#34A853', growth: '+7%', conversionRate: 29 },
    { name: 'Referrals', value: 98, color: '#4ECDC4', growth: '+25%', conversionRate: 52 },
    { name: 'YouTube', value: 76, color: '#FF0000', growth: '+35%', conversionRate: 19 },
    { name: 'TikTok', value: 54, color: '#000000', growth: '+68%', conversionRate: 16 },
    { name: 'Twitter', value: 43, color: '#1DA1F2', growth: '+3%', conversionRate: 22 },
    { name: 'Cold Calling', value: 32, color: '#FFA500', growth: '-5%', conversionRate: 15 }
  ];
export function Lead({conversionFunnelData,leadSourceData}){
    return(
          <div className="space-y-6">
            
      <LeadSource trendData={trendData} leadSourceData={leadSourceData1}/>
      {/* Lead Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Time to Conversion Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={[
            { name: 'Week 1', time: 15 },
            { name: 'Week 2', time: 13 },
            { name: 'Week 3', time: 12 },
            { name: 'Week 4', time: 11 },
            { name: 'Week 5', time: 10 },
            { name: 'Week 6', time: 12 },
            { name: 'Week 7', time: 9 }
          ]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value} days`, 'Avg Time']} />
            <Line type="monotone" dataKey="time" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Funnel</h3>
          <div className="space-y-4">
            {conversionFunnelData.map((stage, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                  <span className="text-sm font-bold text-gray-900">{stage.count}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${(stage.count / conversionFunnelData[0].count) * 100}%`,
                      backgroundColor: stage.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

          <LeadsRegion/>
    </div>
    )
}
