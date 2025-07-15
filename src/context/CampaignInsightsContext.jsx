import React, { createContext, useState } from 'react';
import { campaignInsightsSampleData } from '../data/campaignInsightsSampleData';

export const CampaignInsightsContext = createContext();

export function CampaignInsightsProvider({ children }) {
  const [costPerLead, setCostPerLead] = useState(campaignInsightsSampleData.costPerLead);
  const [campaignPerformance, setCampaignPerformance] = useState(campaignInsightsSampleData.campaignPerformance);
  const [audienceProfile, setAudienceProfile] = useState(campaignInsightsSampleData.audienceProfile);
  const [topContent, setTopContent] = useState(campaignInsightsSampleData.topContent);
  const [lowContent, setLowContent] = useState(campaignInsightsSampleData.lowContent);
  const [viralityIndex, setViralityIndex] = useState(campaignInsightsSampleData.viralityIndex);

  return (
    <CampaignInsightsContext.Provider value={{
      costPerLead,
      setCostPerLead,
      campaignPerformance,
      setCampaignPerformance,
      audienceProfile,
      setAudienceProfile,
      topContent,
      setTopContent,
      lowContent,
      setLowContent,
      viralityIndex,
      setViralityIndex,
    }}>
      {children}
    </CampaignInsightsContext.Provider>
  );
}
