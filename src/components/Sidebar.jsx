import React, { useState } from "react";
import { Menu } from "lucide-react";
import {
  BarChart2,
  Users,
  PieChart,
  UserCheck,
  MessageCircle,
  Heart,
  Lightbulb,
} from "lucide-react";

const ICONS = {
  Overview: <BarChart2 />,
  "Leads & Conversions": <PieChart />,
  "Campaign Insights": <Users />,
  "Agent Performance": <UserCheck />,
  "WhatsApp Activity": <MessageCircle />,
  "Social Media Summary": <Heart />,
  Recommendations: <Lightbulb />,
};

function Sidebar({ navTabs, activeTab, setActiveTab }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        sticky top-0            /* keep it at the top */
        h-screen               /* full viewport height */
        flex flex-col
        bg-[var(--color-background)]
        border-r border-[var(--color-accent)]
        transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}
      `}
      onMouseEnter={() => collapsed && setCollapsed(false)}
      onMouseLeave={() => !collapsed && setCollapsed(true)}
    >
      {/* Hamburger toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`
          absolute top-4 right-4 p-1 rounded
          hover:bg-[var(--color-accent)]
          ${collapsed ? "" : "rotate-180"}
          transition-transform duration-200
        `}
      >
        <Menu size={20} />
      </button>

      {/* Tabs */}
      <ul className="mt-16 space-y-2">
        {navTabs.map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <li key={tab.name} className="overflow-hidden">
              <button
                onClick={() => {
                  setActiveTab(tab.name);
                  setCollapsed(true);
                }}
                className={`
                  flex items-center space-x-3
                  w-full px-3 py-2 rounded
                  ${isActive
                    ? "bg-[var(--color-secondary)] text-white font-bold"
                    : "text-[var(--color-text)]"}
                  hover:bg-[var(--color-secondary)] hover:text-white
                  transition
                `}
              >
                <span className="flex-shrink-0">{ICONS[tab.name]}</span>
                {!collapsed && <span className="whitespace-nowrap">{tab.name}</span>}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
