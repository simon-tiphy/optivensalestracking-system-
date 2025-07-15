export const whatsappActivitySampleData = {
  responseTime: 2.5, // minutes
  followUpActivity: [
    { date: '2025-07-10', auto: 8, manual: 5 },
    { date: '2025-07-11', auto: 7, manual: 6 },
    { date: '2025-07-12', auto: 9, manual: 4 },
    { date: '2025-07-13', auto: 6, manual: 7 },
    { date: '2025-07-14', auto: 10, manual: 3 },
  ],
  autoManual: { auto: 40, manual: 25 },
  conversations: { open: 12, closed: 33 },
  aiReplies: [
    { reply: 'Thank you for reaching out! How can I assist you today?', date: '2025-07-14' },
    { reply: 'Your request has been received. We will get back to you soon.', date: '2025-07-13' },
  ],
  leadLogs: [
    { lead: 'John Doe', status: 'Open', details: 'Waiting for response', date: '2025-07-14' },
    { lead: 'Jane Smith', status: 'Closed', details: 'Deal closed', date: '2025-07-13' },
    { lead: 'Acme Corp', status: 'Open', details: 'Proposal sent', date: '2025-07-12' },
  ],
};
