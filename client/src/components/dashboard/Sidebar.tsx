import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { List, Store, WalletCards, ChartArea, PanelRightOpen } from "lucide-react"
import { Button } from '../ui/button'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`fixed top-0 left-0 h-screen bg-gray-300 dark:bg-gray-800 transition-all duration-300 ${sidebarOpen ? 'w-1/6' : 'w-16'} z-30`}>
      <div className="flex items-end justify-end p-2">
        <Button className="p-2" onClick={toggleSidebar}>
          <PanelRightOpen />
        </Button>
      </div>
      <div className={`flex flex-col items-start justify-center p-4 space-y-2 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
        {sidebarlinks.map((link) => (
          <div key={link.id} className="flex items-center space-x-2 mb-2">
            <Link to={link.path} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500" hidden={sidebarOpen} >
              {link.icon}
              {sidebarOpen && <span>{link.title}</span>}
            </Link>
          </div>
        ))}
      </div>
      <div className={`flex flex-col items-center justify-center p-4 space-y-2 transition-opacity duration-300 ${!sidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
        {sidebarlinks.map((link) => (
          <div key={link.id} className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <Link to={link.path} aria-label={link.title}>
              {link.icon}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const sidebarlinks = [
  {
    id: 1,
    title: "Orders",
    path: "/orders",
    icon: <List />
  },
  {
    id: 2,
    title: "Menu",
    path: "/menu",
    icon: <Store />
  },
  {
    id: 3,
    title: "Analytics",
    path: "/analytics",
    icon: <ChartArea />
  },
  {
    id: 4,
    title: "Wallet",
    path: "/wallet",
    icon: <WalletCards />
  }
]

export default Sidebar;
