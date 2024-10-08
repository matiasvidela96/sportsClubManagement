import React from 'react'

const Teams: React.FC = () => {
  const teams = [
    { id: 1, name: 'Red Dragons', sport: 'Basketball', members: 12 },
    { id: 2, name: 'Blue Sharks', sport: 'Soccer', members: 18 },
    { id: 3, name: 'Green Eagles', sport: 'Volleyball', members: 10 },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Teams</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sport</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Members</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teams.map((team) => (
              <tr key={team.id}>
                <td className="px-6 py-4 whitespace-nowrap">{team.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{team.sport}</td>
                <td className="px-6 py-4 whitespace-nowrap">{team.members}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Teams