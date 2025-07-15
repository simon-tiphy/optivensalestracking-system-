import{ResponsiveContainer,LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Line }from"recharts"
export function Agent({agentData}){
    return(
         <div className="space-y-6">
      {/* Agent Leaderboard */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Agent Leaderboard</h3>
        <div className="space-y-4">
          {agentData.map((agent, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {agent.avatar}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{agent.name}</h4>
                  <p className="text-sm text-gray-600">Response Time: {agent.responseTime}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">{agent.deals} deals</div>
                <div className="text-sm text-gray-600">{agent.leads} leads handled</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Response Time Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Response Time Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={[
            { name: 'Mon', time: 2.5 },
            { name: 'Tue', time: 3.1 },
            { name: 'Wed', time: 2.8 },
            { name: 'Thu', time: 3.5 },
            { name: 'Fri', time: 2.9 },
            { name: 'Sat', time: 3.2 },
            { name: 'Sun', time: 2.7 }
          ]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value} min`, 'Response Time']} />
            <Line type="monotone" dataKey="time" stroke="#8B5CF6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    )
}