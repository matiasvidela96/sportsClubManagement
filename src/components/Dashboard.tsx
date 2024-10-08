import React from 'react'
import { Users, Calendar, Trophy } from 'lucide-react'

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Total Teams" value="8" icon={Trophy} />
        <DashboardCard title="Total Players" value="120" icon={Users} />
        <DashboardCard title="Upcoming Events" value="3" icon={Calendar} />
      </div>
    </div>
  )
}

interface DashboardCardProps {
  title: string
  value: string
  icon: React.ElementType
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <p className="text-3xl font-bold text-blue-600">{value}</p>
        </div>
        <Icon size={40} className="text-blue-600" />
      </div>
    </div>
  )
}

export default Dashboard