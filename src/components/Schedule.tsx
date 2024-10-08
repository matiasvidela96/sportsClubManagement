import React from 'react'

const Schedule: React.FC = () => {
  const events = [
    { id: 1, title: 'Basketball Tournament', date: '2023-04-15', time: '14:00', location: 'Main Court' },
    { id: 2, title: 'Soccer Practice', date: '2023-04-17', time: '18:00', location: 'Field A' },
    { id: 3, title: 'Volleyball Match', date: '2023-04-20', time: '16:30', location: 'Gym 2' },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Schedule</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event.id}>
                <td className="px-6 py-4 whitespace-nowrap">{event.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{event.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{event.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{event.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Schedule