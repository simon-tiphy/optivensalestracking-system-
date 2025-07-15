import React, { createContext, useState } from 'react';
import { overviewSampleData } from '../data/overviewSampleData';

export const OverviewContext = createContext();

export function OverviewProvider({ children }) {
  const [revenue, setRevenue] = useState(overviewSampleData.revenue);
  const [leadsCaptured, setLeadsCaptured] = useState(overviewSampleData.leadsCaptured);
  const [hotLeads, setHotLeads] = useState(overviewSampleData.hotLeads);
  const [conversionRate, setConversionRate] = useState(overviewSampleData.conversionRate);
  const [avgTimeToClose, setAvgTimeToClose] = useState(overviewSampleData.avgTimeToClose);
  const [campaignROI, setCampaignROI] = useState(overviewSampleData.campaignROI);
  const [pendingFollowUps, setPendingFollowUps] = useState(overviewSampleData.pendingFollowUps);

  return (
    <OverviewContext.Provider
      value={{
        revenue,
        setRevenue,
        leadsCaptured,
        setLeadsCaptured,
        hotLeads,
        setHotLeads,
        conversionRate,
        setConversionRate,
        avgTimeToClose,
        setAvgTimeToClose,
        campaignROI,
        setCampaignROI,
        pendingFollowUps,
        setPendingFollowUps,
      }}
    >
      {children}
    </OverviewContext.Provider>
  );
}
