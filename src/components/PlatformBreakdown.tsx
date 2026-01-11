import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Instagram', value: 42, color: '#E1306C' },
  { name: 'Twitter', value: 28, color: '#1DA1F2' },
  { name: 'Facebook', value: 18, color: '#4267B2' },
  { name: 'LinkedIn', value: 12, color: '#0077B5' }
];

export function PlatformBreakdown() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 space-y-2">
        {data.map((platform) => (
          <div key={platform.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }}></div>
              <span className="text-sm text-gray-600">{platform.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{platform.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
