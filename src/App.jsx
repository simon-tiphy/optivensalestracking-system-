import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {Overview} from "./components/Overview/Overview";
import {Lead} from "./components/Leads/Lead";
import {Campaign} from "./components/Campaigns/Campaign";
import {Agent} from "./components/Agents/Agent";
import {WhatsApp} from "./components/Whatsapp/Whatsapp";
import {Social} from "./components/Socials/Social";
import {Insight} from "./components/Insights/Insight";
import {processLeadScoreData,processLeadSourceData,getLeadSummaryStats} from "./DataAnalysis/index"

 const baseUrl= 'https://optivenbackend.onrender.com/docs/optiven'
const NAV_TABS = [
  { name: "Overview", path: "/" },
  { name: "Leads & Conversions", path: "/leads-conversions" },
  { name: "Campaign Insights", path: "/campaign-insights" },
  { name: "Agent Performance", path: "/agent-performance" },
  { name: "WhatsApp Activity", path: "/whatsapp-activity" },
  { name: "Social Media Summary", path: "/social-media-summary" },
  { name: "Recommendations", path: "/recommendations" },
];

  const revenueData = [
  { name: 'Mon', revenue: 12000 },
  { name: 'Tue', revenue: 15000 },
  { name: 'Wed', revenue: 18000 },
  { name: 'Thu', revenue: 22000 },
  { name: 'Fri', revenue: 25000 },
  { name: 'Sat', revenue: 28000 },
  { name: 'Sun', revenue: 32000 }
];

let leadSourceData = [];

const conversionFunnelData = [
  { stage: 'Captured', count: 1000, color: '#3B82F6' },
  { stage: 'Engaged', count: 750, color: '#8B5CF6' },
  { stage: 'Site Visit', count: 500, color: '#10B981' },
  { stage: 'Proposal Sent', count: 250, color: '#F59E0B' },
  { stage: 'Closed', count: 100, color: '#EF4444' }
];

const campaignData = [
  { name: 'Summer Sale', impressions: 45000, clicks: 2250, ctr: 5.0, costPerLead: 25, roi: 340 },
  { name: 'Product Launch', impressions: 32000, clicks: 1600, ctr: 5.0, costPerLead: 30, roi: 280 },
  { name: 'Holiday Special', impressions: 28000, clicks: 1400, ctr: 5.0, costPerLead: 35, roi: 220 },
  { name: 'Back to School', impressions: 25000, clicks: 1000, ctr: 4.0, costPerLead: 40, roi: 180 }
];

const agentData = [
  { name: 'Sarah Johnson', leads: 85, deals: 24, responseTime: '2.5 min', avatar: 'SJ' },
  { name: 'Mike Chen', leads: 72, deals: 19, responseTime: '3.1 min', avatar: 'MC' },
  { name: 'Emily Davis', leads: 68, deals: 17, responseTime: '2.8 min', avatar: 'ED' },
  { name: 'Alex Rodriguez', leads: 61, deals: 15, responseTime: '3.5 min', avatar: 'AR' }
];

const socialMediaData = [
  { platform: 'Instagram', posts: 12, likes: 2400, comments: 180, saves: 95 },
  { platform: 'LinkedIn', posts: 8, likes: 1800, comments: 220, saves: 120 },
  { platform: 'Twitter', posts: 15, likes: 1200, comments: 95, saves: 45 },
  { platform: 'Facebook', posts: 6, likes: 800, comments: 60, saves: 30 }
];




function AppLayout() {
  const [activeTab, setActiveTab] = React.useState("Overview");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleTabClick = (tabName) => {
    const tab = NAV_TABS.find((t) => t.name === tabName);
    if (tab) {
      setActiveTab(tab.name);
      navigate(tab.path);
    }
  };

  async function fetchData(){
    setIsLoading(true);
    try {
      
      const response= await fetch(baseUrl,{
        headers:{
           'Content-Type': 'application/json',
        }
      })

      if(!response.ok){
        //error
        console.log("error");
        
      }

      const result= await response.json()
      setData(result['Sheet1'])
      console.log(result['Sheet1']);

      leadSourceData= processLeadSourceData(result['Sheet1'])

      
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-current mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
      <Navbar />
      <div className="flex">
        <Sidebar
          navTabs={NAV_TABS}
          activeTab={activeTab}
          setActiveTab={handleTabClick}
        />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Overview  revenueData={revenueData}/>} />
            <Route path="/leads-conversions" element={<Lead conversionFunnelData={conversionFunnelData} leadSourceData={leadSourceData} />} />
            <Route path="/campaign-insights" element={<Campaign campaignData={campaignData} />} />
            <Route path="/agent-performance" element={<Agent agentData={agentData} />} />
            <Route path="/whatsapp-activity" element={<WhatsApp  />} />
            <Route path="/social-media-summary" element={<Social socialMediaData={socialMediaData}/>} />
            <Route path="/recommendations" element={<Insight />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;