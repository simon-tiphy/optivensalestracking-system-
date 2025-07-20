export function processLeadSourceData(rawData) {
  if (!rawData || rawData.length === 0) {
    return [];
  }

  // Count leads by source
  const sourceCounts = {
    WhatsApp: 0,
    LinkedIn: 0,
    Instagram: 0,
    Facebook: 0,
    Other: 0 // For leads with no social media presence
  };

  rawData.forEach(lead => {
    let hasSource = false;
    
    // Check each social platform
    if (lead.WhatsApp === "Yes") {
      sourceCounts.WhatsApp++;
      hasSource = true;
    }
    if (lead.LinkedIn === "Yes") {
      sourceCounts.LinkedIn++;
      hasSource = true;
    }
    if (lead.Instagram === "Yes") {
      sourceCounts.Instagram++;
      hasSource = true;
    }
    if (lead.Facebook === "Yes") {
      sourceCounts.Facebook++;
      hasSource = true;
    }
    
    // If no social media source is marked, count as Other
    if (!hasSource) {
      sourceCounts.Other++;
    }
  });

  const totalLeads = rawData.length;

  
  
  // Convert counts to percentages and create the chart data
  const leadSourceData = [
    {
      name: 'WhatsApp',
      value: Math.round((sourceCounts.WhatsApp / totalLeads) * 100),
      count: sourceCounts.WhatsApp,
      color: '#25D366'
    },
    {
      name: 'LinkedIn',
      value: Math.round((sourceCounts.LinkedIn / totalLeads) * 100),
      count: sourceCounts.LinkedIn,
      color: '#0077B5'
    },
    {
      name: 'Instagram',
      value: Math.round((sourceCounts.Instagram / totalLeads) * 100),
      count: sourceCounts.Instagram,
      color: '#E4405F'
    },
    {
      name: 'Facebook',
      value: Math.round((sourceCounts.Facebook / totalLeads) * 100),
      count: sourceCounts.Facebook,
      color: '#1877F2'
    }
  ].filter(source => source.count > 0); // Only include sources with leads


  console.log(leadSourceData);
  
  return leadSourceData;
}


// Function to process lead score distribution
export function processLeadScoreData(rawData) {
  if (!rawData || rawData.length === 0) {
    return [];
  }

  const scoreCounts = {
    Hot: 0,
    Warm: 0,
    Cold: 0
  };

  rawData.forEach(lead => {
    const score = lead["Lead Score"];
    if (scoreCounts.hasOwnProperty(score)) {
      scoreCounts[score]++;
    }
  });

  const totalLeads = rawData.length;

  const leadScoreData = [
    {
      name: 'Hot',
      value: Math.round((scoreCounts.Hot / totalLeads) * 100),
      count: scoreCounts.Hot,
      color: '#E74C3C'
    },
    {
      name: 'Warm',
      value: Math.round((scoreCounts.Warm / totalLeads) * 100),
      count: scoreCounts.Warm,
      color: '#F39C12'
    },
    {
      name: 'Cold',
      value: Math.round((scoreCounts.Cold / totalLeads) * 100),
      count: scoreCounts.Cold,
      color: '#3498DB'
    }
  ].filter(score => score.count > 0);

  return leadScoreData;
}


export function getLeadSummaryStats(rawData) {
  if (!rawData || rawData.length === 0) {
    return {
      totalLeads: 0,
      hotLeads: 0,
      warmLeads: 0,
      coldLeads: 0,
      mostActiveChannel: 'N/A'
    };
  }

  const leadScores = rawData.reduce((acc, lead) => {
    const score = lead["Lead Score"];
    acc[score] = (acc[score] || 0) + 1;
    return acc;
  }, {});

  // Find most active channel
  const channelCounts = {
    WhatsApp: rawData.filter(lead => lead.WhatsApp === "Yes").length,
    LinkedIn: rawData.filter(lead => lead.LinkedIn === "Yes").length,
    Instagram: rawData.filter(lead => lead.Instagram === "Yes").length,
    Facebook: rawData.filter(lead => lead.Facebook === "Yes").length
  };

  const mostActiveChannel = Object.entries(channelCounts)
    .reduce((a, b) => channelCounts[a[0]] > channelCounts[b[0]] ? a : b)[0];

  return {
    totalLeads: rawData.length,
    hotLeads: leadScores.Hot || 0,
    warmLeads: leadScores.Warm || 0,
    coldLeads: leadScores.Cold || 0,
    mostActiveChannel
  };
}

