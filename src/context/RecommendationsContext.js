import React, { createContext, useState } from 'react';

export const RecommendationsContext = createContext();

import { recommendationsSampleData } from '../data/recommendationsSampleData';

export function RecommendationsProvider({ children }) {
  const [recommendations, setRecommendations] = useState(recommendationsSampleData);
  return (
    <RecommendationsContext.Provider value={{ recommendations, setRecommendations }}>
      {children}
    </RecommendationsContext.Provider>
  );
}
