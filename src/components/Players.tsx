import React from 'react'

const Players: React.FC = () => {
  const players = [
    { id: 1, name: 'John Doe', team: 'Red Dragons', position: 'Forward' },
    { id: 2, name: 'Jane Smith', team: 'Blue Sharks', position: 'Midfielder' },
    { id: 3, name: 'Mike Johnson', team: 'Green Eagles', position: 'Setter' },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Players</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {players.map((player) => (
              <tr key={player.id}>
                <td className="px-6 py-4 whitespace-nowrap">{player.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{player.team}</td>
                <td className="px-6 py-4 whitespace-nowrap">{player.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Players