import React, { createContext, useState } from 'react';
import { socialMediaSummarySampleData } from '../data/socialMediaSummarySampleData';

export const SocialMediaSummaryContext = createContext();

export function SocialMediaSummaryProvider({ children }) {
  const [postingActivity, setPostingActivity] = useState(socialMediaSummarySampleData.postingActivity);
  const [engagement, setEngagement] = useState(socialMediaSummarySampleData.engagement);
  const [listeningOutput, setListeningOutput] = useState(socialMediaSummarySampleData.listeningOutput);
  const [topOrganicPosts, setTopOrganicPosts] = useState(socialMediaSummarySampleData.topOrganicPosts);
  const [contentRecommendations, setContentRecommendations] = useState(socialMediaSummarySampleData.contentRecommendations);

  return (
    <SocialMediaSummaryContext.Provider value={{
      postingActivity,
      setPostingActivity,
      engagement,
      setEngagement,
      listeningOutput,
      setListeningOutput,
      topOrganicPosts,
      setTopOrganicPosts,
      contentRecommendations,
      setContentRecommendations,
    }}>
      {children}
    </SocialMediaSummaryContext.Provider>
  );
}
