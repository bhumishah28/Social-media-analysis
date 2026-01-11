import { Users, Heart, TrendingUp, Eye } from 'lucide-react';
import { MetricCard } from './MetricCard';

export function MetricsGrid() {
  const metrics = [
    {
      title: 'Total Followers',
      value: '124.5K',
      change: '+12.5%',
      trend: 'up' as const,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Engagement Rate',
      value: '4.8%',
      change: '+0.8%',
      trend: 'up' as const,
      icon: Heart,
      color: 'pink'
    },
    {
      title: 'Total Posts',
      value: '1,247',
      change: '+23',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Total Reach',
      value: '2.4M',
      change: '+18.2%',
      trend: 'up' as const,
      icon: Eye,
      color: 'purple'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  );
}
