import React, { createContext, useState } from 'react';
import { whatsappActivitySampleData } from '../data/whatsappActivitySampleData';

export const WhatsAppActivityContext = createContext();

export function WhatsAppActivityProvider({ children }) {
  const [responseTime, setResponseTime] = useState(whatsappActivitySampleData.responseTime);
  const [followUpActivity, setFollowUpActivity] = useState(whatsappActivitySampleData.followUpActivity);
  const [autoManual, setAutoManual] = useState(whatsappActivitySampleData.autoManual);
  const [conversations, setConversations] = useState(whatsappActivitySampleData.conversations);
  const [aiReplies, setAiReplies] = useState(whatsappActivitySampleData.aiReplies);
  const [leadLogs, setLeadLogs] = useState(whatsappActivitySampleData.leadLogs);

  return (
    <WhatsAppActivityContext.Provider value={{
      responseTime,
      setResponseTime,
      followUpActivity,
      setFollowUpActivity,
      autoManual,
      setAutoManual,
      conversations,
      setConversations,
      aiReplies,
      setAiReplies,
      leadLogs,
      setLeadLogs,
    }}>
      {children}
    </WhatsAppActivityContext.Provider>
  );
}
