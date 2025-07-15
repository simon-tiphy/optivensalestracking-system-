export const overviewSampleData = {
  revenue: {
    today: 12000,
    week: 85000,
    month: 320000,
  },
  leadsCaptured: {
    today: 35,
    weeklyTrend: [20, 25, 30, 28, 35, 40, 38], // Example: last 7 days
  },
  hotLeads: 12,
  conversionRate: 18.5, // %
  avgTimeToClose: 7.2, // days
  campaignROI: [
    { campaign: 'Summer Sale', roi: 120 },
    { campaign: 'Referral', roi: 95 },
    { campaign: 'Social Media', roi: 80 },
    { campaign: 'Website', roi: 110 },
  ],
  pendingFollowUps: [
    { lead: 'John Doe', due: '2025-07-16' },
    { lead: 'Jane Smith', due: '2025-07-17' },
    { lead: 'Acme Corp', due: '2025-07-18' },
  ],
};
