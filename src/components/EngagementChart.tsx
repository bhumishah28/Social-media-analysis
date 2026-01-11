import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { day: 'Mon', likes: 4200, comments: 850, shares: 420 },
  { day: 'Tue', likes: 3800, comments: 720, shares: 380 },
  { day: 'Wed', likes: 5100, comments: 980, shares: 510 },
  { day: 'Thu', likes: 4600, comments: 890, shares: 460 },
  { day: 'Fri', likes: 6200, comments: 1200, shares: 620 },
  { day: 'Sat', likes: 5800, comments: 1100, shares: 580 },
  { day: 'Sun', likes: 4900, comments: 950, shares: 490 }
];

export function EngagementChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Engagement</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="day" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
          />
          <Legend />
          <Bar dataKey="likes" fill="#ec4899" radius={[4, 4, 0, 0]} />
          <Bar dataKey="comments" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="shares" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
