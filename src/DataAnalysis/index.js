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

export function transformLeadData(inputData) {
    // Helper function to generate random time ago
    function getRandomTimeAgo() {
        const times = ["1 min ago", "2 min ago", "5 min ago", "8 min ago", "10 min ago", "15 min ago", "20 min ago", "30 min ago", "1 hour ago"];
        return times[Math.floor(Math.random() * times.length)];
    }

    // Helper function to determine status based on lead score and conversation summary
    function determineStatus(leadScore, conversationSummary) {
        const summary = conversationSummary.toLowerCase();
        const score = leadScore.toLowerCase();
        
        if (summary.includes('thank') || summary.includes('received') || summary.includes('got it')) {
            return 'closed';
        } else if (score === 'hot' || summary.includes('interested') || summary.includes('demo')) {
            return 'active';
        } else if (summary.includes('question') || summary.includes('when') || summary.includes('how') || summary.includes('pricing')) {
            return 'pending';
        } else {
            return 'responded';
        }
    }

    // Helper function to generate appropriate message based on conversation summary
    function generateMessage(conversationSummary, leadScore) {
        const summary = conversationSummary.toLowerCase();
        
        if (summary.includes('demo')) {
            return 'Interested in your product demo';
        } else if (summary.includes('pricing') || summary.includes('price')) {
            return 'Can you send me the pricing?';
        } else if (summary.includes('webinar') || summary.includes('event')) {
            return 'When is the next webinar?';
        } else if (summary.includes('information') || summary.includes('details')) {
            return 'Thank you for the information';
        } else if (summary.includes('call') || summary.includes('meeting')) {
            return 'Would like to schedule a call';
        } else if (summary.includes('question')) {
            return 'I have some questions about your service';
        } else {
            // Default messages based on lead score
            const hotMessages = [
                'Very interested in learning more',
                'Ready to move forward',
                'Would like to discuss next steps'
            ];
            const warmMessages = [
                'Looking for more information',
                'Considering your solution',
                'Need some additional details'
            ];
            const coldMessages = [
                'Just browsing for now',
                'Will get back to you later',
                'Still evaluating options'
            ];
            
            const score = leadScore.toLowerCase();
            if (score === 'hot') {
                return hotMessages[Math.floor(Math.random() * hotMessages.length)];
            } else if (score === 'warm') {
                return warmMessages[Math.floor(Math.random() * warmMessages.length)];
            } else {
                return coldMessages[Math.floor(Math.random() * coldMessages.length)];
            }
        }
    }

    return inputData.map(lead => ({
        contact: lead.Name,
        message: generateMessage(lead["Conversation Summary"], lead["Lead Score"]),
        time: getRandomTimeAgo(),
        status: determineStatus(lead["Lead Score"], lead["Conversation Summary"])
    }));
}


export function getDealsData(leads) {
    // Initialize counters
    const dealsData = {
        hot: 0,
        warm: 0,
        cold: 0
    };

    // Count deals by lead score
    leads.forEach(lead => {
        const leadScore = lead.LeadScore || lead.leadScore || lead["Lead Score"] || '';
        const normalizedScore = leadScore.toLowerCase().trim();
        
        switch (normalizedScore) {
            case 'hot':
                dealsData.hot++;
                break;
            case 'warm':
                dealsData.warm++;
                break;
            case 'cold':
                dealsData.cold++;
                break;
            default:
                // Handle any other scores or empty values
                // You can decide where to categorize these (e.g., as cold)
                dealsData.cold++;
                break;
        }
    });

    return dealsData;
}

export function getTopHotDeals(leads, limit = 30) {
    return leads
        .filter(lead => {
            const leadScore = lead.LeadScore || lead.leadScore || lead["Lead Score"] || '';
            return leadScore.toLowerCase().trim() === 'hot';
        })
        .slice(0, limit)
        .map(lead => ({
            name: lead.Name,
            email: lead.Email,
            phone: lead["Phone Number"] || lead.PhoneNumber || lead.phone,
            summary: lead["Conversation Summary"] || lead.ConversationSummary || lead.summary,
            leadScore: lead.LeadScore || lead.leadScore || lead["Lead Score"],
            linkedin: lead.LinkedIn,
            whatsapp: lead.WhatsApp,
            priority: 'high'
        }));
}

export function getTopColdDeals(leads, limit = 30) {
    return leads
        .filter(lead => {
            const leadScore = lead.LeadScore || lead.leadScore || lead["Lead Score"] || '';
            return leadScore.toLowerCase().trim() === 'cold';
        })
        .slice(0, limit)
        .map(lead => ({
            name: lead.Name,
            email: lead.Email,
            phone: lead["Phone Number"] || lead.PhoneNumber || lead.phone,
            summary: lead["Conversation Summary"] || lead.ConversationSummary || lead.summary,
            leadScore: lead.LeadScore || lead.leadScore || lead["Lead Score"],
            linkedin: lead.LinkedIn,
            whatsapp: lead.WhatsApp,
            priority: 'low'
        }));
    }
