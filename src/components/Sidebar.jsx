// import React, { useState } from "react";
// import { Menu } from "lucide-react";
// import {
//   BarChart2,
//   Users,
//   PieChart,
//   UserCheck,
//   MessageCircle,
//   Heart,
//   Lightbulb,
// } from "lucide-react";

// const ICONS = {
//   Overview: <BarChart2 />,
//   "Leads & Conversions": <PieChart />,
//   "Campaign Insights": <Users />,
//   "Agent Performance": <UserCheck />,
//   "WhatsApp Activity": <MessageCircle />,
//   "Social Media Summary": <Heart />,
//   Recommendations: <Lightbulb />,
// };

// function Sidebar({ navTabs, activeTab, setActiveTab }) {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <aside
//       className={`
//         sticky top-0
//         h-screen
//         flex flex-col
//         bg-gray-800
//         border-r border-gray-700
//         transition-all duration-300
//         ${collapsed ? "w-16" : "w-64"}
//       `}
//       onMouseEnter={() => collapsed && setCollapsed(false)}
//       onMouseLeave={() => !collapsed && setCollapsed(true)}
//     >
//       {/* Hamburger toggle */}
//       <button
//         onClick={() => setCollapsed(!collapsed)}
//         className={`
//           absolute top-4 right-4 p-1 rounded
//           hover:bg-gray-700
//           ${collapsed ? "" : "rotate-180"}
//           transition-transform duration-200
//         `}
//       >
//         <Menu size={20} className="text-gray-200" />
//       </button>

//       {/* Tabs */}
//       <ul className="mt-16 space-y-2">
//         {navTabs.map((tab) => {
//           const isActive = activeTab === tab.name;
//           return (
//             <li key={tab.name} className="overflow-hidden">
//               <button
//                 onClick={() => {
//                   setActiveTab(tab.name);
//                   setCollapsed(true);
//                 }}
//                 className={`
//                   flex items-center space-x-3
//                   w-full px-3 py-2 rounded
//                   ${isActive
//                     ? "bg-green-600 text-white font-bold"
//                     : "text-gray-300"}
//                   hover:bg-green-500 hover:text-white
//                   transition
//                 `}
//               >
//                 <span className="flex-shrink-0">{ICONS[tab.name]}</span>
//                 {!collapsed && <span className="whitespace-nowrap">{tab.name}</span>}
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar;

import React, { useState } from "react"
import { Menu, LogOut } from "lucide-react"
import {
  BarChart2,
  Users,
  PieChart,
  UserCheck,
  MessageCircle,
  Heart,
  Lightbulb,
} from "lucide-react"

const ICONS = {
  Overview: <BarChart2 />,
  "Leads & Conversions": <PieChart />,
  "Campaign Insights": <Users />,
  "Agent Performance": <UserCheck />,
  "WhatsApp Activity": <MessageCircle />,
  "Social Media Summary": <Heart />,
  Recommendations: <Lightbulb />,
}

function Sidebar({ navTabs, activeTab, setActiveTab, userName = "Tiphy" }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`
        sticky top-0 h-screen flex flex-col justify-between
        bg-gray-800 border-r border-gray-700
        transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}
      `}
      onMouseEnter={() => collapsed && setCollapsed(false)}
      onMouseLeave={() => !collapsed && setCollapsed(true)}
    >
      {/* Header: Welcome + Toggle */}
      <div className="flex items-center justify-between px-4 pt-6">
        <div className="flex items-center space-x-3">
          <div
            className={`
              bg-green-500 flex-shrink-0 rounded-full
              ${collapsed ? "w-8 h-8" : "w-10 h-10"}
              flex items-center justify-center text-white font-bold
            `}
          >
            {userName.charAt(0)}
          </div>
          {!collapsed && (
            <div className="text-gray-100">
              <p className="text-sm">Welcome,</p>
              <p className="font-semibold">{userName}</p>
            </div>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-gray-700 text-gray-200 transition-transform duration-200"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Navigation Tabs */}
      <ul className="mt-8 space-y-2 px-2 flex-1">
        {navTabs.map((tab) => {
          const isActive = activeTab === tab.name
          return (
            <li key={tab.name}>
              <button
                onClick={() => {
                  setActiveTab(tab.name)
                  setCollapsed(true)
                }}
                className={`
                  flex items-center space-x-3 w-full
                  px-3 py-2 rounded-lg
                  transition-colors duration-200
                  ${
                    isActive
                      ? "bg-green-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }
                `}
              >
                <span className="flex-shrink-0">{ICONS[tab.name]}</span>
                {!collapsed && <span className="whitespace-nowrap">{tab.name}</span>}
              </button>
            </li>
          )
        })}
      </ul>

      {/* Logout Button */}
      <div className="px-4 pb-6">
        <button
          onClick={() => {
            /* your logout logic */
          }}
          className={`
            flex items-center space-x-3 w-full
            px-3 py-2 rounded-lg
            text-gray-300 hover:bg-red-600 hover:text-white
            transition-colors duration-200
          `}
        >
          <LogOut />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
