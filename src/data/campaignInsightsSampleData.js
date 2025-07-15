export const campaignInsightsSampleData = {
  costPerLead: [
    { campaign: 'Summer Sale', cost: 12 },
    { campaign: 'Referral', cost: 8 },
    { campaign: 'Social Media', cost: 10 },
    { campaign: 'Website', cost: 9 },
  ],
  campaignPerformance: [
    { name: 'Summer Sale', impressions: 12000, clicks: 800, ctr: 6.7, costPerLead: 12, roi: 120 },
    { name: 'Referral', impressions: 8000, clicks: 500, ctr: 6.3, costPerLead: 8, roi: 95 },
    { name: 'Social Media', impressions: 10000, clicks: 600, ctr: 6.0, costPerLead: 10, roi: 80 },
    { name: 'Website', impressions: 9000, clicks: 700, ctr: 7.8, costPerLead: 9, roi: 110 },
  ],
  audienceProfile: {
    age: [
      { range: '18-24', value: 20 },
      { range: '25-34', value: 40 },
      { range: '35-44', value: 25 },
      { range: '45+', value: 15 },
    ],
    gender: [
      { gender: 'Male', value: 55 },
      { gender: 'Female', value: 45 },
    ],
    location: [
      { location: 'Nairobi', value: 50 },
      { location: 'Mombasa', value: 20 },
      { location: 'Kisumu', value: 15 },
      { location: 'Other', value: 15 },
    ],
    device: [
      { device: 'Mobile', value: 70 },
      { device: 'Desktop', value: 30 },
    ],
  },
  topContent: [
    { title: 'How to Buy Land', views: 1200 },
    { title: 'Summer Promo', views: 950 },
    { title: 'Referral Success', views: 800 },
  ],
  lowContent: [
    { title: 'Old Promo', views: 200 },
    { title: 'Unpopular Post', views: 150 },
  ],
  viralityIndex: [
    { campaign: 'Summer Sale', score: 85 },
    { campaign: 'Referral', score: 70 },
    { campaign: 'Social Media', score: 60 },
    { campaign: 'Website', score: 75 },
  ],
};
