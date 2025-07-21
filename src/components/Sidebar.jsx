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


// import React, { useState } from "react"
// import { Menu, LogOut } from "lucide-react"
// import {
//   BarChart2,
//   Users,
//   PieChart,
//   UserCheck,
//   MessageCircle,
//   Heart,
//   Lightbulb,
// } from "lucide-react"

// const ICONS = {
//   Overview: <BarChart2 />,
//   "Leads & Conversions": <PieChart />,
//   "Campaign Insights": <Users />,
//   "Agent Performance": <UserCheck />,
//   "WhatsApp Activity": <MessageCircle />,
//   "Social Media Summary": <Heart />,
//   Recommendations: <Lightbulb />,
// }

// function Sidebar({ navTabs, activeTab, setActiveTab, userName = "User" }) {
//   const [collapsed, setCollapsed] = useState(true)
//   const [hovering, setHovering] = useState(false)

//   const expand = () => {
//     if (window.innerWidth > 768) {
//       setCollapsed(false)
//       setHovering(true)
//     }
//   }

//   const collapse = () => {
//     if (hovering) {
//       setCollapsed(true)
//       setHovering(false)
//     }
//   }

//   return (
//     <aside
//       className={`fixed md:sticky bottom-0 left-0 z-40 h-screen flex flex-col justify-between 
//       bg-gray-900 border-r border-gray-700 transition-all duration-300 ease-in-out
//       ${collapsed ? "w-16" : "w-64"}`}
//       onMouseEnter={expand}
//       onMouseLeave={collapse}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between px-4 pt-5">
//         <div className="flex items-center space-x-3 truncate">
//           <div
//             className={`flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center 
//             text-white font-bold ${collapsed ? "w-8 h-8 text-sm" : "w-10 h-10 text-lg"}`}
//           >
//             {userName.charAt(0).toUpperCase()}
//           </div>
//           {!collapsed && (
//             <div className="text-white leading-tight truncate">
//               <p className="text-xs text-gray-300">Welcome,</p>
//               <p className="font-semibold text-sm truncate">{userName}</p>
//             </div>
//           )}
//         </div>

//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="p-1 ml-2 rounded hover:bg-gray-700 text-gray-300 transition duration-150"
//         >
//           <Menu size={20} />
//         </button>
//       </div>

//       {/* Navigation Tabs */}
//       <ul className="mt-6 px-2 flex-1 overflow-y-auto space-y-2">
//         {navTabs.map((tab) => {
//           const isActive = activeTab === tab.name
//           return (
//             <li key={tab.name}>
//               <button
//                 onClick={() => {
//                   setActiveTab(tab.name)
//                   setCollapsed(true)
//                 }}
//                 className={`
//                   flex items-center w-full px-3 py-2 rounded-lg
//                   transition-colors duration-200 ease-in-out
//                   ${isActive
//                     ? "bg-green-600 text-white font-medium"
//                     : "text-gray-300 hover:bg-green-500 hover:text-white"}
//                 `}
//               >
//                 <span className="flex-shrink-0">{ICONS[tab.name]}</span>
//                 {!collapsed && (
//                   <span className="ml-3 whitespace-nowrap">{tab.name}</span>
//                 )}
//               </button>
//             </li>
//           )
//         })}
//       </ul>

//       {/* Logout */}
//       <div className="px-4 pb-5">
//         <button
//           onClick={() => {
//             // Logout logic
//           }}
//           className="w-full flex items-center space-x-3 px-3 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition"
//         >
//           <LogOut size={18} />
//           {!collapsed && <span className="whitespace-nowrap">Logout</span>}
//         </button>
//       </div>
//     </aside>
//   )
// }

// export default Sidebar

// import React, { useState } from "react"
// import { Menu, LogOut } from "lucide-react"
// import {
//   BarChart2,
//   Users,
//   PieChart,
//   UserCheck,
//   MessageCircle,
//   Heart,
//   Lightbulb,
// } from "lucide-react"

// const ICONS = {
//   Overview: <BarChart2 />,
//   "Leads & Conversions": <PieChart />,
//   "Campaign Insights": <Users />,
//   "Agent Performance": <UserCheck />,
//   "WhatsApp Activity": <MessageCircle />,
//   "Social Media Summary": <Heart />,
//   Recommendations: <Lightbulb />,
// }

// function Sidebar({ navTabs, activeTab, setActiveTab, userName = "User" }) {
//   const [collapsed, setCollapsed] = useState(true)
//   const [hovering, setHovering] = useState(false)

//   const expand = () => {
//     if (window.innerWidth > 768) {
//       setCollapsed(false)
//       setHovering(true)
//     }
//   }

//   const collapse = () => {
//     if (hovering) {
//       setCollapsed(true)
//       setHovering(false)
//     }
//   }

//   return (
//     <aside
//       className={`fixed top-0 left-0 z-40 h-screen flex flex-col justify-between
//         bg-gray-900 border-r border-gray-700 transition-all duration-300 ease-in-out
//         ${collapsed ? "w-16" : "w-64"}`}
//       onMouseEnter={expand}
//       onMouseLeave={collapse}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between px-4 pt-5">
//         <div className="flex items-center space-x-3 truncate">
//           <div
//             className={`flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center 
//               text-white font-bold ${collapsed ? "w-8 h-8 text-sm" : "w-10 h-10 text-lg"}`}
//           >
//             {userName.charAt(0).toUpperCase()}
//           </div>
//           {!collapsed && (
//             <div className="text-white leading-tight truncate">
//               <p className="text-xs text-gray-300">Welcome,</p>
//               <p className="font-semibold text-sm truncate">{userName}</p>
//             </div>
//           )}
//         </div>

//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="p-1 ml-2 rounded hover:bg-gray-700 text-gray-300 transition duration-150"
//         >
//           <Menu size={20} />
//         </button>
//       </div>

//       {/* Navigation */}
//       <ul className="mt-6 px-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
//         {navTabs.map((tab) => {
//           const isActive = activeTab === tab.name
//           return (
//             <li key={tab.name}>
//               <button
//                 onClick={() => {
//                   setActiveTab(tab.name)
//                   setCollapsed(true)
//                 }}
//                 className={`
//                   flex items-center w-full px-3 py-2 rounded-lg
//                   transition-colors duration-200 ease-in-out
//                   ${isActive
//                     ? "bg-green-600 text-white font-medium"
//                     : "text-gray-300 hover:bg-green-500 hover:text-white"}
//                 `}
//               >
//                 <span className="flex-shrink-0">{ICONS[tab.name]}</span>
//                 {!collapsed && (
//                   <span className="ml-3 whitespace-nowrap">{tab.name}</span>
//                 )}
//               </button>
//             </li>
//           )
//         })}
//       </ul>

//       {/* Logout */}
//       <div className="px-4 pb-5">
//         <button
//           onClick={() => {
//             // Logout logic
//           }}
//           className="w-full flex items-center space-x-3 px-3 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition"
//         >
//           <LogOut size={18} />
//           {!collapsed && <span className="whitespace-nowrap">Logout</span>}
//         </button>
//       </div>
//     </aside>
//   )
// }

// export default Sidebar


// import React, { useState } from "react"
// import { Menu, LogOut } from "lucide-react"
// import {
//   BarChart2,
//   Users,
//   PieChart,
//   UserCheck,
//   MessageCircle,
//   Heart,
//   Lightbulb,
// } from "lucide-react"

// const ICONS = {
//   Overview: <BarChart2 />,
//   "Leads & Conversions": <PieChart />,
//   "Campaign Insights": <Users />,
//   "Agent Performance": <UserCheck />,
//   "WhatsApp Activity": <MessageCircle />,
//   "Social Media Summary": <Heart />,
//   Recommendations: <Lightbulb />,
// }

// function Sidebar({ navTabs, activeTab, setActiveTab, userName = "User" }) {
//   const [collapsed, setCollapsed] = useState(true)
//   const [hovering, setHovering] = useState(false)

//   const expand = () => {
//     if (window.innerWidth > 768) {
//       setCollapsed(false)
//       setHovering(true)
//     }
//   }
//   const collapse = () => {
//     if (hovering) {
//       setCollapsed(true)
//       setHovering(false)
//     }
//   }

//   return (
//     <aside
//       className={`fixed top-0 left-0 z-40 h-screen flex flex-col
//         bg-gray-900 border-r border-gray-700 transition-all duration-300 ease-in-out
//         ${collapsed ? "w-16" : "w-64"}`}
//       onMouseEnter={expand}
//       onMouseLeave={collapse}
//     >
//       {/* Centered Header + Nav */}
//       <div className="flex flex-col flex-grow justify-center">
//         {/* Header */}
//         <div className="flex items-center justify-between px-4 mb-6">
//           <div className="flex items-center space-x-3 truncate">
//             <div
//               className={`flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center 
//                 text-white font-bold ${collapsed ? "w-8 h-8 text-sm" : "w-10 h-10 text-lg"}`}
//             >
//               {userName.charAt(0).toUpperCase()}
//             </div>
//             {!collapsed && (
//               <div className="text-white leading-tight truncate">
//                 <p className="text-xs text-gray-300">Welcome,</p>
//                 <p className="font-semibold text-sm truncate">{userName}</p>
//               </div>
//             )}
//           </div>

//           <button
//             onClick={() => setCollapsed(!collapsed)}
//             className="p-1 ml-2 rounded hover:bg-gray-700 text-gray-300 transition duration-150"
//           >
//             <Menu size={20} />
//           </button>
//         </div>

//         {/* Navigation */}
//         <ul className="px-2 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
//           {navTabs.map((tab) => {
//             const isActive = activeTab === tab.name
//             return (
//               <li key={tab.name}>
//                 <button
//                   onClick={() => {
//                     setActiveTab(tab.name)
//                     setCollapsed(true)
//                   }}
//                   className={`
//                     flex items-center w-full px-3 py-2 rounded-lg
//                     transition-colors duration-200 ease-in-out
//                     ${isActive
//                       ? "bg-green-600 text-white font-medium"
//                       : "text-gray-300 hover:bg-green-500 hover:text-white"}
//                   `}
//                 >
//                   <span className="flex-shrink-0">{ICONS[tab.name]}</span>
//                   {!collapsed && (
//                     <span className="ml-3 whitespace-nowrap">{tab.name}</span>
//                   )}
//                 </button>
//               </li>
//             )
//           })}
//         </ul>
//       </div>

//       {/* Logout stays at the bottom */}
//       <div className="px-4 pb-5">
//         <button
//           onClick={() => {
//             // Logout logic
//           }}
//           className="w-full flex items-center space-x-3 px-3 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition"
//         >
//           <LogOut size={18} />
//           {!collapsed && <span className="whitespace-nowrap">Logout</span>}
//         </button>
//       </div>
//     </aside>
//   )
// }

// export default Sidebar


// import React, { useState } from "react"
// import { Menu, LogOut } from "lucide-react"
// import {
//   BarChart2,
//   Users,
//   PieChart,
//   UserCheck,
//   MessageCircle,
//   Heart,
//   Lightbulb,
// } from "lucide-react"

// const ICONS = {
//   Overview: <BarChart2 />,
//   "Leads & Conversions": <PieChart />,
//   "Campaign Insights": <Users />,
//   "Agent Performance": <UserCheck />,
//   "WhatsApp Activity": <MessageCircle />,
//   "Social Media Summary": <Heart />,
//   Recommendations: <Lightbulb />,
// }

// function Sidebar({ navTabs, activeTab, setActiveTab, userName = "User" }) {
//   const [collapsed, setCollapsed] = useState(true)
//   const [hovering, setHovering] = useState(false)

//   const expand = () => {
//     if (window.innerWidth > 768) {
//       setCollapsed(false)
//       setHovering(true)
//     }
//   }
//   const collapse = () => {
//     if (hovering) {
//       setCollapsed(true)
//       setHovering(false)
//     }
//   }

//   return (
//     <aside
//       className={`fixed inset-y-0 left-0 z-40 flex flex-col
//         bg-gray-900 border-r border-gray-700 transition-all duration-300 ease-in-out
//         ${collapsed ? "w-16" : "w-64"}`}
//       onMouseEnter={expand}
//       onMouseLeave={collapse}
//     >
//       {/* Centered Header + Nav */}
//       <div className="flex flex-col flex-grow justify-center">
//         {/* Header */}
//         <div className="flex items-center justify-between px-4 mb-6">
//           <div className="flex items-center space-x-3 truncate">
//             <div
//               className={`flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center 
//                 text-white font-bold ${collapsed ? "w-8 h-8 text-sm" : "w-10 h-10 text-lg"}`}
//             >
//               {userName.charAt(0).toUpperCase()}
//             </div>
//             {!collapsed && (
//               <div className="text-white leading-tight truncate">
//                 <p className="text-xs text-gray-300">Welcome,</p>
//                 <p className="font-semibold text-sm truncate">{userName}</p>
//               </div>
//             )}
//           </div>

//           <button
//             onClick={() => setCollapsed(!collapsed)}
//             className="p-1 ml-2 rounded hover:bg-gray-700 text-gray-300 transition duration-150"
//           >
//             <Menu size={20} />
//           </button>
//         </div>

//         {/* Navigation */}
//         <ul className="px-2 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
//           {navTabs.map((tab) => {
//             const isActive = activeTab === tab.name
//             return (
//               <li key={tab.name}>
//                 <button
//                   onClick={() => {
//                     setActiveTab(tab.name)
//                     setCollapsed(true)
//                   }}
//                   className={`
//                     flex items-center w-full px-3 py-2 rounded-lg
//                     transition-colors duration-200 ease-in-out
//                     ${isActive
//                       ? "bg-green-600 text-white font-medium"
//                       : "text-gray-300 hover:bg-green-500 hover:text-white"}
//                   `}
//                 >
//                   <span className="flex-shrink-0">{ICONS[tab.name]}</span>
//                   {!collapsed && (
//                     <span className="ml-3 whitespace-nowrap">{tab.name}</span>
//                   )}
//                 </button>
//               </li>
//             )
//           })}
//         </ul>
//       </div>

//       {/* Logout stays at the bottom */}
//       <div className="px-4 pb-5">
//         <button
//           onClick={() => {
//             // Logout logic
//           }}
//           className="w-full flex items-center space-x-3 px-3 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition"
//         >
//           <LogOut size={18} />
//           {!collapsed && <span className="whitespace-nowrap">Logout</span>}
//         </button>
//       </div>
//     </aside>
//   )
// }

// export default Sidebar


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

function Sidebar({ navTabs, activeTab, setActiveTab, userName = "User" }) {
  const [collapsed, setCollapsed] = useState(true)
  const [hovering, setHovering] = useState(false)

  const expand = () => {
    if (window.innerWidth > 768) {
      setCollapsed(false)
      setHovering(true)
    }
  }
  const collapse = () => {
    if (hovering) {
      setCollapsed(true)
      setHovering(false)
    }
  }

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex flex-col
        bg-gray-900 border-r border-gray-700 transition-all duration-300 ease-in-out
        ${collapsed ? "w-16" : "w-64"}`}
      onMouseEnter={expand}
      onMouseLeave={collapse}
    >
      {/* Centered Header + Nav */}
      <div className="flex flex-col flex-grow justify-center">
        {/* Header */}
        <div className="flex items-center justify-between px-4 mb-6">
          <div className="flex items-center space-x-3 truncate">
            <div
              className={`flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center 
                text-white font-bold ${collapsed ? "w-8 h-8 text-sm" : "w-10 h-10 text-lg"}`}
            >
              {userName.charAt(0).toUpperCase()}
            </div>
            {!collapsed && (
              <div className="text-white leading-tight truncate">
                <p className="text-xs text-gray-300">Welcome,</p>
                <p className="font-semibold text-sm truncate">{userName}</p>
              </div>
            )}
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 ml-2 rounded hover:bg-gray-700 text-gray-300 transition duration-150"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Navigation */}
        <ul className="px-2 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
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
                    flex items-center w-full px-3 py-2 rounded-lg
                    transition-colors duration-200 ease-in-out
                    ${isActive
                      ? "bg-green-600 text-white font-medium"
                      : "text-gray-300 hover:bg-green-500 hover:text-white"}
                  `}
                >
                  <span className="flex-shrink-0">{ICONS[tab.name]}</span>
                  {!collapsed && (
                    <span className="ml-3 whitespace-nowrap">{tab.name}</span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Logout stays at the bottom */}
      <div className="px-4 pb-5">
        <button
          onClick={() => {
            // Logout logic
          }}
          className="w-full flex items-center space-x-3 px-3 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition"
        >
          <LogOut size={18} />
          {!collapsed && <span className="whitespace-nowrap">Logout</span>}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
