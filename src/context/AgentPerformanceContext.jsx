import React, { createContext, useState } from 'react';
import { agentPerformanceSampleData } from '../data/agentPerformanceSampleData';

export const AgentPerformanceContext = createContext();

export function AgentPerformanceProvider({ children }) {
  const [leaderboard, setLeaderboard] = useState(agentPerformanceSampleData.leaderboard);
  const [responseSpeed, setResponseSpeed] = useState(agentPerformanceSampleData.responseSpeed);
  const [avgResponseTime, setAvgResponseTime] = useState(agentPerformanceSampleData.avgResponseTime);
  const [abandonedLeads, setAbandonedLeads] = useState(agentPerformanceSampleData.abandonedLeads);
  const [workload, setWorkload] = useState(agentPerformanceSampleData.workload);

  return (
    <AgentPerformanceContext.Provider value={{
      leaderboard,
      setLeaderboard,
      responseSpeed,
      setResponseSpeed,
      avgResponseTime,
      setAvgResponseTime,
      abandonedLeads,
      setAbandonedLeads,
      workload,
      setWorkload,
    }}>
      {children}
    </AgentPerformanceContext.Provider>
  );
}
