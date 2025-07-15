import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import LeadsConversions from "./pages/LeadsConversions";
import CampaignInsights from "./pages/CampaignInsights";
import AgentPerformance from "./pages/AgentPerformance";
import WhatsAppActivity from "./pages/WhatsAppActivity";
import SocialMediaSummary from "./pages/SocialMediaSummary";
import Recommendations from "./pages/Recommendations";

const NAV_TABS = [
  { name: "Overview", path: "/" },
  { name: "Leads & Conversions", path: "/leads-conversions" },
  { name: "Campaign Insights", path: "/campaign-insights" },
  { name: "Agent Performance", path: "/agent-performance" },
  { name: "WhatsApp Activity", path: "/whatsapp-activity" },
  { name: "Social Media Summary", path: "/social-media-summary" },
  { name: "Recommendations", path: "/recommendations" },
];

function AppLayout() {
  const [activeTab, setActiveTab] = React.useState("Overview");
  const navigate = useNavigate();

  const handleTabClick = (tabName) => {
    const tab = NAV_TABS.find((t) => t.name === tabName);
    if (tab) {
      setActiveTab(tab.name);
      navigate(tab.path);
    }
  };

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
            <Route path="/" element={<Overview />} />
            <Route path="/leads-conversions" element={<LeadsConversions />} />
            <Route path="/campaign-insights" element={<CampaignInsights />} />
            <Route path="/agent-performance" element={<AgentPerformance />} />
            <Route path="/whatsapp-activity" element={<WhatsAppActivity />} />
            <Route path="/social-media-summary" element={<SocialMediaSummary />} />
            <Route path="/recommendations" element={<Recommendations />} />
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
