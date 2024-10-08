import React from 'react'
import { Users, Calendar, Trophy, BarChart2 } from 'lucide-react'

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart2 },
    { id: 'teams', label: 'Teams', icon: Trophy },
    { id: 'players', label: 'Players', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
  ]

  return (
    <nav className="bg-gray-800 text-white w-64 p-6">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={`flex items-center space-x-2 w-full p-2 rounded ${
                activeTab === item.id ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation