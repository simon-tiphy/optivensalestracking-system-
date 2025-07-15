export const leadsConversionsSampleData = {
  leadSources: [
    { source: 'WhatsApp', value: 40 },
    { source: 'Social', value: 25 },
    { source: 'Website', value: 20 },
    { source: 'Referral', value: 15 },
  ],
  funnelProgression: [
    { stage: 'Captured', value: 100 },
    { stage: 'Engaged', value: 80 },
    { stage: 'Site Visit', value: 60 },
    { stage: 'Proposal Sent', value: 40 },
    { stage: 'Closed', value: 30 },
  ],
  timeToConversion: [
    { day: 'Mon', value: 7 },
    { day: 'Tue', value: 6 },
    { day: 'Wed', value: 8 },
    { day: 'Thu', value: 5 },
    { day: 'Fri', value: 7 },
    { day: 'Sat', value: 6 },
    { day: 'Sun', value: 9 },
  ],
  dropOffTriggers: [
    { stage: 'Engaged', reason: 'No Response', count: 10 },
    { stage: 'Site Visit', reason: 'Not Interested', count: 8 },
    { stage: 'Proposal Sent', reason: 'Budget Issue', count: 5 },
  ],
  leadsByRegion: [
    { region: 'Nairobi', value: 50 },
    { region: 'Mombasa', value: 20 },
    { region: 'Kisumu', value: 15 },
    { region: 'Eldoret', value: 10 },
    { region: 'Other', value: 5 },
  ],
};
