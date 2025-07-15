import React, { createContext, useState } from 'react';
import { leadsConversionsSampleData } from '../data/leadsConversionsSampleData';

export const LeadsConversionsContext = createContext();

export function LeadsConversionsProvider({ children }) {
  const [leadSources, setLeadSources] = useState(leadsConversionsSampleData.leadSources);
  const [funnelProgression, setFunnelProgression] = useState(leadsConversionsSampleData.funnelProgression);
  const [timeToConversion, setTimeToConversion] = useState(leadsConversionsSampleData.timeToConversion);
  const [dropOffTriggers, setDropOffTriggers] = useState(leadsConversionsSampleData.dropOffTriggers);
  const [leadsByRegion, setLeadsByRegion] = useState(leadsConversionsSampleData.leadsByRegion);

  return (
    <LeadsConversionsContext.Provider value={{
      leadSources,
      setLeadSources,
      funnelProgression,
      setFunnelProgression,
      timeToConversion,
      setTimeToConversion,
      dropOffTriggers,
      setDropOffTriggers,
      leadsByRegion,
      setLeadsByRegion,
    }}>
      {children}
    </LeadsConversionsContext.Provider>
  );
}
