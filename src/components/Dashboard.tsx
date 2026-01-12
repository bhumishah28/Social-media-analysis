import { MetricsGrid } from './MetricsGrid';
import { EngagementChart } from './EngagementChart';
import { PlatformBreakdown } from './PlatformBreakdown';
import { TopPosts } from './TopPosts';
import { FollowerGrowth } from './FollowerGrowth';
import { BarChart3, Users, TrendingUp, Heart, Eye, MessageCircle, Share2 } from 'lucide-react';
import Chatbot from './ChatBot';
import { useNavigate } from 'react-router-dom';



export function Dashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  // Sample data for charts and lists (replace with real data as needed)
  const followerData = [
    { month: 'Jan', followers: 80000 },
    { month: 'Feb', followers: 82000 },
    { month: 'Mar', followers: 90000 },
    { month: 'Apr', followers: 98000 },
    { month: 'May', followers: 105000 },
    { month: 'Jun', followers: 124500 },
  ];

  const engagementData = [
    { day: 'Mon', likes: 400, comments: 120, shares: 50 },
    { day: 'Tue', likes: 520, comments: 132, shares: 62 },
    { day: 'Wed', likes: 610, comments: 150, shares: 74 },
    { day: 'Thu', likes: 700, comments: 170, shares: 90 },
    { day: 'Fri', likes: 860, comments: 220, shares: 120 },
    { day: 'Sat', likes: 920, comments: 260, shares: 140 },
    { day: 'Sun', likes: 750, comments: 200, shares: 100 },
  ];

  const platformData = [
    { name: 'Instagram', value: 45, color: '#ec4899' },
    { name: 'Twitter', value: 25, color: '#3b82f6' },
    { name: 'Facebook', value: 20, color: '#10b981' },
    { name: 'LinkedIn', value: 10, color: '#a78bfa' },
  ];

  const topPosts = [
    { id: 1, platform: 'Instagram', engagement: 18.2, content: 'New product launch!', color: '#ec4899', likes: 12000, comments: 320, shares: 80 },
    { id: 2, platform: 'Twitter', engagement: 14.6, content: 'Behind the scenes', color: '#3b82f6', likes: 8200, comments: 210, shares: 45 },
    { id: 3, platform: 'Facebook', engagement: 12.3, content: 'User testimonial', color: '#10b981', likes: 5400, comments: 130, shares: 20 },
  ];

  // expose insight data globally so the local Chatbot can read it
  ;(window as any).__INSIGHT_DATA = { followerData, engagementData, platformData, topPosts };
  return (
    
    <div
      className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-400 to-orange-200 p-4 md:p-8"
      style={{ background: 'linear-gradient(135deg, lightpink 0%, lightblue 50%, #fde68a 100%)' }}
      
    >
      <Chatbot />
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h1 className="text-gray-600 mt-2">Hello{userName ? `, ${userName}` : ""}</h1>
              <div className="mt-2 p-2 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg">
                <span className='flex gap-3'>
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                  <h1 className="text-3xl font-bold text-gray-900">Social Media Analytics</h1>
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                localStorage.removeItem('isAuth');
                localStorage.removeItem('userName');
                navigate('/');
              }}
              className="h-10 px-4 rounded-md bg-white text-gray-800 shadow hover:shadow-md border border-gray-200 transition"
            >
              Logout
            </button>
          </div>
          <p className="text-gray-600">Track your social media performance across all platforms</p>
        </div>

        {/* Metrics Grid */}
        <MetricsGrid />

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <FollowerGrowth />
          <EngagementChart />
        </div>
        {/* Platform & Posts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PlatformBreakdown />
          <div className="lg:col-span-2">
            <TopPosts />
          </div>
        </div>
       
      </div>
    </div>
  );
}
