import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', followers: 98000 },
  { month: 'Feb', followers: 102000 },
  { month: 'Mar', followers: 107000 },
  { month: 'Apr', followers: 111000 },
  { month: 'May', followers: 115000 },
  { month: 'Jun', followers: 119000 },
  { month: 'Jul', followers: 124500 }
];

export function FollowerGrowth() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Follower Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            formatter={(value: number) => [value.toLocaleString(), 'Followers']}
          />
          <Legend />
          <Line type="monotone" dataKey="followers" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
