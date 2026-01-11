import { Users, Heart, TrendingUp, Eye } from 'lucide-react';

export const metrics = [
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

export const followerGrowthData = [
  { month: 'Jan', followers: 98000 },
  { month: 'Feb', followers: 102000 },
  { month: 'Mar', followers: 107000 },
  { month: 'Apr', followers: 111000 },
  { month: 'May', followers: 115000 },
  { month: 'Jun', followers: 119000 },
  { month: 'Jul', followers: 124500 }
];

export const engagementData = [
  { day: 'Mon', likes: 4200, comments: 850, shares: 420 },
  { day: 'Tue', likes: 3800, comments: 720, shares: 380 },
  { day: 'Wed', likes: 5100, comments: 980, shares: 510 },
  { day: 'Thu', likes: 4600, comments: 890, shares: 460 },
  { day: 'Fri', likes: 6200, comments: 1200, shares: 620 },
  { day: 'Sat', likes: 5800, comments: 1100, shares: 580 },
  { day: 'Sun', likes: 4900, comments: 950, shares: 490 }
];

export const platformData = [
  { name: 'Instagram', value: 42, color: '#E1306C' },
  { name: 'Twitter', value: 28, color: '#1DA1F2' },
  { name: 'Facebook', value: 18, color: '#4267B2' },
  { name: 'LinkedIn', value: 12, color: '#0077B5' }
];

export const topPosts = [
  {
    id: 1,
    platform: 'Instagram',
    content: 'New product launch announcement! Check out our latest innovation...',
    likes: 8542,
    comments: 342,
    shares: 156,
    engagement: 9.2,
    color: '#E1306C'
  },
  {
    id: 2,
    platform: 'Twitter',
    content: 'Behind the scenes look at our creative process. Thread 🧵',
    likes: 6234,
    comments: 287,
    shares: 421,
    engagement: 8.7,
    color: '#1DA1F2'
  },
  {
    id: 3,
    platform: 'LinkedIn',
    content: 'Excited to announce our partnership with industry leaders...',
    likes: 4521,
    comments: 198,
    shares: 312,
    engagement: 7.5,
    color: '#0077B5'
  },
  {
    id: 4,
    platform: 'Facebook',
    content: 'Customer success story: How we helped transform their business',
    likes: 3842,
    comments: 156,
    shares: 234,
    engagement: 6.8,
    color: '#4267B2'
  }
];
