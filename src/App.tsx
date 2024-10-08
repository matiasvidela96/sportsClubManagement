import React from 'react'
import { Users, Calendar, Trophy, Menu } from 'lucide-react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import Teams from './components/Teams'
import Players from './components/Players'
import Schedule from './components/Schedule'

function App() {
  const [activeTab, setActiveTab] = React.useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'teams':
        return <Teams />
      case 'players':
        return <Players />
      case 'schedule':
        return <Schedule />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App